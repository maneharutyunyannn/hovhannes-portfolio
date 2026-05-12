import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Apartment } from "../../../../types";
import { X } from "lucide-react";

type Props = {
    apartment: Apartment;
    onClose: () => void;
};

export function Lightbox({ apartment, onClose }: Props) {
    const [index, setIndex] = useState(0);

    const media = apartment.media;

    const next = () =>
        setIndex((i) => (i + 1) % media.length);

    const prev = () =>
        setIndex((i) => (i - 1 + media.length) % media.length);

    const current = media[index];

    return (
        <motion.div
            className="backdrop-blur-sm fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <motion.div
                className="absolute inset-0 bg-black/70 will-change-[backdrop-filter]"
                onClick={onClose}
                initial={{opacity: 0, }}
                animate={{opacity: 1,}}
                exit={{opacity: 0,}}
                transition={{duration: 0.2}}
            />
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/40  border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition"
            >
                <X size={20}/>
            </button>

            <motion.div
                className="relative w-[92%] h-[85%] z-10 flex items-center justify-center will-change-transform"            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="relative w-full h-full flex items-center justify-center"
                        initial={{opacity: 0, scale: 1.02}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.98}}
                        transition={{duration: 0.25}}
                    >
                        {current.type === "image" ? (
                            <Image
                                src={current.src}
                                alt="media"
                                fill
                                className="object-contain"
                                priority
                            />
                        ) : (
                            <video
                                src={current.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                className="max-h-full max-w-full rounded-xl"
                            />
                        )}
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl opacity-70 hover:opacity-100 transition"
                >
                    ←
                </button>

                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl opacity-70 hover:opacity-100 transition"
                >
                    →
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                    {index + 1} / {media.length}
                </div>
            </motion.div>
        </motion.div>
    );
}