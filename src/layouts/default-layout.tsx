import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { useEffect } from "react";
import { Outlet, useLocation, useRevalidator } from "react-router-dom";

export function DefaultLayout() {

    const revalidator = useRevalidator();
    const location = useLocation();

    useEffect(() => {
        revalidator.revalidate()
    }, [location.pathname, revalidator])



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