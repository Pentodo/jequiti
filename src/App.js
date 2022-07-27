import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

function App() {
	const scenes = [
		{ id: 1, scene: 'start' },
		{ id: 2, scene: 'playing' },
		{ id: 3, scene: 'gameover' },
	];

	const [scene, setScene] = useState(scenes[0].scene);

	return (
		<div className='App'>
			{scene === 'start' && <StartScreen nextScene={() => setScene(scenes[1].scene)} />}
			{scene === 'playing' && <GameScreen nextScene={() => setScene(scenes[2].scene)} />}
			{scene === 'gameover' && <EndScreen nextScene={() => setScene(scenes[0].scene)} />}
		</div>
	);
}

export default App;
