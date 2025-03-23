import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n';
import CardMain from '@/components/CardMain.tsx';
import MonthlyFees from '@/pages/MonthlyFees.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <CardMain />,
			},
			{
				path: 'mensalidades',
				element: <MonthlyFees />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
