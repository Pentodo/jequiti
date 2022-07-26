import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

function App() {
	const stages = [
		{ id: 1, stage: 'start' },
		{ id: 2, stage: 'playing' },
		{ id: 3, stage: 'gameover' },
	];

	const [stage, setStage] = useState(stages[0].stage);

	return (
		<div className='App'>
			{stage === 'start' && <StartScreen setStage={setStage} />}
			{stage === 'playing' && <GameScreen setStage={setStage} />}
			{stage === 'gameover' && <EndScreen setStage={setStage} />}
		</div>
	);
}

export default App;
