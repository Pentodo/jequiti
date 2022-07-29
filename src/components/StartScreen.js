import { useEffect } from 'react';
import './StartScreen.css';

const StartScreen = ({ nextScene }) => {
	useEffect(() => {
		const handleEnterToNextScene = (e) => {
			if (e.key === 'Enter') {
				nextScene();
			}
		};

		document.addEventListener('keydown', handleEnterToNextScene);
		return () => document.removeEventListener('keydown', handleEnterToNextScene);
	});

	return (
		<div className='Start'>
			<span className='title'>Jogo do Silvio Santos</span>
			<button onClick={nextScene}>Começar</button>
		</div>
	);
};

export default StartScreen;
