import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'


function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setrandomQuote] = useState(firstQuote)
  const [randomColor, setrandomColor] = useState(firstColor)
  const backgroundObject = {
    backgroundColor: randomColor
  }
  
  const getRandomAll = () => {
    setrandomQuote(quotes[getIndexRandom(quotes)])
    setrandomColor(color[getIndexRandom(color)])
  }

  return (
    // doble llave por que la primera es por JS y la segunda por que es un objeto
    // <div style={{backgroundColor: randomColor}} className="App"></div>

    <div style={backgroundObject} className="App">
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
