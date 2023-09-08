import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess/Guess'
import { range } from '../../utils'

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={guesses[num]} />
      ))}
    </div>
  )
}

export default GuessResults
