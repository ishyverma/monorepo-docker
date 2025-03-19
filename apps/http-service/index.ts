import express from "express";
import prisma from "@repo/db/client";
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json({
    users
  })
})

app.post('/', async (req, res) => {
  const addTodo = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString()
    }
  })

  res.json({
    message: "User has been created"
  })
})

app.listen(3001);