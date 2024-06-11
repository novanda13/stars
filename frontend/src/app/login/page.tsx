import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import FormLogin from "@/components/front/FormLogin"

export default function Login() {
    const cookieStore = cookies()
    const token = cookieStore.get('userToken')
    if (token) return redirect('/dashboard')
    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-blue-500">Login</CardTitle>
                    <CardDescription>Tulis email dan password Anda untuk menuju halaman <strong className="font-medium">Dashboard</strong> Menua</CardDescription>
                </CardHeader>
                <CardContent>
                    <FormLogin />
                </CardContent>
            </Card>
        </main>
    )
}