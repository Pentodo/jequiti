import './EndScreen.css';

const EndScreen = ({ nextScene, score, setScore }) => {
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
