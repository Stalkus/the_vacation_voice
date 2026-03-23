"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowUpRight } from "lucide-react";

const articles = [
    {
        id: 1,
        title: "10 Reasons Why Zero-Gravity Diving is the Future",
        category: "Trends",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
        size: "large", // spans 2 cols
    },
    {
        id: 2,
        title: "Finding Solitude in the Stars: A Guide to Remote Stays",
        category: "Guides",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
        size: "small",
    },
    {
        id: 3,
        title: "The Culinary Cosmos: Dining on the Edge of Space",
        category: "Food & Drink",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
        size: "small",
    },
    {
        id: 4,
        title: "Packing for Interstellar Climates",
        category: "Tips",
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1974&auto=format&fit=crop",
        size: "medium",
    },
    {
        id: 5,
        title: "Eco-Friendly Space Tourism: Is it Possible?",
        category: "Sustainability",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c7dd1?q=80&w=2070&auto=format&fit=crop",
        size: "medium",
    },
];

export default function InspirationGrid() {
    return (
        <section className="py-24 relative container px-4 md:px-6">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl md:text-5xl font-serif text-white">Travel Intelligence</h2>
                <a href="#" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors">
                    View All Articles <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {articles.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative group ${article.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                article.size === 'medium' ? 'md:col-span-1 md:row-span-1' : '' // simplify logic
                            }`}
                    >
                        <GlassCard
                            className="h-full w-full p-0 overflow-hidden cursor-pointer"
                            hoverEffect="tilt"
                            intensity="medium"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs text-secondary uppercase tracking-wider font-medium">
                                    {article.category}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className={`font-serif text-white group-hover:text-primary transition-colors ${article.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                                    {article.title}
                                </h3>
                                <div className="h-[1px] w-0 bg-primary mt-4 group-hover:w-full transition-all duration-500" />
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
