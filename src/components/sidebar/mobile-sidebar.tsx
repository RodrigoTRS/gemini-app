import { Sidebar as SidebarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ChatCard } from "../chat-card";
import { useLoaderData, useLocation, useNavigate,  } from "react-router-dom";
import { Chat } from "@/models/Chat";
import { useState } from "react";

export function MobileSidebar() {

    const chats = useLoaderData() as Chat[]

    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    const isLocationAtHome = location.pathname === "/"

    function handleDialogOpenChange (open: boolean) {
        setIsOpen(open);
    };
    
    function handleNavigate(chat: Chat) {
        navigate(`/${chat.id}`)
        handleDialogOpenChange(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleDialogOpenChange}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                    <SidebarIcon className="h-[1.2rem] w-[1.2rem]"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className="flex flex-col gap-3">
                    <section className="flex flex-col">
                        <DialogTitle className="text-md text-foreground">Your chats</DialogTitle>
                        <DialogDescription>Choose what chat you wish to see</DialogDescription>
                        <ScrollArea className="w-full whitespace-nowrap h-[50vh] my-6" type="always">
                            <div className="flex flex-col gap-2">
                                {chats.map((chat) => (
                                    <ChatCard chat={chat} key={chat.id} onClick={handleNavigate}/>
                                ))}
                                <ScrollBar orientation="vertical" />
                            </div>
                        </ScrollArea>
                    </section>
                    <Button 
                        disabled={isLocationAtHome}
                        onClick={() => {
                            navigate("/")
                            handleDialogOpenChange(false)
                        }}
                    >
                        Create new chat
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}