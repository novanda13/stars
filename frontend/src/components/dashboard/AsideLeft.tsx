"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { useProviderContext } from "@/providers/Provider";

export default function DashboardAsideLeft() {
    const pathname = usePathname()
    const { asideLeftKomponen } = useProviderContext();
    return (
        <aside id="aside-left" className={`${asideLeftKomponen ? 'aside-left__active' : ''} bg-white border-r transition-all duration-300`}>
            <div className="h-full relative flex flex-col font-semibold text-sm">
                <div className="flex items-center h-[60px] px-3 bg-slate-100">
                    <h3 className="font-semibold text-xl text-gray-900">Menu</h3>
                </div>
                <Link href="/dashboard" className={`${pathname === '/dashboard' ? 'bg-blue-100 border-l-4 border-[#0C085C]' : ''} flex items-center gap-x-1.5 py-4 px-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <p>DASHBOARD</p>
                </Link>
                <Link href="/riwayat-transaksi" className={`${pathname === '/riwayat-transaksi' ? 'bg-blue-100 border-l-4 border-[#0C085C]' : ''} flex items-center gap-x-1.5 py-4 px-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                    </svg>
                    <p>RIWAYAT TRANSAKSI</p>
                </Link>
                <Link href="/produk" className={`${pathname === '/produk' ? 'bg-blue-100 border-l-4 border-[#0C085C]' : ''} flex items-center gap-x-1.5 py-4 px-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <p>PRODUCT</p>
                </Link>
                <Link href="/karyawan" className={`${pathname === '/karyawan' ? 'bg-blue-100 border-l-4 border-[#0C085C]' : ''} flex items-center gap-x-1.5 py-4 px-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <p>KARYAWAN</p>
                </Link>
            </div>
        </aside>
    )
}