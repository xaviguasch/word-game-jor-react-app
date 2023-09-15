import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  const checkGuessResult = guess && answer && checkGuess(guess.value, answer)

  console.log(checkGuessResult)
  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span
          className={`cell ${checkGuessResult && checkGuessResult[num].status}`}
          key={num}
        >
          {guess ? guess.value[num] : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
