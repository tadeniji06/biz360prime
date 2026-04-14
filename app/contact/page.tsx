import {
	ArrowRight,
	Phone,
	Mail,
	MapPin,
	MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { logo } from "../../assets";
import Link from "next/link";

export default function Contact() {
	return (
		<div className='flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans'>
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
							href='/#live-products'
							className='text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors'
						>
							Solutions
						</Link>
						<Link
							href='/#platform'
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

			{/* Main Content */}
			<main className='flex-1 container mx-auto px-6 py-12'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-12'>
						<h1 className='text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white mb-4'>
							Get in Touch
						</h1>
						<p className='text-lg text-zinc-600 dark:text-zinc-400'>
							Ready to transform your business? Contact us today to
							learn how Biz360Prime can help streamline your
							operations.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-12'>
						{/* Contact Information */}
						<div className='space-y-8'>
							<div>
								<h2 className='text-2xl font-bold text-black dark:text-white mb-6'>
									Contact Information
								</h2>
								<div className='space-y-4'>
									<div className='flex items-center gap-4'>
										<div className='p-3 rounded-full bg-red-100 dark:bg-red-900/30'>
											<Phone className='w-5 h-5 text-red-600 dark:text-red-400' />
										</div>
										<div>
											<p className='font-medium text-black dark:text-white'>
												Phone / WhatsApp
											</p>
											<a
												href='https://wa.me/2347040925563'
												className='text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors'
											>
												+234 704 092 5563
											</a>
											<br />
											<a
												href='https://wa.me/27656946477'
												className='text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors'
											>
												+27 65 694 6477
											</a>
										</div>
									</div>
									{/* <div className='flex items-center gap-4'>
										<div className='p-3 rounded-full bg-red-100 dark:bg-red-900/30'>
											<Mail className='w-5 h-5 text-red-600 dark:text-red-400' />
										</div>
										<div>
											<p className='font-medium text-black dark:text-white'>
												Email
											</p>
											<a
												href='mailto:contact@biz360prime.com'
												className='text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors'
											>
												contact@biz360prime.com
											</a>
										</div>
									</div> */}
									<div className='flex items-center gap-4'>
										<div className='p-3 rounded-full bg-red-100 dark:bg-red-900/30'>
											<MapPin className='w-5 h-5 text-red-600 dark:text-red-400' />
										</div>
										<div>
											<p className='font-medium text-black dark:text-white'>
												Location
											</p>
											<p className='text-zinc-600 dark:text-zinc-400'>
												Global Operations
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className='bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800'>
								<h3 className='text-lg font-semibold text-black dark:text-white mb-4'>
									Why Choose Biz360Prime?
								</h3>
								<ul className='space-y-2 text-zinc-600 dark:text-zinc-400'>
									<li>• Comprehensive business solutions</li>
									<li>• Industry-specific expertise</li>
									<li>• 24/7 support and consultation</li>
									<li>• Scalable and customizable platforms</li>
								</ul>
							</div>
						</div>

						{/* Contact Form */}
						<div className='bg-white dark:bg-zinc-900 rounded-lg p-8 border border-zinc-200 dark:border-zinc-800'>
							<h2 className='text-2xl font-bold text-black dark:text-white mb-6'>
								Send us a Message
							</h2>
							<form className='space-y-6'>
								<div className='grid md:grid-cols-2 gap-4'>
									<div>
										<label
											htmlFor='firstName'
											className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'
										>
											First Name
										</label>
										<input
											type='text'
											id='firstName'
											name='firstName'
											className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors'
											required
										/>
									</div>
									<div>
										<label
											htmlFor='lastName'
											className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'
										>
											Last Name
										</label>
										<input
											type='text'
											id='lastName'
											name='lastName'
											className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors'
											required
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'
									>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='company'
										className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'
									>
										Company
									</label>
									<input
										type='text'
										id='company'
										name='company'
										className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors'
									/>
								</div>
								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'
									>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										rows={5}
										className='w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none'
										required
									></textarea>
								</div>
								<button
									type='submit'
									className='w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2'
								>
									Send Message <MessageCircle size={16} />
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>

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
