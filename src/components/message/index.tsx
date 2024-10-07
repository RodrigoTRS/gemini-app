import { UserMessage } from "./user-message"
import { ModelMessage } from "./model-message"

interface MessageProps {
    sender: "user" | "model"
    content: {
        type: "paragraph" | "list"
        weight: "normal" | "bold"
        text: string | string[]
    }[]
}

export function Message({
    sender, content
}: MessageProps) {

    const isUserMessage = sender === "user"

    return (
        <div className="flex flex-col w-full">
            {isUserMessage
                ? <UserMessage content={content} />
                : <ModelMessage content={content} />
            }
        </div>
    )
}