"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Headset, Wallet, Globe } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Secure Booking",
        description: "Your journey is protected from start to finish.",
    },
    {
        icon: Headset,
        title: "24/7 Support",
        description: "We are always here, orbiting your needs.",
    },
    {
        icon: Wallet,
        title: "Best Price",
        description: "Premium experiences at gravitational prices.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Connections to every corner of the planet.",
    },
];

export default function TrustOrbs() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Floating Orb */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 1 // offset animations
                                }}
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:shadow-[0_0_50px_rgba(0,184,169,0.4)] transition-shadow duration-500"
                            >
                                <feature.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                            </motion.div>

                            <h3 className="text-xl font-serif text-white mb-2">{feature.title}</h3>
                            <p className="text-white/60 text-sm max-w-[200px]">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
