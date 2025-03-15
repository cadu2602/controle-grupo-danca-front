import './App.css';
import AppBar from './components/AppBar';
import CardMain from './components/CardMain';

function App() {
	return (
		<div>
			<header className="flex row-auto items-start justify-start mb-20">
				<AppBar />
			</header>
			<div>
				<CardMain />
			</div>
		</div>
	);
}

export default App;
