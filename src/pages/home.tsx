import { createChat } from "@/actions/create-chat";
import { Loader } from "@/components/loader";
import { Logo } from "@/components/logo";
import { PromptData, PromptInput } from "@/components/prompt-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    async function handleCreateChat(data: PromptData) {
        try {
            setIsLoading(true)
            const chat = await createChat(data.prompt);
            navigate(`/${chat.id}`)
        } catch(err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-between w-full h-full">

            <section className="flex flex-col w-full flex-1 items-center justify-center">
                 <Logo />
            </section>

            <section className="w-full flex flex-col gap-2 mt-4 items-center justify-center">
                {isLoading && <Loader />}
                <PromptInput fn={handleCreateChat}/>
            </section>
        </div>
    )
}