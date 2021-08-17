import React, { useState, useMemo } from "react";

interface ISidebarContext {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
}

// create context
export const SidebarContext = React.createContext<ISidebarContext>({
    isSidebarOpen: false,
    toggleSidebar: () => {},
    closeSidebar: () => {},
});

export const SidebarProvider: React.FunctionComponent = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    function closeSidebar() {
        setIsSidebarOpen(false);
    }

    const value = useMemo(
        () => ({
            isSidebarOpen,
            toggleSidebar,
            closeSidebar,
        }),
        [isSidebarOpen]
    );

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};
