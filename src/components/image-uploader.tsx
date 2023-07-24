'use client';

import classNames from "@/utils/class-names";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import IconButton from "./buttons/icon-button";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
interface Props {
	className?: string
	onLoaded?: (image: File) => any
	onUpload?: MouseEvent<HTMLButtonElement>
	hiddenUploadButton?: true
}
export default function ImageUploader({ className, onLoaded, onUpload, hiddenUploadButton }: Props) {
	const [imagePreview, setImagePreview] = useState<string>("");
	const [image, setImage] = useState<File>();

	const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImagePreview(URL.createObjectURL(e.target.files[0]))
			setImage(e.target.files[0])
		}
	}
	useEffect(() => {
		onLoaded && onLoaded(image!)
	}, [image, onLoaded])

	const handleClearImage = () => {
		setImagePreview("")
		setImage(undefined)
	}

	return (
		<div className={`${className} ${image ? "border" : "border-4"} relative  border-dashed rounded-xl border-gray-500 overflow-hidden `}>
			<input
				className="absolute left-0 right-0 top-0 h-full cursor-pointer opacity-0"
				type="file"
				title="Choose an image"
				name="accountImage"
				accept="image/*"
				onChange={onImageChange}
			/>
			<IconButton
				icon={<XMarkIcon className="w-6" />}
				className="absolute bottom-2 right-2 border border-black rounded-full overflow-hidden hover:text-red-600 hover:border-red-600"
				onClick={handleClearImage}
				hidden={!imagePreview}
				title="Clear"
			/>
			{!hiddenUploadButton && (
				<IconButton
					icon={<CloudArrowUpIcon className="w-6" />}
					text="Upload"
					className="absolute bottom-2 right-14 px-2 border border-blue-300 text-blue-600 rounded-full overflow-hidden hover:bg-blue-50"
					hidden={!imagePreview}
					onClick={onUpload}
				/>
			)}
			{imagePreview && (
				<Image
					className="preview-image w-[100%]"
					src={imagePreview}
					width={100}
					height={100}
					alt="people to find"
				/>
			)}
			<div className={classNames(
				imagePreview ? "px-2 py-3 text-left" : "py-20 text-center",
				"text-gray-500 w-full "
			)}>
				<span>{imagePreview ? "Chọn ảnh khác" : "Duyệt hoặc kéo/thả hình ảnh vào đây"}</span>
			</div>

		</div>
	)
}