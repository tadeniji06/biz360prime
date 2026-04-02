"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Biz360Prime?",
    answer: "Biz360Prime is the central hub for a suite of powerful, industry-specific software solutions such as Marketing360, HRM360, Books360, and more. It unifies operations across different sectors under one connected ecosystem."
  },
  {
    question: "When will the other modules be ready?",
    answer: "Marketing360 is already built and available! HRM360 is currently under active development. CRM360 will enter development immediately after our second engineering team resumes. The others will roll out sequentially."
  },
  {
    question: "Can I use multiple 360 integrations at once?",
    answer: "Yes, all our platforms are built to speak perfectly to one another within the Biz360Prime infrastructure. Data can seamlessly flow from Inventory360 straight to Books360 and Insights360."
  },
  {
    question: "Do you offer custom tailored systems?",
    answer: "Absolutely. While the core 360 suite covers foundational issues for multiple industries, our solutions are highly modular and can be fine-tuned to map to your exact organizational workflow."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-zinc-100 dark:bg-zinc-900/50 w-full">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Got questions about how the ecosystem works? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">{faq.question}</span>
                <span className="text-red-500 ml-4 shrink-0">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
