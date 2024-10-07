import { Trash } from "lucide-react";
import { DropdownMenuItem, DropdownMenuItemProps } from "@/components/ui/dropdown-menu";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DeleteButtonProps extends DropdownMenuItemProps {}

export function DeleteButton(props: DeleteButtonProps) {
    return (
        <DropdownMenuItem
            className="flex items-center gap-2"
            {...props}
        >
            <Trash size={16} />
            Delete
        </DropdownMenuItem>
    )
}