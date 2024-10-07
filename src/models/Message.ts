export type Message = {
    sender: "user" | "model"
    content: {
        type: "paragraph" | "list"
        weight: "bold" | "normal"
        text: string | string[]
    }[]
}