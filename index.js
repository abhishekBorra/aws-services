const serverless = require('serverless-http')
const routerForS3 = require('./routers/s3')
const routerForDynamoDb = require('./routers/dynamoDb')
const app = require('express')()
const port = 3000

app.use('/s3', routerForS3)
app.use('/dynamoDb', routerForDynamoDb)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

exports.handler = serverless(app)
