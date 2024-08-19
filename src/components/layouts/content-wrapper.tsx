import { cn } from '@/utils/helper-funcs'

export interface ContentWrapperProps {
	children: React.ReactNode
	className?: string
}

export const ContentWrapper = ({
	children,
	className,
}: ContentWrapperProps) => {
	return (
		<section
			className={cn(
				'mx-auto mb-4 flex w-full flex-col border-red-300',
				className
			)}
		>
			{children}
		</section>
	)
}
