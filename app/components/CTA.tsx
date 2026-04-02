import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 bg-red-600 overflow-hidden w-full">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      
      {/* Abstract circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-red-500 blur-2xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-red-700 blur-2xl opacity-50" />

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10">
          Join leading businesses that are streamlining their operations with the Biz360 ecosystem. Start with one, expand to all.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
            Get Started Today <ArrowRight size={20} />
          </button>
          <button className="bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
