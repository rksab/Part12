const express = require('express');
const redis = require('../redis')
const router = express.Router();
const { setAsync, getAsync } = require('../redis/index.js');

const configs = require('../util/config')

let visits = 0
console.log("hello")
/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const count = await getAsync('number_of_todos')
  res.json({added_todos: Number(count) || 0 })
})


module.exports = router;
