import { Card } from "../ui/card"
import { MessageContent } from "./message-content"

interface ModelMessageProps {
    content: {
        type: "paragraph" | "list"
        weight: "normal" | "bold"
        text: string | string[]
    }[]
}

export function ModelMessage({
    content
}: ModelMessageProps) {


    return (
        <article className="ml-32">
            <Card className="bg-muted flex flex-col gap-5 w-full max-w-[600px] p-4">
                <MessageContent content={content} />
            </Card>
        </article>
    )
}

