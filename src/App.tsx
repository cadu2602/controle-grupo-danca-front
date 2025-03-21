import './App.css';
import AppBar from './components/AppBar';
import CardMain from './components/CardMain';

function App() {
	return (
		<div className="bg-white dark:bg-[#00205E] p-0 h-screen m-0">
			<AppBar />
			<div className="mt-10 px-3">
				<CardMain />
			</div>
		</div>
	);
}

export default App;
