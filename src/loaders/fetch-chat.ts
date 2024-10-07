import { api } from "@/lib/axios"
import { Chat } from "@/models/Chat"
import { LoaderFunctionArgs } from "react-router-dom"

export const fetchChat = async ({ params }: LoaderFunctionArgs) => {
    const response = await api.get<Chat>(`/chat/${params.id}`)
    const chat = response.data
    return chat
}