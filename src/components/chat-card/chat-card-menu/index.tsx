import { Ellipsis } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { DeleteButton } from "./delete-button";
import { RenameButton } from "./rename-button";

interface ChatCardMenuProps {
    handleEnableRenaming: (e: React.MouseEvent) => void;
    handleDeleteChat: (e: React.MouseEvent) => void;
}

export function ChatCardMenu({
    handleEnableRenaming,
    handleDeleteChat
}: ChatCardMenuProps) {

    return (
        <DropdownMenu>

                <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost" className="w-6 h-6 hover:bg-primary/10 dark:hover:text-foreground">
                        <Ellipsis size={16} className="text-muted-foreground"/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <RenameButton onClick={(e) => handleEnableRenaming(e)}/>
                    <DeleteButton onClick={(e) => handleDeleteChat(e)} />
                </DropdownMenuContent>
                    
        </DropdownMenu>
    )
}