import { Card } from "../ui/card"
import { MessageContent } from "./message-content"

interface UserMessageProps {
    content: {
        type: "paragraph" | "list"
        weight: "normal" | "bold"
        text: string | string[]
    }[]
}

export function UserMessage({
    content
}: UserMessageProps) {

    return (
        <article>
            <Card className="bg-background flex w-full max-w-[600px] p-4">
                <MessageContent content={content} />
            </Card>
        </article>
    )
}