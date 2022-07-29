import { useEffect, useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const scenes = { start: StartScreen, playing: GameScreen, gameover: EndScreen };
const scenesKeys = Object.keys(scenes);

function App() {
	useEffect(() => {
		document.title = 'Roda a Roda Jequiti';
	});

	const [scene, setScene] = useState('start');
	const [score, setScore] = useState(0);

	const getScene = () => {
		const Module = scenes[scene];
		const nextScene = () => setScene(scenesKeys[scenesKeys.indexOf(scene) + 1] || scenesKeys[0]);

		return <Module nextScene={nextScene} score={score} setScore={setScore} />;
	};

	return <div className='App'>{getScene()}</div>;
}

export default App;
