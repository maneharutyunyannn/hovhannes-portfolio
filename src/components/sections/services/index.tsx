'use client'

import {Heading} from "@/components/ui/heading";
import {ServiceCard} from "@/components/sections/services/card";
import {ScrollArea, ScrollBar} from "@/components/shadcn-ui/scroll-area";

export function ServicesSection() {
    return (
        <section className="py-4 md:py-20 px-5 md:px-0" id="services">
            <Heading as="h2" className="text-center text-[#18120E]">Մեր ծառայությունները</Heading>

            <ScrollArea className=" ">
                <div className="flex  space-x-4 p-8">
                    {features.map((item, index) => (
                        <ServiceCard
                            key={index}
                            title={item}
                        />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />

            </ScrollArea>
        </section>
)
}


const features: string[] = [
    "Էլեկտրոմոնտաժ",
    "Սալիկապատում",
    "Մակերեսների հարթեցում",
    "Մալյարական աշխատանքներ",
    "Հատակի ծածկույթների տեղադրում",
    "Ջեռուցում / սանտեխնիկա",
];