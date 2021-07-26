import React from 'react'
var locale = require('../locales/ru_Ru.json')

const Navbar = () =>{
    return(
      <nav className='nav'>
        <div><a className='nav_element'>{locale.My_page}</a></div>
        <div><a className='nav_element'>{locale.Courses}</a></div>
        <div><a className='nav_element'>{locale.Messages}</a></div>
        <div><a className='nav_element'>{locale.News}</a></div>
    </nav>
    )
}
export default Navbar