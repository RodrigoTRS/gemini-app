import { api } from "@/lib/axios";

export async function deleteChat(id: string) {
    try {
        const response = await api.delete(`/chat/${id}`)
    
        if (response.status !== 204) {
            throw new Error("Failed on deleting chat")
        }
    
        return response.data
    } catch(err) {
        throw new Error("Failed on deleting chat" + err)
    }
}