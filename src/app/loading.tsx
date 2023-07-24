import InfiniteLoadingEffect from "@/components/loading/infinite";

export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<InfiniteLoadingEffect />
		</div>
	)
}