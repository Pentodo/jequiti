import './GameScreen.css';

const GameScreen = ({ setStage }) => (
	<div className='Game'>
		<div className='info'>
			Pontos: <span className='score'>100</span>
			<br />
			Dica: <span className='hint'>comida</span>
		</div>
		<div className='word'>
			<div className='box'>P</div>
			<div className='box'>A</div>
			<div className='box'> </div>
		</div>
		<form>
			<input type='text' placeholder='?' maxLength={1} required />
			<button type='submit'>Chutar</button>
		</form>
		<div className='info'>
			Tentativas restantes: <span className='attempts'>3</span>
			<br />
			Letras já utilizadas: <span className='guessed'>P, A</span>
		</div>
	</div>
);

export default GameScreen;
