import React from 'react'

const Child = ({list, onclick}) => {
  return (
    <div className='child'>
        <h2>Child Component</h2>
        <ul>
            {list.map(l=>{
            return(
                <li key={l.id}><span>{l.item}-{l.price}</span><button onClick={()=>onclick(l.id)}>Remove</button></li>
            )
        })}
        </ul>
    </div>
  )
}

export default Child