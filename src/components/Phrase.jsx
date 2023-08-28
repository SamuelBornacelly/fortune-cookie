

const Phrase = ( {quote} ) => {

  console.log(quote);

  return (
    <p className="container__phrase">{quote["phrase"]}</p>
  )
}

export default Phrase