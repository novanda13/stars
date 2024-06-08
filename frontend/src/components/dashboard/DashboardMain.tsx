"use client"
import React from "react";
import { useProviderContext } from "@/providers/Provider";

export default function DashboardMain({ children }: { children: React.ReactNode }) {
    const { asideLeftKomponen } = useProviderContext();
    return (
        <div id="dashboard-main" className={`${asideLeftKomponen ? 'dashboard-main__active' : ''} bg-neutral-50 transition-all duration-300`}>
            {children}
        </div>
    )
}