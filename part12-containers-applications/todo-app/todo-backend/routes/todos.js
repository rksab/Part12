const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const { setAsync, getAsync } = require('../redis/index.js');

/* GET todos listing. */
router.get('/', async (req, res) => {
  console.log('Hello from the otherside.-Adele')
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
   const count = await getAsync('number_of_todos')
   const new_count = count ? Number(count) + 1: 0
   await setAsync('number_of_todos', new_count)
   console.log(new_count)
  res.send(todo);
});


const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.json(req.todo); // Implement this
});

/* PUT todo. */ 
singleRouter.put('/', async (req, res) => {
  const new_todo = req.body
  req.todo.set(new_todo)
  await req.todo.save()
  res.send(req.todo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
