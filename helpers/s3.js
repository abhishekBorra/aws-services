const AWS = require('aws-sdk')
const csv = require('csvtojson')
const S3 = new AWS.S3()

async function getDataFromFile (fileName) {
  const params = {
    Bucket: process.env.AWS_S3_Bucket,
    Key: fileName
  }

  const stream = S3.getObject(params).createReadStream()

  const json = await csv().fromStream(stream)

  return json
}

module.exports = {
  getDataFromFile
}
