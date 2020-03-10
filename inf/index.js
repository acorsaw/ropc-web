const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event) => {
    
    const params = {
        Key: {
            "category": "calendar",
            "key": event.id
        },
        TableName: "ropc",
        AttributesToGet: [
            "category",
            "key",
            "title",
            "start",
            "end",
            "all_day",
            "details",
            "location"
        ]
    }
    
    const result = await docClient.get(params, function(err, data) {
      if (err) {
          console.log(err, err.stack)
      } else {
          return data
      }
    }).promise();
    
    return result['Item']

};