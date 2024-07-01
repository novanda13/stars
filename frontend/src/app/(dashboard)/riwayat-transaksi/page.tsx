"use client";
import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { tokenAuth } from "@/helpers/cookies";
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
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                if (!tokenAuth()) {
                    throw new Error("Token not found");
                }
                const response = await fetch("http://localhost:3000/api/transactions", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${tokenAuth()}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data: TransactionsItem[] = await response.json();
                setTransactions(data);
            } catch (error: any) {
                console.log(error);
            }
        };

        fetchTransactions();
    }, []);

    const handleDeleteTransaction = async (id: string) => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/transactions/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${tokenAuth()}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            // Menghapus produk dari state setelah berhasil dihapus
            setTransactions(transactions.filter((transaction) => transaction.id !== id));
        } catch (error: any) {
            console.log(error);
        }
    };

    // Fungsi untuk memformat tanggal
    const formatDate = (timestamp: string): string => {
        return format(new Date(timestamp), "dd MMMM yyyy, HH:mm:ss");
    };

    // Komponen yang menerima timestamp sebagai prop
    const TimestampComponent: React.FC<TimestampComponentProps> = ({
        timestamp,
    }) => {
        return <span>{formatDate(timestamp)}</span>;
    };

    // Filter transactions based on search term
    const filteredTransactions = transactions.filter((transaction) =>
        transaction.products.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <article className="h-full overflow-y-auto w-full p-5 md:p-6 lg:p-8">
            <section className="w-full sm:w-9/12 md:w-7/12">
                <h1 className="font-semibold text-[30px] text-gray-800">
                    Riwayat Transaksi
                </h1>
            </section>
            <div className="w-full mt-5 bg-white p-5">
                <div className="flex items-center justify-start mb-3">
                    <div className="relative w-full max-w-[500px]">
                        <input
                            id="icon-search"
                            type="text"
                            placeholder="search"
                            className="w-full text-base text-gray-700 py-2 pl-10 border border-slate-300 focus:outline-blue-500 rounded-md peer"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-slate-500 peer-focus:text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.75}
                                stroke="currentColor"
                                className="size-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
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
                        {filteredTransactions.map((transaction, index: number) => (
                            <TableRow key={transaction.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{transaction.products}</TableCell>
                                <TableCell>Rp {transaction.total_price}</TableCell>
                                <TableCell>
                                    <TimestampComponent timestamp={transaction.created_at} />
                                </TableCell>
                                <TableCell className="flex gap-x-2">
                                    <button
                                        onClick={() => handleDeleteTransaction(transaction.id)}
                                        className="h-8 w-8 flex items-center justify-center rounded bg-red-500 hover:bg-red-600 text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </article>
    );
}
