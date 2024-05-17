import React from 'react'

const ShowText = ({ showText }) => {

  if (showText === 0)
    return (
      <div key={showText} className="typed-out show-text1">UI / UX Designer.</div>
    )
  else if (showText === 1)
    return (
      <div key={showText} className="typed-out show-text2">Graphic Designer. </div>
    )
  else
    return (
      <div key={showText} className="typed-out show-text3">Software Engineer.</div>
    )
}

export default ShowText