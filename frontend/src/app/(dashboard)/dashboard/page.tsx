/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import "./dashboard.css"
import { tokenAuth } from '@/helpers/cookies';

interface FoodItem {
    id: number;
    name: string;
    price: number;
    image: string;
    status: boolean;
    category: object;
}

export default function DashboardHome() {
    const [products, setProducts] = useState<FoodItem[]>([]);
    const [orderedFoods, setOrderedFoods] = useState<FoodItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [productsOrder, setProductsOrder] = useState<string>("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (!tokenAuth()) {
                    throw new Error('Token not found');
                }
                const response = await fetch('http://159.223.64.28:3000/api/products', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tokenAuth()}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data: FoodItem[] = await response.json();
                setProducts(data);
            } catch (error: any) {
                console.log(error)
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = orderedFoods.reduce((sum, food) => sum + food.price, 0);
            setTotalPrice(total);
        };

        const rewriteProducts = () => {
            const productsList = orderedFoods.map(item => item.name).join(", ");
            setProductsOrder(productsList)
        }

        rewriteProducts();
        calculateTotalPrice();
    }, [orderedFoods]);

    const handleSelectFood = (food: FoodItem) => {
        setOrderedFoods([...orderedFoods, food]);
    };

    const handleRemoveFood = (food: FoodItem) => {
        setOrderedFoods(orderedFoods.filter(item => item.id !== food.id));
    };

    const handleOrderFood = async () => {
        try {
            if (!tokenAuth()) {
                throw new Error('Token not found');
            }
            const response = await fetch('http://159.223.64.28:3000/api/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth()}`,
                },
                body: JSON.stringify({
                    products: productsOrder,
                    total_price: totalPrice
                }),
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            setOrderedFoods([]);
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <main className="w-full flex items-start">
            <article id="dashboard-main_main">
                <div className="h-[60px] flex items-center bg-slate-100 border-b">
                    <Button type="button" className="w-[20%] rounded-none bg-transparent text-gray-800">Semua</Button>
                    <Button type="button" className="w-[20%] rounded-none bg-transparent text-gray-800">Makanan</Button>
                    <Button type="button" className="w-[20%] rounded-none bg-transparent text-gray-800">Minuman</Button>
                    <Button type="button" className="w-[20%] rounded-none bg-transparent text-gray-800">Dessert</Button>
                    <Button type="button" className="w-[20%] rounded-none bg-transparent text-gray-800">Lainnya</Button>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 overflow-y-auto" style={{ height: "calc(100% - 60px)" }}>
                    {products.map((food) => (
                        <button type="button" key={food.id} className="h-[240px] w-full text-center bg-slate-100 shadow border p-3 rounded-md cursor-pointer" onClick={() => handleSelectFood(food)}>
                            <img className="w-full h-[150px] object-cover" src={food.image} alt={food.name} />
                            <h2 className="font-semibold text-base text-gray-900 mt-3">{food.name}</h2>
                            <p className="text-sm text-gray-800">Rp. {food.price}</p>
                        </button>
                    ))}
                </div>
            </article>
            <aside id="dashboard-main_right" className="h-full border-l pb-5 px-5">
                <div className="w-full flex items-start border-b" style={{ height: "60px" }}>
                    <div className="h-full w-full flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <div className="h-10 w-10 bg-[#0C085C] flex items-center justify-center rounded">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1C13.1046 1 14 1.89543 14 3H18C19.6569 3 21 4.34315 21 6V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V6C3 4.34315 4.34315 3 6 3H10C10 1.89543 10.8954 1 12 1ZM7 11C7 10.4477 7.44772 10 8 10H16C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12H8C7.44772 12 7 11.5523 7 11ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H12C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14H8Z" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base text-[#0C085C]">Order Menu</h3>
                                <p className="text-xs text-gray-700">Order No. 15</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <button type="button">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2104_388)">
                                        <path d="M17.4167 10.2916V11.875C17.4167 15.8333 15.8334 17.4166 11.875 17.4166H7.12504C3.16671 17.4166 1.58337 15.8333 1.58337 11.875V10.6716M8.70837 1.58331H7.12504C3.16671 1.58331 1.58337 3.16665 1.58337 7.12498" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.7779 7.13373L16.6092 6.30248C17.6859 5.22581 18.1925 3.97498 16.6092 2.39164C15.0259 0.80831 13.775 1.31498 12.6984 2.39164L6.46003 8.62998C6.22253 8.86748 5.98503 9.33456 5.93753 9.67498L5.59711 12.0579C5.47044 12.9208 6.08003 13.5225 6.94294 13.4037L9.32586 13.0633C9.65836 13.0158 10.1254 12.7783 10.3709 12.5408L12.8884 10.0233L13.4663 9.44539" stroke="#868686" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.8037 3.28381C12.0662 4.21597 12.5637 5.06512 13.2485 5.74989C13.9332 6.43467 14.7824 6.93214 15.7145 7.19465" stroke="#868686" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2104_388">
                                            <rect width="19" height="19" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button" className="pt-1">
                                <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="#0C085C" />
                                    <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#0C085C" />
                                    <path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="#0C085C" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-3 overflow-y-auto py-3" style={{ height: "calc(100% - 140px)" }}>
                    {orderedFoods.map((order) => (
                        <div key={order.id} className="w-full flex flex-nowrap items-center border-l-[10px] border-blue-500 py-2 px-2 border rounded-lg">
                            <div className="h-[60px] w-[60px]">
                                <img className="w-full h-full object-cover" src="https://cdn1-production-images-kly.akamaized.net/EjwV7j3Y4JrlqUFuavke4NtRWtM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg" alt="Nasi Goreng" />
                            </div>
                            <div className="px-2" style={{ width: "calc(100% - 135px)" }}>
                                <h3 className="font-semibold text-sm text-blue-500">{order.name}</h3>
                                <p className="text-xs text-gray-800">Rp. {order.price}</p>
                            </div>
                            <div className="w-[75px] flex items-center">
                                <button className="h-[30px] w-[25px] bg-blue-500 flex items-center justify-center text-white rounded-l-md">-</button>
                                <input className="h-[30px] w-[25px] text-center bg-white" type="number" defaultValue={1} />
                                <button className="h-[30px] w-[25px] bg-blue-500 flex items-center justify-center text-white rounded-r-md">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center" style={{ height: "80px" }}>
                    <div className="h-full w-full flex items-center justify-between p-5 rounded bg-blue-500">
                        <div>
                            <p className="font-medium text-sm text-gray-100">{orderedFoods.length} Items</p>
                            <p className="font-semibold text-xl text-white">Rp. {totalPrice}</p>
                        </div>
                        <button onClick={handleOrderFood} type="button" className="font-semibold text-gray-900 bg-white py-2 px-5 rounded">Order</button>
                    </div>
                </div>
            </aside>
        </main>
    )
}