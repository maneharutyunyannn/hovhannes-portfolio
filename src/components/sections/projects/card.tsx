"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Apartment } from "../../../../types";

type Props = {
    apartment: Apartment;
    onClick: () => void;
};

export function ApartmentCard({ apartment, onClick }: Props) {
    const preview =
        apartment.media.find((m) => m.type === "image")?.src;

    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative cursor-pointer overflow-hidden rounded-2xl bg-[#F5EFEA]"
        >
            <div className="relative w-full h-[380px]">
                {preview ? (
                    <Image
                        src={preview}
                        alt="apartment preview"
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-black/40">
                        No image available
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 p-6">
                <span className="text-xs text-white/50 mt-3 block">
                    {apartment.media.length} media
                </span>
            </div>
        </motion.div>
    );
}