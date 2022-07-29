import { useEffect, useRef, useState } from 'react';
import { gameData } from '../data/gameData';
import './GameScreen.css';

const GameScreen = ({ nextScene, score, setScore }) => {
	const getData = () => {
		const getRandom = (list) => list[Math.floor(list.length * Math.random())];

		const hints = Object.keys(gameData);
		const hint = getRandom(hints);

		const hintWords = gameData[hint];
		const word = getRandom(hintWords);

		return { hint, word };
	};

	const submitButton = useRef();

	const [hint, setHint] = useState('');
	const [word, setWord] = useState([]);
	const [attempts, setAttempts] = useState(3);
	const [guesses, setGuesses] = useState([]);
	const [contains, setContains] = useState([]);

	const [guessedLetter, setGuessedLetter] = useState('');

	useEffect(() => {
		if (attempts === 0) {
			nextScene();
		}
	});

	if (word.length === contains.length && score !== 0) {
		setScore(score + 100);
		setHint('');
		setAttempts(3);
		setGuesses([]);
		setContains([]);
	}

	if (hint === '') {
		const data = getData();

		setHint(data.hint);
		setWord(data.word.split(''));
	}

	const handleInput = (e) => {
		const key = e.key;

		if (key === 'Enter') {
			submitButton.current.click();
		} else {
			setGuessedLetter(/^[A-Za-z]{1}$/.test(key) ? key.toLowerCase() : '');
		}
	};

	const handleGuess = (e) => {
		e.preventDefault();

		if (guessedLetter !== '' && !guesses.includes(guessedLetter)) {
			setGuesses([...guesses, guessedLetter]);

			const compareLetters = word.filter((letter) => letter === guessedLetter);

			if (compareLetters.length > 0) {
				setScore(score + compareLetters.length * 10);
				setContains([...contains, ...compareLetters]);
			} else {
				setAttempts(attempts - 1);
			}
		}

		setGuessedLetter('');
	};

	const printLetters = () => {
		return word.map((letter, index) => (
			<div className='box' key={index}>
				{contains.includes(letter) && letter}
			</div>
		));
	};

	const printGuesses = () => {
		if (guesses.length) {
			return guesses.map((letter, index) => {
				if (index !== 0) {
					letter = `, ${letter}`;
				}

				return letter;
			});
		}

		return 'nenhuma';
	};

	useEffect(() => {
		document.addEventListener('keydown', handleInput);
		return () => document.removeEventListener('keydown', handleInput);
	});

	return (
		<div className='Game'>
			<div className='info'>
				Pontos: <span className='score'>{score || 'nada ainda'}</span>
				<br />
				Dica: <span className='hint'>{hint}</span>
			</div>
			<div className='word'>{printLetters()}</div>
			<form onSubmit={handleGuess}>
				<input
					type='text'
					name='guess'
					placeholder='?'
					maxLength={1}
					value={guessedLetter}
					onKeyDown={handleInput}
					readOnly
				/>
				<button type='submit' ref={submitButton}>
					Chutar
				</button>
			</form>
			<div className='info'>
				Tentativas restantes: <span className='attempts'>{attempts}</span>
				<br />
				Letras já utilizadas: <span className='guesses'>{printGuesses()}</span>
			</div>
		</div>
	);
};

export default GameScreen;
