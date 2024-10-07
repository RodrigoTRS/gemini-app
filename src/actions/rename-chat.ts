import { api } from "@/lib/axios";

export async function renameChat(id: string, name: string) {
    try {
        const response = await api.patch(`/chat/${id}`, { name })
    
        if (response.status !== 200) {
            throw new Error("Failed on renaming chat")
        }
    
        return response.data
    } catch(err) {
        throw new Error("Failed on renaming chat" + err)
    }
}