import { api } from "@/lib/axios";
import { Chat } from "@/models/Chat";

export async function createChat(prompt: string): Promise<Chat> {
    try {
        const response = await api.post("/chat", { prompt })
    
        if (response.status !== 200) {
            throw new Error("Failed on creating a new chat")
        }
    
        return response.data
    } catch(err) {
        throw new Error("Failed on creating a new chat" + err)
    }
}