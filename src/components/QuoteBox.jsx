import React from 'react'

const quoteBox = ({msg,color,click}) => {
    console.log(msg, color)
    let stylebtn = {
        backgroundColor: color,
      }
  return (
    <div className='container'>
        <div className='cont'>
            <h2>&#8220;</h2>
           <p>{msg.quote} </p>
        </div>
        
        <div className='justend'>
          <p><b>Author: </b>{msg.author}</p>
          <button className='btn' onClick={click} style={stylebtn}>&#62;</button>
        </div>
      </div>
  )
}

export default quoteBox