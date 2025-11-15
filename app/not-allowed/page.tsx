"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { ArrowLeft } from "lucide-react";

export default function NotAllowed() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="flex flex-col items-center gap-8 text-center">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl font-bold text-zinc-100 sm:text-5xl md:text-6xl">
							Access Denied
						</h1>
						<p className="text-lg text-zinc-400 sm:text-xl">
							The action you performed is not allowed.
						</p>
					</div>

					<div className="w-full max-w-md h-px bg-gradient-to-r from-zinc-500/0 via-zinc-500/50 to-zinc-500/0" />

					<p className="text-sm text-zinc-500 max-w-md">
						It seems you tried to access something you don't have permission for. If you believe this is a mistake, please contact support.
					</p>

					<Link
						href="/"
						className="flex items-center gap-2 px-6 py-2 text-sm duration-500 border rounded-lg text-zinc-200 border-zinc-500 hover:bg-zinc-900 hover:border-zinc-200"
					>
						<ArrowLeft size={16} />
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
