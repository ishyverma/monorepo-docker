import prisma from "@repo/db/client";

export default async function Home() {
  const users = await prisma.user.findMany();
  return <div>
    {users.map(user => (
      <div key={user.id}>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    ))}
  </div>
}

export const revalidate = 60 // every 60 seconds it will refresh this is called incremental site generation 
// or
// export const dynamic = 'force-dynamic'