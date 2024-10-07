import { MessageSquareCode } from "lucide-react"
import { Link } from "react-router-dom"

export function Logo() {
    return (
        <Link to="/" className="flex items-end justify-center gap-2 hover:opacity-75">
            <MessageSquareCode size={24} className="text-primary"/>
            <span className="text-xl font-medium">Gemini App</span>
        </Link>
    )
}