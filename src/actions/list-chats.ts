import { api } from "@/lib/axios";

export async function listChats() {
    try {
        const response = await api.get("/chat")
    
        if (response.status !== 200) {
            throw new Error("Failed on listing chats")
        }
    
        return response.data
    } catch(err) {
        throw new Error("Failed on listing chats" + err)
    }
}