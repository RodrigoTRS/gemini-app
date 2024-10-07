
interface MessageContentProps {
    content: {
        type: "paragraph" | "list"
        weight: "normal" | "bold"
        text: string | string[]
    }[]
}

export function MessageContent({
    content
}: MessageContentProps) {
    return (
        <div className="flex flex-col gap-4">
            {content.map((slice, index) => {
                switch(slice.type) {

                    case "list":
                        return (
                            <ul>
                                {Array.isArray(slice.text) && 
                                    slice.text.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        );

                        case "paragraph": 
                            switch(slice.weight) {
                                case "bold": 
                                return (<b key={index}>{slice.text}</b>)
                                default:
                                    return (<p key={index}>{slice.text}</p>)
                            }

                            default:
                                return (<span key={index}>{slice.text}</span>)
                    }
                })
            }
        </div>
    )
}