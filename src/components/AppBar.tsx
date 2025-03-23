import { ModeToggle } from '@/components/ModeToggle';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeProvider } from '@/hooks/ThemeProvider';
import { LogOut } from 'lucide-react';
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

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className="cursor-pointer">
							<AvatarFallback>GS</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<div className="flex items-center px-3">
							<div>Alterar tema:</div>
							<ThemeProvider storageKey="vite-ui-theme">
								<ModeToggle />
							</ThemeProvider>
						</div>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="cursor-pointer text-red-500 px-3">
							<LogOut color="red" />
							<div className="ml-1">Sair</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default AppBar;
