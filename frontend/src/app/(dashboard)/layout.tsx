"use client"
import DashboardAsideLeft from "@/components/dashboard/AsideLeft"
import DashboardNav from "@/components/dashboard/Nav"
import "./dashboard-layout.css"
import { Provider } from "@/providers/Provider";
import DashboardMain from "@/components/dashboard/DashboardMain";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Provider>
                <DashboardNav />
                <section className="flex flex-nowrap justify-end">
                    <DashboardAsideLeft />
                    <DashboardMain>{children}</DashboardMain>
                </section>
            </Provider>
        </main>
    )
}