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
import { useTranslation } from 'react-i18next';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AppBar = () => {
	const { t } = useTranslation();
	return (
		<div className="bg-[#00205E] dark:bg-[#007AFF] w-screen">
			<div className="flex items-center justify-between p-2">
				<FiMenu color="white" size={20} />
				<Link to="/">
					<img
						src="./logo.png"
						alt="logo"
						className="items-center justify-center w-10 h-10"
					/>
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className="cursor-pointer">
							<AvatarFallback>GS</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<div className="flex items-center px-3">
							<div>{t('alterarTema')}:</div>
							<ThemeProvider storageKey="vite-ui-theme">
								<ModeToggle />
							</ThemeProvider>
						</div>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="cursor-pointer text-red-500 px-3">
							<LogOut color="red" />
							<div className="ml-1">{t('sair')}</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default AppBar;
