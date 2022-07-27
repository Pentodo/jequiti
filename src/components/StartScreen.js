import './StartScreen.css';

const StartScreen = ({ nextScene }) => (
	<div className='Start'>
		<h1>Jogo do Silvio Santos</h1>
		<button onClick={nextScene}>Começar</button>
	</div>
);

export default StartScreen;
