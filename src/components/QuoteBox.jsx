import React from 'react'
import QuoteContent from './QuoteContent'

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {

  const colorObj = {
    color: randomColor
  }

  const backgroundObj = {
    backgroundColor: randomColor
  }

  return (
    <article style={colorObj} className='card'>
      <QuoteContent
        randomQuote={randomQuote}
      />
      <button
        style={backgroundObj}
        className='card__btn'
        onClick={getRandomAll}
      >&#62;</button>
    </article>
  )
}

export default QuoteBox