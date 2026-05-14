'use client'

import {Card} from "@/components/shadcn-ui/card";
import {Heading} from "@/components/ui/heading";
import {cn} from "@/lib/utils";

export interface ServiceCardProps {
    image?: string;
    title: string;
    description?: string;
}

export function ServiceCard({title}: ServiceCardProps) {

    return (
        <div>
            <Card className="border-[#5C493D] rounded-xl bg-transparent p-0 w-full md:w-80 shadow-xl">
                <div className="flex items-center justify-center min-h-[108px] md:min-h-[94px] px-4">
                    <Heading
                        as="h5"
                        className="text-primary text-center font-bold italic"
                    >
                        {title}
                    </Heading>
                </div>
            </Card>
        </div>
    )
}