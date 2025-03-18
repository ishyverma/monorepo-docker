import express from "express";
import prisma from "@repo/db/client";
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const todos = await prisma.todo.findMany()
  res.json({
    todos
  })
})

app.post('/', async (req, res) => {
  const addTodo = await prisma.todo.create({
    data: {
      task: Math.random().toString(),
      userId: ''
    }
  })

  res.json({
    message: "Todo has been added"
  })
})

app.listen(3000);