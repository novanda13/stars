/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProfileImageFormState {
    profileImage: File | null;
    profileImageUrl: string | null;
}

export default function TambahProduk() {
    const [profileImageFormState, setProfileImageFormState] = useState<ProfileImageFormState>({
        profileImage: null,
        profileImageUrl: null,
    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImageFormState({
                profileImage: file,
                profileImageUrl: imageUrl,
            });
        }
    };

    const handleSubmitImage = (event: React.FormEvent) => {
        event.preventDefault();
        // Lakukan sesuatu dengan file, misalnya mengunggah ke server
        console.log('Profile image:', profileImageFormState.profileImage);
    };

    return (
        <article className="w-full p-5 md:p-6 lg:p-8">
            <section className="w-full sm:w-9/12 md:w-7/12">
                <h1 className="font-semibold text-[30px] text-gray-800">Tambah Produk</h1>
                <p className="text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repellat voluptatem aperiam nam nemo praesentium, nesciunt tempora perferendis.</p>
            </section>
            <div className="flex flex-wrap md:flex-nowrap mt-5">
                <form className="order-2 md:order-1 w-full md:w-7/12 flex flex-wrap gap-y-1 md:pr-5 mb-5 md:mb-0">
                    <div className="w-full max-w-full">
                        <div className="mb-2.5">
                            <label
                                htmlFor="basic-username"
                                className="block cursor-pointer font-medium text-base text-gray-700 mb-1.5"
                            >
                                Name
                            </label>
                            <input
                                id="basic-username"
                                type="text"
                                placeholder="Name"
                                className="w-full text-base text-gray-700 py-2 px-3 border border-slate-300 focus:outline-blue-500 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-full">
                        <div className="mb-2.5">
                            <label
                                htmlFor="basic-username"
                                className="block cursor-pointer font-medium text-base text-gray-700 mb-1.5"
                            >
                                Username
                            </label>
                            <input
                                id="basic-username"
                                type="text"
                                placeholder="Username"
                                className="w-full text-base text-gray-700 py-2 px-3 border border-slate-300 focus:outline-blue-500 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-full">
                        <div className="mb-2.5">
                            <label
                                htmlFor="basic-username"
                                className="block cursor-pointer font-medium text-base text-gray-700 mb-1.5"
                            >
                                Password
                            </label>
                            <input
                                id="basic-username"
                                type="text"
                                placeholder="Username"
                                className="w-full text-base text-gray-700 py-2 px-3 border border-slate-300 focus:outline-blue-500 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-full">
                        <div className="mb-2.5">
                            <label
                                htmlFor="basic-username"
                                className="block cursor-pointer font-medium text-base text-gray-700 mb-1.5"
                            >
                                Phone
                            </label>
                            <input
                                id="basic-username"
                                type="text"
                                placeholder="Name"
                                className="w-full text-base text-gray-700 py-2 px-3 border border-slate-300 focus:outline-blue-500 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-full flex items-center justify-end gap-x-5 mt-5">
                        <Link href="/dashboard">Batal</Link>
                        <Button>Simpan</Button>
                    </div>
                </form>
                <form className="order-1 md:order-2 w-full md:w-5/12 flex justify-center" onSubmit={handleSubmitImage}>
                    <div className="text-center">
                        <div className="relative h-[200px] w-[200px] mb-3">
                            <label htmlFor="profileImage" className="flex items-center justify-center rounded-full size-8 bg-blue-500 text-white z-10 absolute right-2.5 bottom-2.5 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                </svg>
                            </label>
                            <input
                                className="invisible absolute"
                                type="file"
                                id="profileImage"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <img
                                className="h-full w-full rounded-full object-cover"
                                src={profileImageFormState.profileImageUrl ? profileImageFormState.profileImageUrl : 'https://github.com/shadcn.png'}
                                alt="Profile Preview"
                            />
                        </div>
                        {profileImageFormState.profileImageUrl && (
                            <Button className="text-sm">Simpan Foto</Button>
                        )}
                    </div>
                </form>
            </div>
        </article>
    )
}