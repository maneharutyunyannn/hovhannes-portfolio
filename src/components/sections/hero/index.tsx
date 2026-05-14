'use client'

import Image from "next/image";
import {ButtonLink} from "@/components/ui/button-link";
import {cn} from "@/lib/utils";
import {useMenuStore} from "@/lib/hooks/useMenuStore";
import {Heading} from "@/components/ui/heading";

export function HeroSection() {
    const {isOpen} = useMenuStore();

    return (
        <section className="relative pt-[112px] md:pt-[7rem] md:pb-[2.125rem] min-h-screen" id="home">
            <Image src="/img.png"
                   alt="hero"
                   fill
                   priority
                   className="object-cover rounded-br-[9.375rem] md:rounded-br-[12.5rem]"
            />

            <div className={cn(
                "absolute inset-0 rounded-br-[9.375rem] md:rounded-br-[12.5rem] bg-primary",
                "transition-opacity duration-300",
                isOpen ? "opacity-[0.85]" : "opacity-0"
            )}
            />

            <div className={cn(
                "relative z-10 max-w-xl text-white transition-opacity duration-300 ",
                "flex flex-col gap-8 mx-6 md:mx-[116px] pt-[52.5px] md:py-[10.413rem]",
                isOpen && "opacity-0 "
            )}>
                <Heading className="text-[#ECE2D9]">Ձեր տունը՝ սիրով ու հարմարավետությամբ
                </Heading>
                <p className="text-[#ECE2D9] text-[1rem] md:text-[18px] font-medium">
                    Որակ, ճշգրտություն և ուշադրություն յուրաքանչյուր դետալին
                </p>

                <ButtonLink visible={!isOpen}
                            className="!h-12 bg-[#2A1F18]"
                            href="#reach-out"/>
            </div>
        </section>
    )
}