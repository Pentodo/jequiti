import { useEffect } from 'react';
import './EndScreen.css';

const EndScreen = ({ nextScene, score, setScore }) => {
	useEffect(() => {
		const handleEnterToNextScene = (e) => {
			if (e.key === 'Enter') {
				handleReset();
			}
		};

		document.addEventListener('keydown', handleEnterToNextScene);
		return () => document.removeEventListener('keydown', handleEnterToNextScene);
	});

	const handleReset = () => {
		setScore(0);
		nextScene();
	};

	return (
		<div className='End'>
			<h1>Parabéns, você fez {score} pontos!</h1>
			<button onClick={handleReset}>Recomeçar</button>
		</div>
	);
};

export default EndScreen;
