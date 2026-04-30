"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { logo } from "../../assets";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname() || "";
	
	// Check if we're on a blog post page (/blog/[slug])
	const pathParts = pathname.split("/").filter(Boolean);
	const isBlogPostPage = pathParts[0] === "blog" && pathParts.length >= 2;
	
	const effectiveVariant = isBlogPostPage ? "blog" : "default";

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const navLinks = [
		{ href: "/#live-products", label: "Solutions" },
		{ href: "/#platform", label: "Platform" },
		{ href: "/about", label: "About Us" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	const blogNavLinks = [
		{ href: "/blog", label: "Back to Blog" },
	];
	const links = effectiveVariant === "blog" ? blogNavLinks : navLinks;

	return (
		<header className='sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm'>
			<div className='container mx-auto px-6 h-20 flex items-center justify-between'>
				{/* Logo */}
				<Link href="/" className='flex items-center gap-2'>
					<div className='p-2 rounded-lg bg-black flex items-center justify-center border border-zinc-800'>
						<Image
							src={logo}
							alt='Biz360Prime'
							width={100}
							height={100}
							className='object-contain w-full h-12 max-lg:h-10'
						/>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-8 text-sm font-medium'>
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className='text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors'
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Desktop Buttons */}
				<div className='hidden md:flex items-center gap-4'>
					<button className='text-sm font-medium text-black dark:text-white'>
						Log in
					</button>
					<button className='text-sm font-medium bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2'>
						Get Started <ArrowRight size={16} />
					</button>
				</div>

				{/* Mobile Hamburger Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='md:hidden p-2 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors'
					aria-label='Toggle menu'
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

		{/* Mobile Navigation */}
		{isOpen && (
			<>
				{/* Backdrop (blurs page behind menu) */}
				<div
					className='fixed top-20 inset-x-0 bottom-0 bg-black/30 backdrop-blur-sm z-30'
					onClick={() => setIsOpen(false)}
				/>

				{/* Menu (above backdrop) */}
				<div className='fixed top-20 inset-x-0 z-40 md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black/95 overflow-y-auto h-screen'>
					<nav className='container mx-auto px-6 py-4 flex flex-col gap-3'>
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='text-lg font-medium text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors py-2'
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<div className='border-t border-zinc-200 dark:border-zinc-800 pt-4 mt-4 flex flex-col gap-3'>
							<button className='text-base font-medium text-black dark:text-white py-2.5'>
								Log in
							</button>
							<button className='text-base font-medium bg-red-600 text-white px-4 py-2.5 rounded-full hover:bg-red-700 transition-colors flex items-center justify-center gap-2 w-full'>
								Get Started <ArrowRight size={16} />
							</button>
						</div>
					</nav>
				</div>
			</>
		)}
		</header>
	);
}
