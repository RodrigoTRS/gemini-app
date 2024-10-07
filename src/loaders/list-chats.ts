import { api } from "@/lib/axios"
import { Chat } from "@/models/Chat"

export const listChats = async () => {
    const response = await api.get<Chat[]>("/chat")
    const chats = response.data
    return chats
}