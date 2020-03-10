resource "aws_dynamodb_table_item" "item1" {
  table_name = aws_dynamodb_table.ropc_dynamodb_table.name
  hash_key   = aws_dynamodb_table.ropc_dynamodb_table.hash_key
  range_key  = aws_dynamodb_table.ropc_dynamodb_table.range_key

  item = <<ITEM
    {
    "category": {"S": "calendar"},
    "key": {"S": "79204eb6-d33f-40c9-a12e-af91803d362c"},
    "title": {"S": "Badge Lesson"},
    "start": {"S": "2020-03-01T17:00:00Z"},
    "end": {"S": "2020-03-01T18:30:00Z"},
    "all_day": {"S": "N"},
    "details": {"S": "Badge Lesson at Looking Glass Farms on bandaging"},
    "location": {"S": "81 County Rd 2000 E, Carlock, IL 61725"}
    }
  ITEM
}