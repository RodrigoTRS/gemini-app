import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { useEffect, useRef } from "react";
import { Outlet, useLocation, useRevalidator } from "react-router-dom";

export function DefaultLayout() {

    const revalidator = useRevalidator();
    const location = useLocation();
    const previousChatId = useRef<string | null>(null); 


    useEffect(() => {
        const currentChatId = location.pathname.split("/")[1];
    
        if (currentChatId && currentChatId !== previousChatId.current) {
            previousChatId.current = currentChatId;
            revalidator.revalidate();
        }

    }, [location.pathname, revalidator]);



    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            <div className="flex-1 flex">
                <Sidebar/>
                <main className="flex flex-col w-full items-center justify-start p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}