const StartScreen = ({ setStage }) => (
	<div>
		<h1>Jogo do Silvio Santos</h1>
		<button onClick={() => setStage('playing')}>Começar</button>
	</div>
);

export default StartScreen;
