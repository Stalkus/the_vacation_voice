import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

const activities = [
    {
        id: 1,
        title: "Parasailing at Andaman",
        price: "₹ 3500",
        originalPrice: "₹ 4000",
        location: "Andaman",
        image: "https://images.unsplash.com/photo-1540202404-a6f296f5ca86?q=80&w=800&auto=format&fit=crop", // Replaced with valid Parasailing/Water image
    },
    {
        id: 2,
        title: "Parasailing at Port Blair",
        price: "₹ 3500",
        originalPrice: "₹ 4000",
        location: "Port Blair",
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Sea Kart at Port Blair",
        price: "₹ 3500",
        originalPrice: "₹ 4000",
        location: "Port Blair",
        image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Under Water Scooter",
        price: "₹ 4500",
        originalPrice: "₹ 5500",
        location: "Havelock Island",
        image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=800&auto=format&fit=crop", // Diving/Underwater
    },
];

export default function ActivitiesSection() {
    return (
        <section className="py-20 bg-white" id="activities">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
                            Explore <span className="text-accent">Activities</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Thrilling adventures waiting for you.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full">{"<"}</Button>
                        <Button variant="outline" size="icon" className="rounded-full">{">"}</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.map((activity) => (
                        <Card key={activity.id} className="group overflow-hidden cursor-pointer border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="relative h-72 w-full overflow-hidden rounded-t-xl">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 p-5 w-full">
                                    <div className="flex items-center text-white/80 text-xs font-bold uppercase tracking-wider mb-1">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {activity.location}
                                    </div>
                                    <h3 className="font-bold text-lg text-white line-clamp-2 leading-tight mb-2 group-hover:text-secondary transition-colors">{activity.title}</h3>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-xl font-extrabold text-secondary">{activity.price}</span>
                                        <span className="text-sm text-white/60 line-through decoration-white/60">{activity.originalPrice}</span>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="p-0">
                                <Button className="w-full rounded-t-none h-12 bg-gray-50 text-foreground hover:bg-primary hover:text-white transition-all font-bold">
                                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
