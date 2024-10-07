import clsx from "clsx";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { z } from "zod";


import { deleteChat } from "@/actions/delete-chat";
import { Chat } from "@/models/Chat";
import { Card } from "@/components/ui/card";

import { ChatCardMenu } from "./chat-card-menu";
import { Button } from "../ui/button";
import { renameChat } from "@/actions/rename-chat";

const renameChatSchema = z.object({
    name: z.string()
})

type RenameChatData = z.infer<typeof renameChatSchema>

interface ChatCardProps {
    chat: Chat,
    onClick: (chat: Chat) => void;
}

export function ChatCard({ chat, onClick }: ChatCardProps) {

    const { id } = useParams()

    const [isRenaming, setIsRenaming] = useState(false)

    const navigate = useNavigate();

    const {
        register,
        setValue,
        handleSubmit
    } = useForm<RenameChatData>({
        resolver: zodResolver(renameChatSchema)
    })

    function handleEnableRenaming(e: React.MouseEvent) {
        e.stopPropagation()
        setValue("name", chat.name)
        setIsRenaming(true)
    }

    async function handleDeleteChat(e: React.MouseEvent) {
        e.stopPropagation()
        await deleteChat(chat.id)
        if (`/${chat.id}` === location.pathname) {
            navigate("/")
        }
    }

    async function handleRename(data: RenameChatData) {
        await renameChat(chat.id, data.name)
        setIsRenaming(false)
    }

    const formattedName = chat.name.length > 30 ? chat.name.slice(0, 30).concat("...") : chat.name
    const formattedDate = `${format(new Date(chat.createdAt), "dd/MM/yyyy - HH:MM")}h`;
    const isSelected = chat.id === id

    return (
        <Card
            onClick={() => {
                if (!isRenaming) {
                    onClick(chat)
                }
            }}
            className={clsx(
                "flex flex-col items-start justify-between gap-2 p-4 h-auto border hover:opacity-75 mr-4 cursor-pointer",
                isSelected && "bg-primary/10 border-primary"
        )}>

            {isRenaming ? (
                    <form
                        onSubmit={handleSubmit(handleRename)}
                        className="flex flex-col w-full gap-2"
                    >
                        <input
                            className="flex w-full bg-background/50 px-2 py-1 border border-foreground/20 rounded-lg"
                            {...register("name")}
                        />
                        <Button
                            type="submit"
                            className="flex w-full h-7"
                        >
                            Rename
                        </Button>
                        <Button
                            type="button"
                            onClick={() => setIsRenaming(false)}
                            className="flex w-full h-7 bg-transparent border-foreground/10" variant="outline"
                        >
                            Cancel
                        </Button>
                    </form>
                )
                : (
                    <p className="text-sm">{formattedName}</p>
                )
            }
            <footer className="flex justify-between items-center w-full">
                <span className="text-xs text-muted-foreground">{formattedDate}</span>
                <ChatCardMenu
                    handleEnableRenaming={handleEnableRenaming}
                    handleDeleteChat={handleDeleteChat}
                />
            </footer>
        </Card>
    )
}