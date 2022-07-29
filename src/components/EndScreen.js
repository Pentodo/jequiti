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
			<span className='title'>Parabéns, você fez {score} pontos!</span>
			<button onClick={handleReset}>Recomeçar</button>
		</div>
	);
};

export default EndScreen;
