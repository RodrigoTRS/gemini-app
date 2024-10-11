import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {

    const navigate = useNavigate()

    return (
        <Card className="flex flex-col gap-2 w-full max-w-[360px] bg-muted/10">
            <div className="flex flex-col gap-1 p-4">
                <h1 className="text-lg font-medium">Register</h1>
                <p className="text-sm text-muted-foreground">Fill the form to access the create an account.</p>
            </div>

            <Separator />

            <form
                className="flex flex-col gap-4 p-4"
            >
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Your e-mail"
                        />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Your password"
                        />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="confirm">Confirm password</Label>
                    <Input
                        id="confirm"
                        type="password"
                        placeholder="Confirm your password"
                        />
                </div>

                <Button type="submit">
                    Register
                </Button>
            </form>

            <Separator />

            <div className="flex flex-col gap-2 p-4">
                <p className="text-sm text-muted-foreground">Already have an account?</p>
                <Button type="button" variant="outline" onClick={() => navigate("/auth")}>
                    Go to login page
                </Button>
            </div>

        </Card>
    )
}   