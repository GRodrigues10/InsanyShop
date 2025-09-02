import React from 'react'
import { StylesHeader } from './Header.styled'

function Header() {
  return (
    <StylesHeader>
        <h1>InsanyShop</h1>
        <div className="header-actions-desktop">
            <input type="text" />
            <button className="cart-button">🛒</button>
        </div>
        <div className="header-actions-mobile">
            <button>☰</button>
        </div>
       
    </StylesHeader>
  )
}

export default Header