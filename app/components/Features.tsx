import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Unified Ecosystem",
    description: "One single source of truth for your business. No more disjointed platforms and manual syncing between different departments."
  },
  {
    title: "Industry Specific Logic",
    description: "Whether you are doing heavy logistics or granular CRM logic, our modules are tailor-made rather than a generalized one-size-fits-all."
  },
  {
    title: "Highly Scalable",
    description: "Start with Marketing360 and gradually seamlessly add HRM360 or Books360 as your operations expand and revenue grows."
  },
  {
    title: "Data Driven Insights",
    description: "Insights360 taps directly into all your active products out-of-the-box, generating powerful dashboards instantly."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white dark:bg-black w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white mb-6">
              Why Choose the <span className="text-red-600 dark:text-red-500">Biz360</span> Ecosystem?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Managing a modern business usually requires 5-10 different software subscriptions that refuse to talk to each other. We are solving this permanently through an interconnected architectural design.
            </p>
            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 size={24} className="text-red-600 dark:text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-tr from-red-600/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-4">
                {/* Mock UI elements to act as a visual dashboard representation */}
                <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-red-600/10 border border-red-600/20 rounded-xl" />
                  <div className="h-32 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl" />
                </div>
                <div className="h-48 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl mt-4 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
