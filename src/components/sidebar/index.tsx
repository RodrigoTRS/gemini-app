import { Chat } from "@/models/Chat";
import { Button } from "../ui/button";
import { useLoaderData, useLocation, useNavigate,  } from "react-router-dom";
import { ChatCard } from "../chat-card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";


export function Sidebar() {
    
    const chats = useLoaderData() as Chat[]

    const navigate = useNavigate()
    const location = useLocation()

    const isLocationAtHome = location.pathname === "/"

    function handleNavigate(chat: Chat) {
        navigate(`/${chat.id}`)
    }

    return (
        <aside className="hidden lg:flex flex-col justify-between w-full max-w-[300px] gap-4 bg-muted/10 p-4 border-r">
            <section className="flex flex-col gap-3">
                <h2 className="text-sm text-muted-foreground">Your chats</h2>

                <ScrollArea className="w-full whitespace-nowrap h-[calc(100vh-200px)]" type="always">
                    <div className="flex flex-col gap-2">
                        {chats.map((chat) => {
                            return (
                                <ChatCard chat={chat} key={chat.id} onClick={handleNavigate}/>
                            )
                        })}
                        <ScrollBar orientation="vertical" />
                    </div>
                </ScrollArea>

            </section>
            <Button onClick={() => navigate("/")} disabled={isLocationAtHome} >
                Create new chat
            </Button>
        </aside>
    )
}
