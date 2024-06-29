'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function TambahProdukAction(formData: FormData) {
    const cookieStore = cookies()
    const token = cookieStore.get('userToken')

    const name = formData.get('name') as string;
    const price = formData.get('price') as string;
    const image = formData.get('image') as string;
    const status = formData.get('status') as string;

    const response = await fetch('http://backend:3000/api/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.value}`,
        },
        body: JSON.stringify({
            name,
            category_id: "fe72c8bb-d8d1-43d6-abb8-dac97403a22d",
            price: parseFloat(price),
            image,
            status: status == 'true' ? true : false,
        }),
    })

    const data = await response.json();

    if (data.error) {
        redirect('/produk/tambah')
    }

    revalidatePath('/produk')
    redirect('/produk')
}