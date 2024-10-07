import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const promptSchema = z.object({
    prompt: z.string()
})

export type PromptData = z.infer<typeof promptSchema>

interface PromptInputProps {
    fn: (data: PromptData) => void;
}

export function PromptInput({
    fn
}: PromptInputProps) {

    const {
        handleSubmit,
        reset,
        register,
        
    } = useForm<PromptData>({
        resolver: zodResolver(promptSchema)
    })

    function handleSubmitPrompt(data: PromptData) {
        fn(data)
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(handleSubmitPrompt)}
            className="max-w-[720px] w-full bg-background py-4 px-4 flex items-center justify-center gap-4"
        >
            <Textarea
                className="resize-none"
                placeholder="Ask me anything..."
                {...register("prompt")}
                onKeyDown={(e) => {
                    if(e.key.toUpperCase().includes("ENTER")) {
                        e.preventDefault();
                        handleSubmit(handleSubmitPrompt)();
                    }
                }}
            />   
            <Button size="icon" type="submit">
                <ArrowUp />
            </Button>
        </form>
    )
}