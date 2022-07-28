import { useState } from 'react';
import { gameData } from '../data/gameData';
import './GameScreen.css';

const GameScreen = ({ nextScene, score, setScore }) => {
	const getData = () => {
		const getRandom = list => list[Math.floor(list.length * Math.random())];

		const hints = Object.keys(gameData);
		const hint = getRandom(hints);

		const hintWords = gameData[hint];
		const word = getRandom(hintWords);

		return { hint, word };
	};

	const [hint, setHint] = useState('');
	const [word, setWord] = useState([]);
	const [attempts, setAttempts] = useState(3);
	const [guessed, setGuessed] = useState([]);
	const [contains, setContains] = useState([]);

	if (attempts === 0) {
		nextScene();
	}

	if (word.length === contains.length && score !== 0) {
		setScore(score + 100);
		setHint('');
		setAttempts(3);
		setGuessed([]);
		setContains([]);
	}

	if (hint === '') {
		const data = getData();

		setHint(data.hint);
		setWord(data.word.split(''));
	}

	const handleGuess = e => {
		e.preventDefault();

		const input = e.target.guess;
		const guessedLetter = input.value.toLowerCase();

		if (guessedLetter !== '' && !contains.includes(guessedLetter)) {
			setGuessed([...guessed, guessedLetter]);

			const compareLetters = word.filter(letter => letter === guessedLetter);

			if (compareLetters.length > 0) {
				setScore(score + compareLetters.length * 10);
				setContains([...contains, ...compareLetters]);
			} else {
				setAttempts(attempts - 1);
			}
		}

		input.value = '';
	};

	const printLetters = () => {
		return word.map((letter, index) => (
			<div className='box' key={index}>
				{contains.includes(letter) && letter}
			</div>
		));
	};

	const printGuessed = () => {
		if (guessed.length) {
			return guessed.map((letter, index) => {
				if (index !== 0) {
					letter = `, ${letter}`;
				}

				return letter;
			});
		}

		return 'nenhuma';
	};

	return (
		<div className='Game' onClick={() => document.querySelector('input[name=guess]').focus()}>
			<div className='info'>
				Pontos: <span className='score'>{score || 'nada ainda'}</span>
				<br />
				Dica: <span className='hint'>{hint}</span>
			</div>
			<div className='word'>{printLetters()}</div>
			<form onSubmit={handleGuess}>
				<input type='text' name='guess' placeholder='?' maxLength={1} pattern='[A-Za-z]' autoFocus />
				<button type='submit'>Chutar</button>
			</form>
			<div className='info'>
				Tentativas restantes: <span className='attempts'>{attempts}</span>
				<br />
				Letras já utilizadas: <span className='guessed'>{printGuessed()}</span>
			</div>
		</div>
	);
};

export default GameScreen;
