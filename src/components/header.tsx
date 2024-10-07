import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { MobileSidebar } from "./sidebar/mobile-sidebar";

export function Header() {
    return (
        <header className="flex border-b p-4 items-center justify-center w-full bg-background">
            <div className="flex w-full justify-between items-center">
                <Logo />
                <div className="flex gap-2 items-center justify-center">
                    <MobileSidebar />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}