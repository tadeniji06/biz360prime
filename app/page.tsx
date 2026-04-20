import SectorRing from "./components/SectorRing";
import LiveProducts from "./components/LiveProducts";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import { logo } from "../assets";
import Link from "next/link";

export default function Home() {
	const professionalServiceSchema = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "Biz360 Prime",
		"image": "https://www.biz360prime.com/logo.png",
		"url": "https://www.biz360prime.com",
		"priceRange": "$$",
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "NG"
		},
		"areaServed": {
			"@type": "Country",
			"name": "Nigeria"
		},
		"serviceType": [
			"Business Consulting",
			"Digital Strategy",
			"Market Insights",
			"Entrepreneurship Support",
			"Content & Media Services"
		]
	};

	return (
		<div className='flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans overflow-hidden'>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
			/>
			{/* Header */}
			<header className='sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md'>
				<div className='container mx-auto px-6 h-20 flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<div className='p-2 rounded-lg bg-black flex items-center justify-center border border-zinc-800'>
							<Image
								src={logo}
								alt='Biz360Prime'
								width={100}
								height={32}
								className='object-contain'
							/>
						</div>
					</div>
					<nav className='hidden md:flex items-center gap-8 text-sm font-medium'>
						<Link
							href='#live-products'
							className='text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors'
						>
							Solutions
						</Link>
						<Link
							href='#'
							className='text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors'
						>
							Platform
						</Link>
						<Link
							href='/about'
							className='text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors'
						>
							About Us
						</Link>
						<Link
							href='/blog'
							className='text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors'
						>
							Blog
						</Link>
						<Link
							href='/contact'
							className='text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors'
						>
							Contact
						</Link>
					</nav>
					<div className='flex items-center gap-4'>
						<button className='text-sm font-medium text-black dark:text-white'>
							Log in
						</button>
						<button className='text-sm font-medium bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2'>
							Get Started <ArrowRight size={16} />
						</button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<main className='flex-1 container mx-auto px-6 py-12 flex flex-col items-center'>
				<div className='text-center max-w-3xl mb-12'>
					<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-900/50 mb-6'>
						<Globe size={16} />
						<span>Solving Industry-Specific Tech Needs</span>
					</div>
					<h1 className='text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white mb-6'>
						Empower Your Business with{" "}
						<span className='text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-400'>
							Biz360Prime
						</span>
					</h1>
					<p className='text-lg md:text-xl text-zinc-600 dark:text-zinc-400'>
						A comprehensive suite of powerful software solutions
						designed to streamline your operations, from accounting
						and HR to CRM and intelligent BI insights.
					</p>
				</div>

				{/* The Animated Hub */}
				<section className='w-full relative mt-8 mb-24'>
					<div className='absolute inset-0 bg-linear-to-t from-zinc-50 via-transparent to-zinc-50 dark:from-black dark:via-transparent dark:to-black pointer-events-none z-10' />
					<SectorRing />
				</section>
			</main>

			<LiveProducts />
			<Features />
			<FAQ />
			<CTA />

			{/* Footer */}
			<footer className='border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-12'>
				<div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
					<div className='flex items-center gap-2'>
						<div className='p-2 rounded-lg bg-black flex items-center justify-center border border-zinc-800'>
							<Image
								src={logo}
								alt='Biz360Prime'
								width={80}
								height={24}
								className='object-contain'
							/>
						</div>
					</div>
					<p className='text-sm text-zinc-500 dark:text-zinc-500'>
						© {new Date().getFullYear()} Biz360Prime. All rights
						reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
