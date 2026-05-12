import Link from "next/link";
import {cn} from "@/lib/utils";
import {INavItem} from "@/lib/configs/site";

interface Props {
    items: INavItem[];
    className?: string;
    linkClassName?: string;
}

export function NavList({
                            items,
                            linkClassName
                        }: Props
) {
    return (
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 m-0 p-0 list-none">
            {items.map((item) => (
                <li key={item.href}>
                    <Link
                        href={item.href}
                        className={cn("text-[#B5A091]", linkClassName)}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}