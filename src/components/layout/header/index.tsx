'use client';

import Image from "next/image";
import {Button} from "@/components/shadcn-ui/button";
import {cn} from "@/lib/utils";
import {ButtonLink} from "@/components/ui/button-link";
import {useMenuStore} from "@/lib/hooks/useMenuStore";
import {NavigationMenuComponent} from "@/components/layout/navigation-menu";
import {mainNavItems} from "@/lib/configs/site";

export function Header() {
    const {isOpen, toggle} = useMenuStore();

    return (
        <header className="absolute top-0 left-0 w-full z-20">
            <div
                className={cn(
                    "max-w-7xl mx-auto mt-5",
                    "flex justify-between items-center",
                    "ps-5 pe-3 md:px-4 py-2",
                    "bg-transparent md:bg-[#2A1F18]/85 opacity-[0.85] rounded-lg",
                    isOpen && "bg-transparent",
                )}
            >
                <h1 className="font-semibold text-[#B5A091] text-[20px]">Hovhannes Harutyunyan</h1>

                <div className="hidden lg:flex gap-[29px]">
                    <NavigationMenuComponent items={mainNavItems}/>
                    <ButtonLink />
                </div>

                <Button
                    className="lg:hidden z-20 bg-transparent border-none hover:bg-transparent p-0 h-fit"
                    onClick={toggle}
                >
                    <Image
                        src={isOpen ? "/header/close.svg" : "/header/menu_open.svg"}
                        alt={isOpen ? "close" : "menu"}
                        className="object-contain"
                        width={48}
                        height={48}
                    />
                </Button>

                {
                    isOpen && (
                        <div className={cn("absolute top-full left-0 w-full",
                            "flex flex-col items-center  lg:hidden pt-6"
                        )}>
                            <h3 className="text-[#B5A091] leading-[36px] pb-[19.14px]">MENU</h3>
                            <NavigationMenuComponent items={mainNavItems} isMobile
                                                     menuLinkClassName='text-[35px] font-medium'/>
                            <ButtonLink className="mt-[28.85px]"/>
                        </div>
                    )
                }
            </div>
        </header>
);
}