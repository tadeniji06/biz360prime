"use client";

import Image from "next/image";
import { logo } from "../../assets";
import { motion } from "framer-motion";
import {
  Megaphone,
  Briefcase,
  Users,
  BookOpen,
  Boxes,
  ClipboardList,
  LineChart,
  Target,
} from "lucide-react";

const products = [
  { name: "Marketing360", desc: "Built", icon: <Megaphone size={28} className="text-white" /> },
  { name: "HRM360", desc: "Under development", icon: <Briefcase size={28} className="text-white" /> },
  { name: "CRM360", desc: "In development next", icon: <Users size={28} className="text-white" /> },
  { name: "Books360", desc: "Accounting", icon: <BookOpen size={28} className="text-white" /> },
  { name: "Inventory360", desc: "Inventory mgmt", icon: <Boxes size={28} className="text-white" /> },
  { name: "Projects360", desc: "Task mgmt", icon: <ClipboardList size={28} className="text-white" /> },
  { name: "Insights360", desc: "BI software", icon: <LineChart size={28} className="text-white" /> },
  { name: "SalesField360", desc: "Salesforce mgmt", icon: <Target size={28} className="text-white" /> },
];

export default function SectorRing() {
  const radius = 280; // Expanded radius to give room for text

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[750px] overflow-visible">
      {/* Central Hub */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
        className="absolute z-20 flex flex-col items-center justify-center w-56 h-56 rounded-full bg-black shadow-[0_0_50px_rgba(220,38,38,0.5)] cursor-pointer hover:bg-zinc-900 transition-colors border-4 border-red-600 dark:border-white p-4"
      >
        <Image src={logo} alt="Biz360Prime" width={140} height={80} className="object-contain" priority />
      </motion.div>

      {/* Rotating Ring Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
      >
        {products.map((item, index) => {
          const angle = (index * 360) / products.length;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
              style={{
                position: "absolute",
                x,
                y,
              }}
              className="pointer-events-auto"
            >
              {/* Counter-rotation to keep items upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                className="relative flex flex-col items-center group cursor-default"
              >
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-black dark:bg-zinc-900 border-2 border-red-500 shadow-lg group-hover:scale-110 group-hover:border-white transition-all duration-300 z-10">
                  {item.icon}
                </div>
                
                {/* Always-visible Label */}
                <div 
                  className="mt-3 flex flex-col items-center w-40 p-2"
                >
                  <span className="font-bold text-base text-zinc-900 dark:text-white text-center leading-tight drop-shadow-md bg-white/80 dark:bg-black/50 px-2 py-1 rounded w-full backdrop-blur-sm">{item.name}</span>
                  <span className="text-xs font-semibold text-red-600 dark:text-red-400 text-center mt-1 bg-white/80 dark:bg-black/50 px-2 rounded-full inline-block backdrop-blur-sm shadow-sm">{item.desc}</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Background Decorative Rings */}
      <div className="absolute w-[560px] h-[560px] rounded-full border-2 border-dashed border-red-500/20 pointer-events-none animate-[spin_60s_linear_infinite]" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-zinc-200 dark:border-zinc-800 pointer-events-none" />
    </div>
  );
}
