import React from 'react'

const QuoteContent = ({randomQuote}) => {
  return (
    <div>
      <p className='card__quote'>{randomQuote.quote}</p>
      <h1 className='card__autor'>{randomQuote.author}</h1>
    </div>
  )
}

export default QuoteContent