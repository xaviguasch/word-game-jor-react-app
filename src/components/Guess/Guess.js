import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'
import { useState } from 'react/cjs/react.production.min'

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell'

  return <span className={className}>{letter}</span>
}

function Guess({ guess, answer, numOfGuesses, gameStatusHandler }) {
  const result = guess && answer && checkGuess(guess.value, answer)

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  )
}

export default Guess
