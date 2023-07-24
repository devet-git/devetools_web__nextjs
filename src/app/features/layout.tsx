import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/nav-bar";
import { ReactNode } from "react";

export default function FeatureLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<NavBar />
			<div className="px-10">
				{children}
			</div>
			<Footer />
		</>
	)
}