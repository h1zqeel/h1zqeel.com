import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		const origin = process.env.CALORIE_TRACKER_ORIGIN;
		if (!origin) return [];

		const destination = new URL(origin);
		if (destination.protocol !== "https:" || !destination.hostname.endsWith(".vercel.app") ||
			destination.username || destination.password || destination.port ||
			destination.pathname !== "/" || destination.search || destination.hash) {
			throw new Error("CALORIE_TRACKER_ORIGIN must be the HTTPS origin of the tracker’s Vercel project.");
		}

		return [
			{ source: "/calorie-tracker", destination: `${destination.origin}/calorie-tracker` },
			{ source: "/calorie-tracker/assets/:path+", destination: `${destination.origin}/calorie-tracker/assets/:path+` },
		];
	},
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);
