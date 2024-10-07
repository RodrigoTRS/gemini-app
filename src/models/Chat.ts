import { Message } from "./Message"

export type Chat = {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    messages: Message[]
}
