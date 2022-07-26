const GameScreen = ({ setStage }) => (
	<div>
		<h1>Jogo do Silvio Santos</h1>
		<button onClick={() => setStage('gameover')}>Terminar</button>
	</div>
);

export default GameScreen;
