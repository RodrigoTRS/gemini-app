import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/default-layout";
import { HomePage } from "./pages/home";
import { ChatPage } from "./pages/chat";
import { fetchChat } from "./loaders/fetch-chat";
import { listChats } from "./actions/list-chats";
import { AuthLayout } from "./layouts/auth-layout";
import { LoginPage } from "./pages/auth/login";
import { RegisterPage } from "./pages/auth/register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: ":id",
                element: <ChatPage />,
                loader:fetchChat
            }
        ],
        loader:listChats
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: "/auth/register",
                element: <RegisterPage />
            }
        ]
    }
])