"use client";
import { createContext, ReactNode, useContext, useState } from "react";


interface GlobalContextProps {
    formatNumber: (param: number) => string;
    activeGameTab: string;
    changeActiveGameTab: (param: string) => void;
}

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);


export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {

    const [activeGameTab, setActiveGameTab] = useState<string>("");

    function changeActiveGameTab(param: string) {
        setActiveGameTab(param);
    }

    function formatNumber(param: number) {
        return new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(param);
    }
    return (
        <GlobalContext.Provider value={{
            formatNumber,
            activeGameTab,
            changeActiveGameTab
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export function useGlobalContext(): GlobalContextProps {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be use within GlobalContextProvider");
    }
    return context;
}