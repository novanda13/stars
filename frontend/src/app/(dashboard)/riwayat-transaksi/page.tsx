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
import { format } from "date-fns";

interface TimestampComponentProps {
    timestamp: string;
}
interface TransactionsItem {
    id: string;
    user_id: string;
    products: string;
    total_price: number;
    created_at: string;
}

export default function Transaksi() {
    const [transactions, setTransactions] = useState<TransactionsItem[]>([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                if (!tokenAuth()) {
                    throw new Error('Token not found');
                }
                const response = await fetch('http://159.223.64.28:3000/api/transactions', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tokenAuth()}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data: TransactionsItem[] = await response.json();
                setTransactions(data);
            } catch (error: any) {
                console.log(error)
            }
        };

        fetchTransactions();
    }, []);

    const handleDeleteTransaction = async (id: string) => {
        try {
            const response = await fetch(`http://159.223.64.28:3000/api/transactions/${id}`, {
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
            setTransactions(transactions.filter(transaction => transaction.id !== id));
        } catch (error: any) {
            console.log(error);
        }
    };

    // Fungsi untuk memformat tanggal
    const formatDate = (timestamp: string): string => {
        return format(new Date(timestamp), "dd MMMM yyyy, HH:mm:ss");
    };

    // Komponen yang menerima timestamp sebagai prop
    const TimestampComponent: React.FC<TimestampComponentProps> = ({ timestamp }) => {
        return <span>{formatDate(timestamp)}</span>;
    };

    return (
        <article className="h-full overflow-y-auto w-full p-5 md:p-6 lg:p-8">
            <section className="w-full sm:w-9/12 md:w-7/12">
                <h1 className="font-semibold text-[30px] text-gray-800">Riawyat Transaksi</h1>
                <p className="text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repellat voluptatem aperiam nam nemo praesentium, nesciunt tempora perferendis.</p>
            </section>
            <div className="w-full mt-5 bg-white p-5">
                <Table>
                    <TableCaption>A list of your recent transactions.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>NO</TableHead>
                            <TableHead>Products</TableHead>
                            <TableHead>Total Price</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction, index: number) => (
                            <TableRow key={transaction.id}>
                                <TableCell>{++index}</TableCell>
                                <TableCell>{transaction.products}</TableCell>
                                <TableCell>{transaction.total_price}</TableCell>
                                <TableCell><TimestampComponent timestamp={transaction.created_at} /></TableCell>
                                <TableCell className="flex gap-x-2">
                                    <button onClick={() => handleDeleteTransaction(transaction.id)} className="h-8 w-8 flex items-center justify-center rounded bg-red-500 hover:bg-red-600 text-white">
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
