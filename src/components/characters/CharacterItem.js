import React from 'react'

const CharacterItem = ({ item }) => {
    return (
      item.image &&
      <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.actor}
            </li>
            <li>
              <strong>Patronus:</strong> {item.patronus}
            </li>
            <li>
              <strong>Ancestry:</strong> {item.ancestry}
            </li>
            <li>
              <strong>Wand:</strong> 
              <ul className='sublist'>
                  <li>Wood: {item.wand.wood} </li>
                  <li>Core: {item.wand.core} </li>
                  <li>Length: {item.wand.length} </li>
              </ul>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  }

export default CharacterItem

