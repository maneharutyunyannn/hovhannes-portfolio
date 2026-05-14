import {Button} from "@/components/shadcn-ui/button";
import NextLink from "next/link";
import {cn} from "@/lib/utils";

interface ButtonLinkProps {
    text?: string;
    href?: string;
    className?: string;
    visible?: boolean;
}

export function ButtonLink({
                               text = "Հետադարձ կապ",
                               href = "#reach-out",
                               className = ""
                           }: ButtonLinkProps) {
    return (
        <Button
            asChild
            className={cn(
                "bg-[#3A2D24] hover:bg-[#4A3A30]",
                "rounded-[12.2px] md:rounded-[14.4px]",
                "h-[40px] active:h-[40px] px-5 text-[#B5A091]",
                "text-[18px] font-semibold w-fit",
                className
            )}
        >
            <NextLink href={href}>
                {text}
            </NextLink>
        </Button>
    );
}