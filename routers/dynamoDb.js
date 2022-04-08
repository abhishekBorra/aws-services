const router = require('express').Router()

router.get('/getData/:tableName', (req, res) => {
  res.send(`Hello from DynamoDb table: ${req.params.tableName}!`)
})

module.exports = router
