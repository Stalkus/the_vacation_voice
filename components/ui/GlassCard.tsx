"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: "tilt" | "lift" | "glow" | "none";
    intensity?: "low" | "medium" | "high";
}

export function GlassCard({
    children,
    className,
    hoverEffect = "tilt",
    intensity = "medium",
    ...props
}: GlassCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        if (hoverEffect !== "tilt") return;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        if (hoverEffect !== "tilt") return;
        x.set(0);
        y.set(0);
    }

    const rotateX = useMotionTemplate`${mouseY.get() * -20}deg`;
    const rotateY = useMotionTemplate`${mouseX.get() * 20}deg`;

    const variants = {
        tilt: {
            rotateX: 0,
            rotateY: 0,
        },
        lift: {
            y: -10,
            transition: { duration: 0.3 },
        },
        glow: {
            boxShadow: "0 0 20px rgba(0, 184, 169, 0.4)",
        },
        none: {},
    };

    const intensityClasses = {
        low: "bg-white/5 border-white/5 backdrop-blur-sm",
        medium: "bg-white/10 border-white/10 backdrop-blur-md shadow-lg",
        high: "bg-white/20 border-white/20 backdrop-blur-xl shadow-xl",
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX: hoverEffect === "tilt" ? rotateX : 0,
                rotateY: hoverEffect === "tilt" ? rotateY : 0,
            }}
            whileHover={hoverEffect === "lift" ? "lift" : hoverEffect === "glow" ? "glow" : undefined}
            variants={variants}
            className={cn(
                "relative overflow-hidden rounded-2xl border transition-colors duration-300",
                intensityClasses[intensity],
                className
            )}
            {...any(props)}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                }}
                className="relative z-10 h-full w-full"
            >
                {children}
            </div>

            {/* Glossy sheen effect on hover */}
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        </motion.div>
    );
}

// Helper to cast props to any to avoid strict type conflicts with motion.div if needed
function any(props: any) {
    return props;
}
