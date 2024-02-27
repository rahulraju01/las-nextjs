import { getServerSession } from "next-auth"

export default async function HomePage() {
    const session = await getServerSession();
    return (<>
        <h1>Home Page</h1>
        <p>Welcome {session?.user?.email}</p>
    </>)
}
