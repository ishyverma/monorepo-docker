import prisma from "@repo/db/client";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async socket => {
  const user = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString()
    }
  })
  socket.send(JSON.stringify(user))
})