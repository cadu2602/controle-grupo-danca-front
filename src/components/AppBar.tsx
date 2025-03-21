import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FiMenu } from 'react-icons/fi';

const AppBar = () => {
	return (
		<div className="bg-[#00205E] dark:bg-[#007AFF] w-screen">
			<div className="flex items-center justify-between p-2">
				<FiMenu color="white" size={20} />
				<img
					src="./logo.png"
					alt="logo"
					className="items-center justify-center w-10 h-10"
				/>
				<Avatar>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};

export default AppBar;
