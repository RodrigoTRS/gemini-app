import { Pencil } from "lucide-react";
import { DropdownMenuItem, DropdownMenuItemProps } from "@/components/ui/dropdown-menu";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RenameButtonProps extends DropdownMenuItemProps {}


export function RenameButton(props: RenameButtonProps) {
    return (
        <DropdownMenuItem className="flex items-center gap-2" {...props} >
            <Pencil size={16} />
            Rename
        </DropdownMenuItem>
    )
}