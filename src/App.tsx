import { Outlet } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';

function App() {
	return (
		<div className="bg-white dark:bg-[#00205E]">
			<AppBar />
			<div className="mt-10 px-3">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
