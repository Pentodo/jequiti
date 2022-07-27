import { useState } from 'react';
import { gameData } from '../data/gameData';
import './GameScreen.css';

const GameScreen = ({ nextScene }) => {
	const getData = () => {
		const getRandom = list => list[Math.floor(list.length * Math.random())];

		const hints = Object.keys(gameData);
		const hint = getRandom(hints);

		const hintWords = gameData[hint];
		const word = getRandom(hintWords);

		return { hint, word };
	};

	const [score, setScore] = useState(0);
	const [hint, setHint] = useState('');
	const [word, setWord] = useState([]);
	const [attempts, setAttempts] = useState(3);
	const [guessed, setGuessed] = useState('');
	const [contains, setContains] = useState([]);

	if (attempts == 0) {
		nextScene();
	}

	if (word.length == contains.length) {
		setScore(score + 100);
		setHint('');
		setAttempts(3);
		setGuessed('');
		setContains([]);
	}

	if (hint == '') {
		const data = getData();

		setHint(data.hint);
		setWord(data.word.split(''));
	}

	const handleGuess = e => {
		e.preventDefault();
		const input = e.target.guess;
		const guessedLetter = input.value;

		if (guessedLetter != '' || !contains.includes(guessedLetter)) {
			setGuessed(guessed == '' ? guessedLetter : `${guessed}, ${guessedLetter}`);

			const compareLetters = word.filter(letter => letter === guessedLetter);

			if (compareLetters.length > 0) {
				setScore(score + compareLetters.length * 10);
				setContains([...contains, ...compareLetters]);
			} else {
				setAttempts(attempts - 1);
			}
		}

		input.value = '';
		input.focus();
	};

	return (
		<div className='Game'>
			<div className='info'>
				Pontos: <span className='score'>{score || 'nada ainda'}</span>
				<br />
				Dica: <span className='hint'>{hint}</span>
			</div>
			<div className='word'>
				{word.map((letter, index) => (
					<div className='box' key={index}>
						{contains.includes(letter) && letter}
					</div>
				))}
			</div>
			<form onSubmit={handleGuess}>
				<input type='text' name='guess' placeholder='?' maxLength={1} autoFocus />
				<button type='submit'>Chutar</button>
			</form>
			<div className='info'>
				Tentativas restantes: <span className='attempts'>{attempts}</span>
				<br />
				Letras já utilizadas: <span className='guessed'>{guessed || 'nenhuma'}</span>
			</div>
		</div>
	);
};

export default GameScreen;
