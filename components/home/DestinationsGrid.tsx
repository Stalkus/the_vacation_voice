"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
    {
        id: 1,
        name: "Santorini, Greece",
        region: "Europe",
        image: "https://images.unsplash.com/photo-1613395877344-13d4c79e4df1?q=80&w=2070&auto=format&fit=crop",
        price: "From $1,299",
    },
    {
        id: 2,
        name: "Kyoto, Japan",
        region: "Asia",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
        price: "From $1,499",
    },
    {
        id: 3,
        name: "Maui, Hawaii",
        region: "USA",
        image: "https://images.unsplash.com/photo-1542259679-410a56927d7e?q=80&w=2070&auto=format&fit=crop",
        price: "From $1,899",
    },
    {
        id: 4,
        name: "Dubai, UAE",
        region: "Middle East",
        image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe63?q=80&w=1974&auto=format&fit=crop",
        price: "From $999",
    },
    {
        id: 5,
        name: "Cape Town, SA",
        region: "Africa",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2071&auto=format&fit=crop",
        price: "From $1,199",
    },
    {
        id: 6,
        name: "Maldives",
        region: "Asia",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop",
        price: "From $2,499",
    },
];

export default function DestinationsGrid() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background radial gradient for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Explore the Cosmos of Travel</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">Discover destinations vetted for their otherworldly beauty and timeless gravity.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <GlassCard
                                intensity="medium"
                                hoverEffect="tilt"
                                className="group h-[400px] cursor-pointer"
                            >
                                {/* Image Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-500">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-secondary mb-3">
                                            {dest.region}
                                        </span>
                                        <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-primary transition-colors">{dest.name}</h3>
                                        <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <span className="text-white/80">{dest.price}</span>
                                            <div className="flex items-center gap-2 text-primary text-sm font-medium">
                                                Explore <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
