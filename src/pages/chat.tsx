import { PromptData, PromptInput } from "@/components/prompt-input";
import { useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import { sendMessage } from "../actions/send-message"
import { Loader } from "@/components/loader";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Chat } from "@/models/Chat";
import { Message } from "@/components/message";



export function ChatPage() {

    const chat = useLoaderData() as Chat
    
    const [isLoading, setIsLoading] = useState(false)
    const revalidator = useRevalidator();

    async function handleSendMessage(data: PromptData) {
        try {
            setIsLoading(true)
            await sendMessage(String(chat.id), data.prompt);
        } catch(err) {
            console.error(err)
        } finally {
            setIsLoading(false)
            revalidator.revalidate()
        }
    }

    return (
        <div className="flex flex-col items-center justify-between h-full w-full">
    
            <section className="flex flex-col w-full flex-1 items-center justify-center h-full">
                <ScrollArea className="w-full h-[calc(100vh-280px)]" type="always">
                    <div className="flex flex-col items-center">
                        {chat && (
                            <div className="flex flex-col gap-2 w-full max-w-[720px]">
                                    {chat.messages.map((message, index) => {
                                        return (
                                            <Message
                                                key={index}
                                                sender={message.sender}
                                                content={message.content}
                                            />
                                        )
                                    })}
                            </div>
                        )}
                    </div>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </section>

            <section className="w-full flex flex-col gap-2 mt-4 items-center justify-center">
                {isLoading && <Loader />}
                <PromptInput fn={handleSendMessage} />
            </section>
        </div>
    )
}