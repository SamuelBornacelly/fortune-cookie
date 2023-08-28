
import { useState } from 'react';
import './App.css'
import BtnPhrase from './components/BtnPhrase';
import Phrase from './components/Phrase';
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray';

function App() {

  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1, 2, 3, 4])

  const [phrase, setPhrase] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)
  
  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }

  return (
    <div className='container' style = {bgStyle}>
      <h1 className='container__title'>Galleta de la fortuna</h1>
      <Phrase className='container__phrase' quote = {phrase} />
      <BtnPhrase className='container__btn'
        setPhrase = {setPhrase}
        phrases = {phrases}
        setNumberBg = {setNumberBg}
      />
    </div>
  )
}

export default App
