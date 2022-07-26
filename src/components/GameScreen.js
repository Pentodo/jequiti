import './GameScreen.css';

const GameScreen = ({ setStage }) => (
	<div className='Game'>
		<p>
			Pontos: <span>?</span>
		</p>
		<p>
			Dica: <span>palavra...</span>
		</p>
		<div>
			<span className='wordLetter'>A</span>
			<span className='wordLetter'>B</span>
		</div>
		<form>
			<label>
				Letra: <input type='text' maxLength={1} required />
			</label>
			<button type='submit'>Enviar</button>
		</form>
	</div>
);

export default GameScreen;
