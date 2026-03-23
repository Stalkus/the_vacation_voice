"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
    { title: "Northern Lights", location: "Norway & Finland", image: "https://images.unsplash.com/photo-1579033461542-c2971380795c?q=80&w=1974&auto=format&fit=crop" },
    { title: "Ski Season", location: "Switzerland", image: "https://images.unsplash.com/photo-1482867996988-29ec3a0f1dfc?q=80&w=2070&auto=format&fit=crop" },
    { title: "Wildlife Safari", location: "Kenya", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop" },
    { title: "Shopping Festival", location: "Dubai", image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2070&auto=format&fit=crop" },
    { title: "Cherry Blossom", location: "Japan", image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2076&auto=format&fit=crop" },
];

export default function SeasonsEvents() {
    return (
        <section className="py-16">
            <div className="container-width">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold font-serif uppercase tracking-wider text-gray-800">Seasons & Events</h2>
                    <div className="flex gap-2">
                        <Button size="icon" variant="outline" className="rounded-full w-10 h-10 border-gray-300 text-gray-600 hover:bg-gray-100">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full w-10 h-10 border-gray-300 text-gray-600 hover:bg-gray-100">
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                        >
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                            {/* Shadow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Text Content */}
                            <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                                <p className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest mb-1">{event.location}</p>
                                <h3 className="text-lg md:text-xl font-serif text-white leading-tight">{event.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
