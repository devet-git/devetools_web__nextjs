'use client';
import classNames from '@/utils/class-names';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export const navLinks = [
	{
		name: "Tìm Facebook",
		href: "/features/find-fb",
		description: "Tìm tài khoản facebook của một người thông qua hình ảnh của họ"
	},
]
export default function NavBar() {
	const pathname = usePathname()

	return (
		<nav className="bg-opacity-50 backdrop-blur-md sticky top-0 z-50 px-10 py-3	flex flex-row gap-5 items-center ">
			<div className='logo font-bold text-2xl'>
				<Link href={"/"}>
					Devetools
				</Link>
			</div>

			{navLinks.map(link => {
				const isActive = pathname.startsWith(link.href)
				return (
					<Link
						key={link.name}
						href={link.href}
						className={classNames(
							isActive ? "text-blue-500 pointer-events-none" : "text-black"
						)}
					>
						{link.name}
					</Link>
				)
			})}
		</nav>
	)
}