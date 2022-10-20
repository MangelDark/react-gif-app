import React from 'react'

export const GridItem = ({id,title,url}) => {
  return (
    <div className='card'>
        <img src={url}/>
        <p>{title}</p>
    </div>
  )
}
