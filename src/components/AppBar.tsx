import { ModeToggle } from '@/components/ModeToggle';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { ThemeProvider } from '@/hooks/ThemeProvider';
import { LogOut, NotebookPen, User, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsCashCoin } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AppBar = () => {
	const { t } = useTranslation();
	const [model, setModel] = useState(false);

	function showModal(value: boolean) {
		setModel(value);
	}
	return (
		<div className="bg-[#00205E] dark:bg-[#007AFF] w-screen">
			<div className="flex items-center justify-between p-2">
				<Drawer open={model} onOpenChange={showModal}>
					<DrawerTrigger asChild className="dark:bg-[#007AFF]! bg-[#00205E]!">
						<FiMenu color="white" size={20} className="cursor-pointer" />
					</DrawerTrigger>
					<DrawerContent className="dark:bg-[#007AFF]! bg-[#00205E]! my-10">
						<DrawerHeader className="m-0 pb-0">
							<DrawerClose className="dark:bg-[#007AFF]! bg-[#00205E]! flex justify-end">
								<X color="white" size={20} className="cursor-pointer " />
							</DrawerClose>
						</DrawerHeader>
						<DrawerHeader>
							<DrawerTitle className="p-2">
								<Link
									onClick={() => showModal(false)}
									to="/mensalidades"
									className="text-white!">
									<div className="flex items-center">
										<BsCashCoin className="mr-2" />
										<span>Mensalidades</span>
									</div>
								</Link>
							</DrawerTitle>
							<Separator />
							<DrawerTitle className="p-2">
								<Link to="/integrantes" className="text-white!">
									<div className="flex items-center">
										<User className="mr-2" />
										<span>Integrantes</span>
									</div>
								</Link>
							</DrawerTitle>
							<Separator />
							<DrawerTitle className="p-2">
								<Link to="/livro-caixa" className="text-white!">
									<div className="flex items-center">
										<NotebookPen className="mr-2" />
										<span>Livro caixa</span>
									</div>
								</Link>
							</DrawerTitle>
						</DrawerHeader>
					</DrawerContent>
				</Drawer>
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
