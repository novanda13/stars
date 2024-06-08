"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Food = {
    id: number;
    name: string;
    price: number;
    image: string;
    status: boolean;
    category: object;
}

export const columns: ColumnDef<Food>[] = [
    {
        accessorKey: "id",
        header: "No",
    },
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
]
