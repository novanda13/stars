import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { login } from "@/app/login/actions"

export default function FormLogin() {
    return (
        <form className="space-y-4" action={login}>
            <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" placeholder="Username" required type="username" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" required type="password" placeholder="Password" />
            </div>
            <Button className="w-full bg-blue-600 text-white" type="submit">
                Login
            </Button>
        </form>
    )
}