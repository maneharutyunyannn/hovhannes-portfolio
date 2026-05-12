'use client'

import {Heading} from "@/components/ui/heading";
import {ServiceCard, ServiceCardProps} from "@/components/sections/services/card";

export function ServicesSection() {
    return (
        <section className="py-4 md:py-10 px-5 md:px-0" id="services">
            <Heading as="h2" className="text-center text-[#18120E]">Our Services</Heading>
            <p className="text-center text-[#2A1F18] text-[20px]">We deliver complete renovation and remodeling solutions designed around your needs.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-5">
                {features.map((item) => (
                    <ServiceCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    )
}

const features: ServiceCardProps[] = [
    {
        title: "Kitchen Remodeling",
        description: "Full redesign of kitchens including layout, cabinetry, surfaces, and appliances for improved function and style.",
        image: "/services/kitchen.png",
    },
    {
        title: "Bathroom Renovation",
        description: "Upgrading bathrooms with new fixtures, tiling, lighting, and modern waterproof finishes.",
        image: "/services/bathroom.png",
    },
    {
        title: "Room Additions",
        description: "Expanding your home with new rooms seamlessly integrated into the existing structure.",
        image: "/services/room-addition.png",
    },
    {
        title: "Whole Home Renovation",
        description: "Comprehensive renovation covering every area of your home from structural updates to interior finishing.",
        image: "/services/full.png",
    },
];