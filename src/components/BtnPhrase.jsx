import getRandomElemArray from "../utils/getRandomElemArray"

const BtnPhrase = ( {setPhrase, phrases, setNumberBg} ) => {

  const handleRandomPhrase = () => {
    setPhrase(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }

  return (
    <button className="container__btn" onClick={handleRandomPhrase}>Other phrase</button>
  )
}

export default BtnPhrase