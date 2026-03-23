"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tight">The Vacation Voice</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for exploring the world's most mesmerizing destinations. Premium tours, vetted hotels, and seamless transfers.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Popular Destinations</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {["Maldives", "Thailand", "Bali", "Dubai", "Europe", "Kashmir", "Andaman"].map(item => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {["About Us", "Our Story", "Careers", "Sustainability", "Press", "Contact Us"].map(item => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">Get the latest travel updates and exclusive offers.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary w-full"
                            />
                            <Button size="icon" className="shrink-0 bg-primary hover:bg-primary/90 text-white rounded-lg">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                    <p>&copy; 2026 The Vacation Voice. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
