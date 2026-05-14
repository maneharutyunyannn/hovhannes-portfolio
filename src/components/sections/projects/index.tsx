"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { apartments } from "./data";
import { ApartmentCard } from "./card";
import { Lightbox } from "./lightbox";

import { Heading } from "@/components/ui/heading";
import {Apartment} from "../../../../types";

export function ProjectsSection() {
    const [selected, setSelected] = useState<Apartment | null>(null);

    return (
        <section className="py-4 md:py-10 bg-[#ECE2D9] rounded-[2rem]" id="projects">
            <div className="max-w-6xl mx-auto px-6">
                <Heading as="h2" className="text-center mb-6 md:mb-12 text-[#18120E]">
                    Մեր նախագծերը
                </Heading>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {apartments.map((apartment, index) => (
                        <ApartmentCard
                            key={index}
                            apartment={apartment}
                            onClick={() => setSelected(apartment)}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <Lightbox
                        apartment={selected}
                        onClose={() => setSelected(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}