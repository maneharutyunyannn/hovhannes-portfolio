'use client'

import {Card} from "@/components/shadcn-ui/card";
import {Heading} from "@/components/ui/heading";
import {cn} from "@/lib/utils";
import Image from "next/image";

export interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

export function ServiceCard({
                                title,
                                description,
                                image
                            }: ServiceCardProps) {

    return (
        <div>
            <Card className="overflow-hidden border-[#5C493D] rounded-xl bg-transparent p-0 w-full md:w-80">
                <div className="relative w-full h-48 md:h-56">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="px-8 py-6">
                    <Heading
                        as="h3"
                        className={cn(
                            "text-primary font-semibold mb-3 md:min-h-[65px]",
                            "!text-[2.0625rem] leading-[2.0625rem] md:text-[2rem] md:leading-[1.96875rem]"
                        )}
                    >
                        {title}
                    </Heading>

                    <p className="md:min-h-[90px] text-[#ECE2D9] text-[0.9375rem] leading-[1.3375rem] md:text-[1rem] md:leading-[1.35rem]">
                        {description}
                    </p>
                </div>
            </Card>
        </div>
    )
}