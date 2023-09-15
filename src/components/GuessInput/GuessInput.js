import React from 'react'

function GuessInput({ onAddNewGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onAddNewGuess({ id: crypto.randomUUID(), value: tentativeGuess })

    setTentativeGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        type='text'
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
      />
    </form>
  )
}

export default GuessInput
