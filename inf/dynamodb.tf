resource "aws_dynamodb_table" "ropc_dynamodb_table" {
  name           = "ropc"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "category"
  range_key      = "key"

  attribute {
    name = "category"
    type = "S"
  }

  attribute {
    name = "key"
    type = "S"
  }
    
  attribute {
    name = "start"
    type = "S"
  }

  global_secondary_index {
    name               = "ponyclub_by_start"
    hash_key           = "category"
    range_key          = "start"
    write_capacity     = 1
    read_capacity      = 5
    projection_type    = "INCLUDE"
    non_key_attributes = ["key"]
  }

}