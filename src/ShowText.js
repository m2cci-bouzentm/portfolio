import React from 'react'

const ShowText = ({ showText }) => {

  if (showText === 0)
    return (
      <div key={showText} className="typed-out show-text1">Tech Enthusiast.</div>
    )
  else if (showText === 1)
    return (
      <div key={showText} className="typed-out show-text2">Full-Stack Developer.</div>
    )
  else
    return (
      <div key={showText} className="typed-out show-text3">Lifelong Learner.</div>
    )
}

export default ShowText