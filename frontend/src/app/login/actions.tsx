'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function login(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
    })

    const data = await response.json();

    if (data.error) {
        redirect('/login')
    }

    cookies().set('userToken', data.token)
    cookies().set('userId', data.user.id)
    cookies().set('userUsername', data.user.username)
    cookies().set('userFullName', data.user.name)
    cookies().set('userRole', data.user.role.name)

    revalidatePath('/dashboard')
    redirect('/dashboard')
}