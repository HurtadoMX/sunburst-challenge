import React, { useEffect } from 'react'
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {  

  return (
    <header className='header'>
      <ul className='navigation'>
        <li><a href="/home">Inicio</a></li>
        <li><a href="/home">Noticias</a></li>
        <li><a href="/home">Graficas</a></li>
        <li><a href="/">Salir</a></li>
      </ul>
      <div className="search">
        <input type="text" placeholder='Buscar grafica' />
       <FontAwesomeIcon icon={faSearch} className="fa-search" />
      </div>
      
    </header>
  )
}

export default Header