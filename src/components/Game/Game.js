import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner/LostBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  const addNewGuessHandler = (newGuess) => {
    const nextGuesses = [...guesses, newGuess]
    setGuesses(nextGuesses)

    if (newGuess.value.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      {guesses && (
        <GuessResults guesses={guesses} answer={answer} numOfGuesses={guesses.length} />
      )}
      <GuessInput onAddNewGuess={addNewGuessHandler} gameStatus={gameStatus} />

      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}

      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
