"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Elena Richardson",
        role: "Luxury Traveler",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        content: "The most surreal travel experience of my life. The team handled everything with weightless precision.",
        rating: 5,
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "Photographer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        content: "Every destination felt like a curated masterpiece. The attention to detail was astronomical.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Adventure Seeker",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        content: "From the glass-bottom boat in Andaman to the floating villa, everything exceeded my expectations.",
        rating: 5,
    },
    {
        id: 4,
        name: "David O'Neil",
        role: "Business Traveler",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        content: "Efficient, elegant, and truly premium. The Vacation Voice is my go-to for all global travel.",
        rating: 5,
    },
];

export default function ReviewsCarousel() {
    return (
        <section className="py-24 relative overflow-hidden bg-background/50">
            <div className="container px-4 md:px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Voices from the Void</h2>
                <p className="text-white/60">Hear from travelers who have touched the stars.</p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Infinite Marquee Effect */}
                <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused] px-4">
                    {[...reviews, ...reviews].map((review, i) => (
                        <div key={i} className="w-[350px] md:w-[450px] flex-shrink-0">
                            <GlassCard className="p-8 h-full" intensity="medium" hoverEffect="tilt">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-14 h-14">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-full h-full object-cover rounded-full border-2 border-primary/50"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-serif text-white">{review.name}</h4>
                                        <p className="text-sm text-primary">{review.role}</p>
                                    </div>
                                </div>
                                <p className="text-white/80 italic mb-6 leading-relaxed">"{review.content}"</p>
                                <div className="flex gap-1">
                                    {[...Array(review.rating)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 text-warning fill-secondary text-secondary" />
                                    ))}
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for marquee animation if not in global */}
            <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
        </section>
    );
}
