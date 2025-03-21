import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import TitleCard from './TitleCard';

type CardProps = React.ComponentProps<typeof Card>;

const CardContent = ({ className, ...props }: CardProps) => {
	return (
		<div>
			{props.title && (
				<div>
					<TitleCard title={props.title} />
				</div>
			)}
			<div className="p-[2px] bg-gradient-to-b from-[#00205E] via-[#0057FF] to-[#EAEAEA] rounded-2xl dark:bg-gradient-to-b dark:from-[#007AFF] dark:via-[#ACDAFF] dark:to-[#EAEAEA]">
				<Card className={cn('w-full dark:bg-[#00205E]', className)} {...props}>
					{props.children}
				</Card>
			</div>
		</div>
	);
};

export default CardContent;
