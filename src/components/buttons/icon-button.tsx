import classNames from "@/utils/class-names";
import { IIconButton } from "./button";


export default function IconButton({ disable, iconRight, title, hidden, icon, text, className, onClick }: IIconButton) {
	return (
		<button
			className={classNames(
				hidden && "hidden",
				`p-1 flex justify-center items-center gap-1 ${className}`
			)}
			onClick={onClick}
			title={title || text || "Icon button"}
			disabled={disable}
			type="button"
		>
			{iconRight ? (<>{text}{icon}</>) : (<>{icon}{text}</>)}

		</button >
	)
}