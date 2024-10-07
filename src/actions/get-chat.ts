import { api } from "@/lib/axios";

export async function getChat(id: string) {
    try {
        const response = await api.get(`/chat/${id}`)
    
        if (response.status !== 200) {
            throw new Error("Failed on getting chat")
        }
    
        return response.data
    } catch(err) {
        throw new Error("Failed on getting chat" + err)
    }
}