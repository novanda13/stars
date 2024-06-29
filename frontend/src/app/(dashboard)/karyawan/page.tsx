"use client"
import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { tokenAuth } from '@/helpers/cookies';
import Link from 'next/link';

interface Role {
    name: string;
}

interface User {
    username: string;
    name: string;
    role: Role;
}

export default function Karyawan() {
    const [listKaryawan, setListKaryawan] = useState<User[]>([]);

    useEffect(() => {
        const fetchKaryawan = async () => {
            try {
                if (!tokenAuth()) {
                    throw new Error('Token not found');
                }
                const response = await fetch('http://10.50.0.125:3000/api/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tokenAuth()}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const { data } = await response.json();
                setListKaryawan(data);
            } catch (error: any) {
                console.log(error)
            }
        };

        fetchKaryawan();
    }, []);

    const handleDeleteProduct = async (username: string) => {
        try {
            const response = await fetch(`http://10.50.0.125:3000/api/users/${username}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth()}`,
                },
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            // Menghapus produk dari state setelah berhasil dihapus
            setListKaryawan(listKaryawan.filter(karyawan => karyawan.username !== username));
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <article className="h-full overflow-y-auto w-full p-5 md:p-6 lg:p-8">
            <section className="w-full sm:w-9/12 md:w-7/12">
                <h1 className="font-semibold text-[30px] text-gray-800">Karyawan</h1>
                <p className="text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repellat voluptatem aperiam nam nemo praesentium, nesciunt tempora perferendis.</p>
            </section>
            <div className="w-full mt-5 bg-white p-5">
                <div className="flex items-center justify-end mb-3">
                    <Link href="karyawan/tambah/" className="font-medium text-sm py-2 px-5 rounded text-white bg-blue-500">Tambah karyawan</Link>
                </div>
                <Table>
                    <TableCaption>A list of your recent karyawan.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>NO</TableHead>
                            <TableHead>Nama</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {listKaryawan.map((karyawan, index: number) => (
                            <TableRow key={karyawan.username}>
                                <TableCell>{++index}</TableCell>
                                <TableCell>{karyawan.name}</TableCell>
                                <TableCell>{karyawan.username}</TableCell>
                                <TableCell>{karyawan.role.name}</TableCell>
                                <TableCell className="flex gap-x-2">
                                    <button className="h-8 w-8 flex items-center justify-center rounded bg-yellow-500 hover:bg-yellow-600 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </button>
                                    <button onClick={() => handleDeleteProduct(karyawan.username)} className="h-8 w-8 flex items-center justify-center rounded bg-red-500 hover:bg-red-600 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </article>
    )
}