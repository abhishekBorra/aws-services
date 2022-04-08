const router = require('express').Router()
const helper = require('../helpers/s3')

router.get('/getData/:fileName', async (req, res) => {
  const data = await helper.getDataFromFile(req.params.fileName)
  res.send(data).end()
})

module.exports = router
