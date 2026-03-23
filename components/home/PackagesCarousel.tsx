"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Star, Clock, Calendar } from "lucide-react";
import { useRef } from "react";

const packages = [
    {
        id: 1,
        title: "Celestial Honeymoon",
        location: "Maldives",
        price: "$2,400",
        rating: 5.0,
        duration: "6 Days",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop",
        tags: ["Romantic", "Luxury"],
    },
    {
        id: 2,
        title: "Nebula Trekking",
        location: "Patagonia",
        price: "$1,850",
        rating: 4.9,
        duration: "8 Days",
        image: "https://images.unsplash.com/photo-1544634289-e13768da460e?q=80&w=2670&auto=format&fit=crop",
        tags: ["Adventure", "Nature"],
    },
    {
        id: 3,
        title: "Orbital City Break",
        location: "Tokyo",
        price: "$1,500",
        rating: 4.8,
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
        tags: ["Urban", "Culture"],
    },
    {
        id: 4,
        title: "Solar Surf Safari",
        location: "Bali",
        price: "$950",
        rating: 4.7,
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
        tags: ["Beach", "Budget"],
    },
];

export default function PackagesCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mb-12 flex justify-between items-end">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-serif text-white mb-4"
                    >
                        Curated Voyages
                    </motion.h2>
                    <p className="text-white/60">Handpicked experiences for the modern explorer.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    {/* Navigation buttons could go here */}
                </div>
            </div>

            <div
                className="flex overflow-x-auto pb-12 px-4 md:px-6 gap-8 snap-x snap-mandatory scrollbar-hide"
                ref={scrollRef}
            >
                {packages.map((pkg, i) => (
                    <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-shrink-0 w-[300px] md:w-[400px] snap-center"
                    >
                        <GlassCard
                            hoverEffect="lift"
                            className="h-[500px] flex flex-col relative group"
                        >
                            <div className="h-1/2 relative overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white font-medium flex items-center gap-1">
                                    <Star className="w-3 h-3 text-secondary fill-secondary" />
                                    {pkg.rating}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 justify-between bg-gradient-to-b from-transparent to-background/50">
                                <div>
                                    <div className="flex gap-2 mb-3">
                                        {pkg.tags.map(tag => (
                                            <span key={tag} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-serif text-white mb-2">{pkg.title}</h3>
                                    <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                                        <MapPinIcon className="w-4 h-4" /> {pkg.location}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm text-white/70 border-t border-white/10 pt-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> {pkg.duration}
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {pkg.price}
                                        </div>
                                    </div>
                                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
                {/* Spacer for right padding */}
                <div className="w-1 md:w-6 flex-shrink-0" />
            </div>
        </section>
    );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
