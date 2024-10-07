import { api } from "@/lib/axios";

export async function sendMessage(id: string, prompt: string) {
    try {
        const response = await api.post(`/chat/${id}`, { prompt })
    
        if (response.status !== 200) {
            throw new Error("Failed on creating a new chat")
        }
    
        return response.data
    } catch(err) {
        throw new Error("Failed on creating a new chat" + err)
    }
}