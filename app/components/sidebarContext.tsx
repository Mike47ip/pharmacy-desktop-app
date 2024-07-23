"use client";
import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface SidebarContextType {
 isSidebarOpen: boolean;
 toggleSidebar: () => void;
}

// Create a context with default values
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Provider component
export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
 children,
}) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

 const toggleSidebar = () => {
  setIsSidebarOpen((prev) => !prev);
 };

 return (
  <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
   {children}
  </SidebarContext.Provider>
 );
};

// Custom hook to use the Sidebar context
export const useSidebar = () => {
 const context = useContext(SidebarContext);
 if (context === undefined) {
  throw new Error("useSidebar must be used within a SidebarProvider");
 }
 return context;
};
