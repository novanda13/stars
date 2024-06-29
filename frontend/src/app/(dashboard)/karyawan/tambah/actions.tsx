'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function TambahKaryawanAction(formData: FormData) {
    const cookieStore = cookies()
    const token = cookieStore.get('userToken')

    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const picture = formData.get('picture') as string;

    const response = await fetch('http://159.223.64.28:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            username,
            password,
            name,
            role_id: "4ccf6160-d97a-4653-b323-53dafe1592a9",
            phone,
            picture,
        }),
    })

    const data = await response.json();

    if (data.error) {
        redirect('/karyawan/tambah')
    }

    revalidatePath('/karyawan')
    redirect('/karyawan')
}