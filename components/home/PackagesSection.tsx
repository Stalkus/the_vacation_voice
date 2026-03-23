import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Clock, Star } from "lucide-react";
import Image from "next/image";

const packages = [
    {
        id: 1,
        title: "Andaman Honeymoon Bliss",
        price: "₹ 21,000",
        duration: "6 Days 5 Nights",
        location: "Andaman",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=800&auto=format&fit=crop", // Couple/Honeymoon vibe
        tags: ["Honeymoon", "Best Seller"]
    },
    {
        id: 2,
        title: "Andaman Gateway",
        price: "₹ 13,000",
        duration: "4 Days 3 Nights",
        location: "Andaman",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b271?q=80&w=800&auto=format&fit=crop", // Palm trees
        tags: ["Budget", "Short Trip"]
    },
    {
        id: 3,
        title: "Experience Andaman",
        price: "₹ 24,000",
        duration: "7 Days 6 Nights",
        location: "Andaman",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", // Beach
        tags: ["Family", "Popular"]
    },
    {
        id: 4,
        title: "Amazing Andaman",
        price: "₹ 22,000",
        duration: "7 Days 6 Nights",
        location: "Andaman",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=800&auto=format&fit=crop", // Islands
        tags: ["Adventure"]
    },
    {
        id: 5,
        title: "Andaman Bliss",
        price: "₹ 19,000",
        duration: "6 Days 5 Nights",
        location: "Andaman",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1540202404-a6f296f5ca86?q=80&w=800&auto=format&fit=crop", // Water
        tags: ["Relaxing"]
    },
    {
        id: 6,
        title: "Escape Andaman",
        price: "₹ 15,000",
        duration: "5 Days 4 Nights",
        location: "Andaman",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=800&auto=format&fit=crop", // Underwater/Nature
        tags: ["Solo Plan"]
    },
];

export default function PackagesSection() {
    return (
        <section className="py-20 bg-muted/30" id="packages">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
                            <span className="text-primary">Best Selling</span> Holiday Packages
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Handpicked itineraries for an unforgettable experience.
                        </p>
                    </div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        View All Packages
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <Card key={pkg.id} className="group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-none shadow-md bg-white">
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    {pkg.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-primary rounded-full shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute bottom-4 left-4 flex items-center text-white space-x-1">
                                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                                    <span className="font-bold text-sm">{pkg.rating}</span>
                                </div>
                            </div>

                            <CardHeader className="p-5 pb-2">
                                <div className="flex justify-between items-start gap-2">
                                    <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{pkg.title}</CardTitle>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Starting from</p>
                                    <span className="text-2xl font-black text-secondary">{pkg.price}</span>
                                    <span className="text-xs text-muted-foreground">/ person</span>
                                </div>
                            </CardHeader>

                            <CardContent className="p-5 pt-2 grid grid-cols-2 gap-4">
                                <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                    <Clock className="h-4 w-4 mr-2 text-primary" />
                                    <span className="font-medium">{pkg.duration}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                    <Users className="h-4 w-4 mr-2 text-primary" />
                                    <span className="font-medium">2 Persons</span>
                                </div>
                            </CardContent>

                            <CardFooter className="p-5 pt-0">
                                <Button className="w-full font-bold shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">View Details</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
