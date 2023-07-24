import Image from "next/image";
type Props = {
	link?: string,
	name?: string,
	username?: string,
	avatarLink?: string
}

export default function FBAccount({ link, name, username, avatarLink }: Props) {
	return (
		<div className="flex items-center space-x-4 py-1 px-2 bg-white rounded-md border border-red-50">
			<div className="flex-shrink-0">
				<Image
					className="w-10 h-10 sm:w-14 sm:h-14  rounded-full border"
					src={avatarLink || "/user.svg"}
					alt={name || "unknown"}
					width={0}
					height={0}
				/>
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
					{name || "Unknown"}
				</p>
				<p className="text-sm text-gray-500 truncate dark:text-gray-400">
					{username || "Unknown"}
				</p>
			</div>
			<a
				href={link || "#"}
				target="_blank"
				className="inline-flex items-center underline text-gray-500 hover:text-black dark:text-white"
			>
				Goto
			</a>
		</div>
	)
}