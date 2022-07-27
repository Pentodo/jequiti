import './EndScreen.css';

const EndScreen = ({ nextScene }) => (
	<div>
		<h1>Jogo do Silvio Santos</h1>
		<button onClick={nextScene}>Recomeçar</button>
	</div>
);

export default EndScreen;
