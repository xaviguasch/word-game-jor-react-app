import React from 'react'
import { range } from '../../utils'

function Guess({ guess }) {
  console.log(guess)
  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span className='cell' key={num}>
          {guess ? guess.value[num] : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
