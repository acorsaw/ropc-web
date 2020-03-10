variable "myregion" {
    default = "us-east-1"
}

data "aws_caller_identity" "current" {}

output "account_id" {
  value = "${data.aws_caller_identity.current.account_id}"
}

resource "aws_api_gateway_rest_api" "ropc_api" {
    name = "ropc_api"

    endpoint_configuration {
        types = ["REGIONAL"]
    }
}

# Create the resource
resource "aws_api_gateway_resource" "calendar_resource" {
    rest_api_id = aws_api_gateway_rest_api.ropc_api.id
    parent_id = aws_api_gateway_rest_api.ropc_api.root_resource_id
    path_part = "calendar"
}

# Create the HTTP method for the resource
resource "aws_api_gateway_method" "calendar_event" {
    rest_api_id = aws_api_gateway_rest_api.ropc_api.id
    resource_id = aws_api_gateway_resource.calendar_resource.id
    http_method = "GET"
    authorization = "NONE"
}

# Package up the lambda
data "archive_file" "get_event_zip" {
    type = "zip"
    source_file = "index.js"
    output_path = "get_calendar_event.zip"
}

# Role for the Lambda
resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
          "sts:AssumeRole"
      ],
      "Principal": {
          "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "lambda_dynamo_policy" {
    name = "dynamodb_lambda_policy"
    role = aws_iam_role.iam_for_lambda.id
    policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:*"
      ],
      "Resource": "${aws_dynamodb_table.ropc_dynamodb_table.arn}"
    }
  ]
}
EOF
}

# Create the Lambda for the integration
resource "aws_lambda_function" "get_calendar_event" {
    filename = "get_calendar_event.zip"
    function_name = "get_calendar_event"
    role = aws_iam_role.iam_for_lambda.arn
    handler = "index.handler"
    source_code_hash = data.archive_file.get_event_zip.output_base64sha256
    runtime = "nodejs12.x"
}

# Choose the Integration Type for the HTTP method
resource "aws_api_gateway_integration" "calendar_event_get_integration" {
    rest_api_id = aws_api_gateway_rest_api.ropc_api.id
    resource_id = aws_api_gateway_resource.calendar_resource.id
    http_method = aws_api_gateway_method.calendar_event.http_method
    integration_http_method = "POST"
    type = "AWS"
    uri = aws_lambda_function.get_calendar_event.invoke_arn
    request_templates = {
    "application/json" = <<EOF
{
   "id" : "$input.params('id')"
}
EOF
    }
}

resource "aws_lambda_permission" "gateway_invoke_get_lambda" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.get_calendar_event.arn
    principal     = "apigateway.amazonaws.com"

    # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
    # source_arn = "arn:aws:execute-api:${var.myregion}:${data.aws_caller_identity.current.account_id}:${aws_api_gateway_rest_api.ropc_api.id}/*/${aws_api_gateway_method.calendar_event.http_method}/${aws_api_gateway_resource.calendar_resource.path}"
    source_arn = "${aws_api_gateway_rest_api.ropc_api.execution_arn}/*/*/*"
}

# Allow the API Gateway to call the Lambda
resource "aws_iam_role" "role" {
    
  name = "run_lambda_role"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy" "gateway_lambda_policy" {
    name = "dynamodb_lambda_policy"
    role = aws_iam_role.iam_for_lambda.id
    policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:*"
      ],
      "Resource": "${aws_dynamodb_table.ropc_dynamodb_table.arn}"
    }
  ]
}
EOF
}

resource "aws_api_gateway_method_response" "response_200" {
  rest_api_id = "${aws_api_gateway_rest_api.ropc_api.id}"
  resource_id = "${aws_api_gateway_resource.calendar_resource.id}"
  http_method = "${aws_api_gateway_method.calendar_event.http_method}"
  status_code = "200"
}

resource "aws_api_gateway_integration_response" "MyDemoIntegrationResponse" {
  rest_api_id = "${aws_api_gateway_rest_api.ropc_api.id}"
  resource_id = "${aws_api_gateway_resource.calendar_resource.id}"
  http_method = "${aws_api_gateway_method.calendar_event.http_method}"
  status_code = "${aws_api_gateway_method_response.response_200.status_code}"
}