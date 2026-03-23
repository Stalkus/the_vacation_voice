"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AndamanSpotlight() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with underwater feel */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589979481223-deb89306920f?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center brightness-[0.4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-md">
                            Featured Destination
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6">
                            Andaman: <br /> The Emerald Isle
                        </h2>
                        <p className="text-xl text-white/80 font-light leading-relaxed max-w-lg mb-8">
                            Discover a gravity-defying paradise where transparent waters meet untouched sands. Our signature glass-bottom boat tours and floating villas await.
                        </p>
                        <div className="flex flex-col gap-4">
                            {["Private Ferry Transfers", "Luxury Beachfront Villas", "Scuba & Snorkeling Included", "Candlelit Glass Dome Dinner"].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-white/90"
                                >
                                    <div className="p-1 rounded-full bg-primary/20 text-primary">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <Button size="lg" className="rounded-full bg-white text-background hover:bg-white/90 px-8">
                                View Andaman Packages
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <div className="flex-1 relative h-[500px] w-full">
                    {/* Floating Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotate: -5 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 right-0 w-[80%] h-[70%] z-10"
                    >
                        <GlassCard className="p-2 h-full w-full rotate-3 hover:rotate-0 transition-transform duration-500" intensity="low">
                            <img
                                src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1974&auto=format&fit=crop"
                                alt="Andaman Beach"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 100, rotate: 5 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute bottom-0 left-0 w-[70%] h-[60%] z-20"
                    >
                        <GlassCard className="p-2 h-full w-full -rotate-3 hover:rotate-0 transition-transform duration-500" intensity="medium">
                            <img
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
                                alt="Scuba Diving"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
