import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactNode, useState } from "react";
import IconButton from "./buttons/icon-button";

interface Props {
	children: ReactNode
	className?: string
	closeButton?: true,
}
const Info = ({ children, className, closeButton }: Props) => {
	const [isHidden, setIsHidden] = useState<boolean>(false)
	return (
		<div className={`${isHidden && "hidden"} min-w-fit flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 ${className}`} role="alert">
			<svg className="flex-shrink-0 inline w-4 h-4 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
			</svg>
			<span className="sr-only">Info</span>
			{children}
			{closeButton && (
				<IconButton
					className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg  p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
					onClick={() => setIsHidden(true)}
					icon={<XMarkIcon className="w-6" />}
				/>
			)}
		</div>
	)
}
const Warning = ({ children, className, closeButton }: Props) => {
	const [isHidden, setIsHidden] = useState<boolean>(false)

	return (
		<div className={`${className} min-w-fit flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300`} role="alert">
			<svg className="flex-shrink-0 inline w-4 h-4 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
			</svg>
			<span className="sr-only">Info</span>
			{children}
			{closeButton && (
				<IconButton
					className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg  p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
					onClick={() => setIsHidden(true)}
					icon={<XMarkIcon className="w-6" />}
				/>
			)}
		</div>
	)
}
const Error = ({ children, className, closeButton }: Props) => {
	const [isHidden, setIsHidden] = useState<boolean>(false)

	return (
		<div className={` ${className} min-w-fit flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`} role="alert">
			<svg className="flex-shrink-0 inline w-4 h-4 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<span className="sr-only">Info</span>
			{children}
			{closeButton && (
				<IconButton
					className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg  p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
					onClick={() => setIsHidden(true)}
					icon={<XMarkIcon className="w-6" />}
				/>
			)}
		</div>
	)
}
const Success = ({ children, className, closeButton }: Props) => {
	const [isHidden, setIsHidden] = useState<boolean>(false)

	return (
		<div className={`${className} min-w-fit flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400`} role="alert">
			<svg className="flex-shrink-0 inline w-4 h-4 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<span className="sr-only">Info</span>
			{children}
			{closeButton && (
				<IconButton
					className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg  p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
					onClick={() => setIsHidden(true)}
					icon={<XMarkIcon className="w-6" />}
				/>
			)}
		</div>
	)
}
const Alert = ({ children, className, closeButton }: Props) => {
	const [isHidden, setIsHidden] = useState<boolean>(false)

	return (
		<div className={`${className} min-w-fit flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300`} role="alert">
			<svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
			</svg>
			<span className="sr-only">Alert</span>

			{children}
			{closeButton && (
				<IconButton
					className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg  p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
					onClick={() => setIsHidden(true)}
					icon={<XMarkIcon className="w-6" />}
				/>
			)}
		</div>
	)
}
Alert.Info = Info
Alert.Warning = Warning
Alert.Error = Error
Alert.Success = Success

export default Alert