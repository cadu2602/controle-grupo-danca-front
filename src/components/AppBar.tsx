import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FiMenu } from 'react-icons/fi';

const AppBar = () => {
	return (
		<header className="bg-[#007AFF] w-full">
			<div className="flex flex-row justify-between px-3 py-3">
				<FiMenu className="items-center" color="white" size={20} />
				<div className="w-15 h-0">
					<img src="./logo.png" alt="logo" />
				</div>
				<Avatar>
					<AvatarImage />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</header>
	);
};

export default AppBar;
