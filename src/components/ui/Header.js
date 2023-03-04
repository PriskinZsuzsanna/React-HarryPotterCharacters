import React from 'react'
import logo from '../../img/harryPotter.jpg'

const Header = ({query, setQueryValue}) => {

  return (
    <header className='center'>
      <img src={logo} alt='' />
      <input type="search" value={query} onChange={setQueryValue} placeholder="Find your favourite character"/>
    </header >
  )
}

export default Header
