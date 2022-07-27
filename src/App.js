import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

function App() {
	const [scene, setScene] = useState('start');

	return (
		<div className='App'>
			{scene == 'start' && <StartScreen nextScene={() => setScene('playing')} />}
			{scene == 'playing' && <GameScreen nextScene={() => setScene('gameover')} />}
			{scene == 'gameover' && <EndScreen nextScene={() => setScene('start')} />}
		</div>
	);
}

export default App;
