"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
interface LayoutProps {
    children: ReactNode; // ReactNode is a type for any valid React children
}
// Define the context type
type ProviderContextType = {
    asideLeftKomponen: boolean;
    setAsideLeftKomponen: (open: boolean) => void;
};
// Create the context
const ProviderContext = createContext<ProviderContextType | undefined>(undefined);

// Provider component
export const Provider: React.FC<LayoutProps> = ({ children }) => {
    const [asideLeftKomponen, setAsideLeftKomponen] = useState(true)

    const contextValue: ProviderContextType = {
        asideLeftKomponen,
        setAsideLeftKomponen,
    };

    return <ProviderContext.Provider value={contextValue}>{children}</ProviderContext.Provider>;
};

// Custom hook to consume the context
export const useProviderContext = (): ProviderContextType => {
    const context = useContext(ProviderContext);
    if (!context) {
        throw new Error('useProviderContext must be used within a Provider');
    }
    return context;
};