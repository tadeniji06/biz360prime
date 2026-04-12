import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { logo } from "../../assets";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-black flex items-center justify-center border border-zinc-800">
              <Image src={logo} alt="Biz360Prime" width={100} height={32} className="object-contain" />
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/#solutions" className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors">Solutions</a>
            <a href="/#platform" className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors">Platform</a>
            <a href="/about" className="text-red-600 dark:text-red-400 transition-colors pointer-events-none">About Us</a>
            <a href="/blog" className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors">Blog</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2">
              Back to Home <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-400">Biz360Prime</span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl">
          We are building the interconnected software infrastructure of the future. Our core mission is solving industry-specific, tech-related issues natively, providing companies a single 360-degree ecosystem to run their entire operation.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Vision</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We envision a world where businesses don't have to piece together fragmented software systems. Biz360Prime acts as the central unifier, bringing CRM, HRM, Inventory, and Financials into one coherent codebase with specialized modules.
            </p>
          </div>
          <div className="bg-red-600 p-8 rounded-3xl shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">The '360' Philosophy</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-0.5" /> 
                <span>End-to-end coverage across departments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-0.5" /> 
                <span>Intelligent data sharing between apps</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-0.5" /> 
                <span>Modular pricing & scaling</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-black flex items-center justify-center border border-zinc-800">
              <Image src={logo} alt="Biz360Prime" width={80} height={24} className="object-contain" />
            </div>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Biz360Prime. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
