import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function Home() {
  const cookieStore = cookies()
  const token = cookieStore.get('userToken')
  if (token) return redirect('/dashboard')
  return (
    <h1>Home</h1>
  );
}
