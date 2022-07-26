import './EndScreen.css';

const EndScreen = ({ setStage }) => (
	<div>
		<h1>Jogo do Silvio Santos</h1>
		<button onClick={() => setStage('start')}>Recomeçar</button>
	</div>
);

export default EndScreen;
