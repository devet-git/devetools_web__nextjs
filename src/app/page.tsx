"use client";
import { navLinks } from "@/components/layouts/nav-bar";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-black text-7xl font-bold select-none">Devetools</h1>
			<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
				{navLinks.map(link => (
					<Link
						key={link.name}
						href={link.href}
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							{link.name}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
							{link.description}
						</p>
					</Link>

				))}
			</div>
		</main>
	);
}
