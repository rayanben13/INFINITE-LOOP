
import {
    BookOpen,
    CalendarDays,
    History,
    TreeDeciduous,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

function Header() {
    const list = [
        {
            name: "Planner",
            icon: CalendarDays,
            href: "/",
        },
        {
            name: "Meal Library",
            icon: BookOpen,
            href: "/meals",
        },
        {
            name: "History",
            icon: History,
            href: "/history",
        },
    ];

    return (
        <header className="h-20 w-full flex items-center justify-between px-8 border-b bg-white">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
                <TreeDeciduous className="size-9 text-green-700" />

                <h2 className="text-xl font-bold tracking-tight">
                    mise
                </h2>
                <span className="">|</span>
                <p className=" text-xl text-muted-foreground">
                    A little planning. A lot of good food
                </p>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
                {list.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Button
                            key={item.name}
                            variant="ghost"
                            className="gap-2"
                        >
                            <Link href={item.href}>
                                <Icon className="size-4" />
                                {item.name}
                            </Link>
                        </Button>
                    );
                })}
            </nav>

        </header>
    );
}

export default Header;