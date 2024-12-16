import React from 'react'

function Language({language,color}) {
  return (
    <div className='language'>
        <h2>{language}</h2>
        <h2>{color}</h2>
    </div>
  )
}

export default Language