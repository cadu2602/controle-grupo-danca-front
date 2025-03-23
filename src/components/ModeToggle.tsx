import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ModeToggle() {
	const { setTheme } = useTheme();
	const [mode, setMode] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem('vite-ui-theme');
		setMode(storedTheme === 'dark');
	}, []);

	function toggleTheme(item: boolean) {
		const theme = item ? 'dark' : 'light';
		setTheme(theme);
		localStorage.setItem('vite-ui-theme', theme);
		setMode(item);
	}

	return (
		<div className="py-2 mx-3">
			<Switch
				checked={mode}
				onCheckedChange={toggleTheme}
				checkedIcon={<Moon size={12} className="text-blue-500" />}
				uncheckedIcon={<Sun size={12} className="text-yellow-500" />}
				className="dark:bg-gray-300!"
			/>
		</div>
	);
}
