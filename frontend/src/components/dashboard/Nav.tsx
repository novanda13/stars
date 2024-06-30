"use client"
import { useProviderContext } from "@/providers/Provider";
import {
    LogOut,
} from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { logout } from "@/helpers/logout";
import { useRouter } from 'next/navigation'

export default function DashboardNav() {
    const { asideLeftKomponen, setAsideLeftKomponen } = useProviderContext();
    const router = useRouter()
    const handleLogout = () => {
        logout();
        router.push('/login');
    };
    return (
        <nav id="nav" className="w-full bg-blue-500">
            <div className="h-full w-full flex items-center justify-between px-3">
                <div className="flex items-center gap-x-5">
                    <button type="button" className="text-white" onClick={() => setAsideLeftKomponen(!asideLeftKomponen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <div className="flex items-center gap-x-2">
                        <svg className="h-10 w-10" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 22.875C0 10.2415 10.2415 0 22.875 0C35.5085 0 45.75 10.2415 45.75 22.875C45.75 35.5085 35.5085 45.75 22.875 45.75C10.2415 45.75 0 35.5085 0 22.875ZM35.5833 22.875C35.5833 15.8564 29.8936 10.1667 22.875 10.1667C15.8563 10.1667 10.1666 15.8564 10.1666 22.875C10.1666 29.8936 15.8563 35.5833 22.875 35.5833C29.8936 35.5833 35.5833 29.8936 35.5833 22.875Z" fill="#ffffff" />
                        </svg>
                        <h1 className="font-bold text-[30px] text-white">Cafe Menua.Tuku</h1>
                    </div>
                </div>
                <div className="relative flex items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage className="cursor-pointer" src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>MT</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Settings</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Link href="/karyawan/ubah/12">Profil</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/riwayat-transaksi">Transaksi</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <button className="flex" onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}