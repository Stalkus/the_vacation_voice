import Image from "next/image";

export default function PartnersSection() {
    return (
        <section className="py-16 bg-primary/5 border-t border-primary/10">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-primary mb-10 uppercase tracking-widest text-opacity-80">Our Trusted Ferry Partners</h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
                    {/* Styled placeholders */}
                    <div className="group transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        <h3 className="text-2xl font-black text-slate-300 group-hover:text-[#0081C9] transition-colors">MAKRUZZ</h3>
                    </div>
                    <div className="group transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        <h3 className="text-2xl font-black text-slate-300 group-hover:text-[#2E7D32] transition-colors">GREEN OCEAN</h3>
                    </div>
                    <div className="group transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        <h3 className="text-2xl font-black text-slate-300 group-hover:text-[#D84315] transition-colors">NAUTICA</h3>
                    </div>
                    <div className="group transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        <h3 className="text-2xl font-black text-slate-300 group-hover:text-[#0081C9] transition-colors">MAKRUZZ</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
