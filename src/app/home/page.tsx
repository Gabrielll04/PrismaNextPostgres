import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"

export default async function HomePage() {

    const user = await getCurrentUser()
    console.log(user?.image)
    if (!user) {
        redirect('/login')
    }

    return (
        <div>Welcome to the jungle, {user.name}</div>
    )
}