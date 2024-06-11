/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link";
import { tokenAuth } from '@/helpers/cookies';

interface ProfileImageFormState {
    profileImage: File | null;
    profileImageUrl: string | null;
}

interface ProductFormState {
    name: string;
    category_id: string;
    price: number;
    image: string;
    status: boolean;
}

export default function TambahProduk() {
    const [profileImageFormState, setProfileImageFormState] = useState<ProfileImageFormState>({
        profileImage: null,
        profileImageUrl: null,
    });

    const [productFormState, setProductFormState] = useState<ProductFormState>({
        name: '',
        category_id: '',
        price: 0,
        image: '',
        status: true,
    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImageFormState({
                profileImage: file,
                profileImageUrl: imageUrl,
            });
            setProductFormState({
                ...productFormState,
                image: file.name,
            });
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProductFormState({
            ...productFormState,
            [name]: name === 'price' ? parseFloat(value) : value,
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        console.log(productFormState)
        event.preventDefault();
        return
        try {
            const response = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth()}`,
                },
                body: JSON.stringify(productFormState),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Product added:', data);
            // Optionally, reset form state or redirect to another page
        } catch (error) {
            console.error('Failed to add product:', error);
        }
    };

    return (
        <article className="w-full p-5 md:p-6 lg:p-8">
            <section className="w-full sm:w-9/12 md:w-7/12">
                <h1 className="font-semibold text-[30px] text-gray-800">Tambah Produk</h1>
                <p className="text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repellat voluptatem aperiam nam nemo praesentium, nesciunt tempora perferendis.</p>
            </section>
            <div className="flex flex-wrap md:flex-nowrap mt-5">
                <form className="order-2 md:order-1 w-full md:w-7/12 flex flex-wrap gap-y-1 md:pr-5 mb-5 md:mb-0" onSubmit={handleSubmit}>
                    <div className="w-full max-w-full">
                        <div className="mb-2.5">
                            <label
                                htmlFor="name"
                                className="block cursor-pointer font-medium text-base text-gray-700 mb-1.5"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={productFormState.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="w-full text-base text-gray-700 py-2 px-3 border border-slate-300 focus:outline-blue-500 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-full">
                        <div className="mb-2.5">
                            <label
                                htmlFor="category_id"
                                className="block cursor-pointer font-medium text-base text-gray-700 mb-1.5"
                            >
                                Category
                            </label>
                            <input
                                id="category_id"
                                name="category_id"
                                type="text"
                                value={productFormState.category_id}
                                onChange={handleInputChange}
                                placeholder="Category"
                                className="w-full text-base text-gray-700 py-2 px-3 border border-slate-300 focus:outline-blue-500 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-full">
                        <div className="mb-2.5">
                            <label
                                htmlFor="price"
                                className="block cursor-pointer font-medium text-base text-gray-700 mb-1.5"
                            >
                                Price
                            </label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                value={productFormState.price}
                                onChange={handleInputChange}
                                placeholder="Price"
                                className="w-full text-base text-gray-700 py-2 px-3 border border-slate-300 focus:outline-blue-500 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-full">
                        <div className="mb-2.5">
                            <label
                                htmlFor="status"
                                className="block cursor-pointer font-medium text-base text-gray-700 mb-1.5"
                            >
                                Status
                            </label>
                            <Select
                                onValueChange={(value) => setProductFormState({ ...productFormState, status: value === "true" })}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem value="true">Active</SelectItem>
                                        <SelectItem value="false">Inactive</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="w-full max-w-full flex items-center justify-end gap-x-5 mt-5">
                        <Link href="/dashboard">Batal</Link>
                        <Button type="submit">Simpan</Button>
                    </div>
                </form>
            </div>
        </article>
    )
}
