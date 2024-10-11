import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <main className="flex w-full min-h-screen items-center justify-center p-8">
            <Outlet />
        </main>
    )
}