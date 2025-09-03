import React from 'react'
import { StylesFooter } from './Footer.styled'

function Footer() {
  return (
   <StylesFooter>
    <div className="content-section">
        <h1>Principais Categorias</h1>
        <div className="categories">
            <div>
                <p><strong>Eletrônicos</strong></p>
                <p>4 produtos</p>
            </div>
            
            <div>
                <p><strong>Roupas e Calçados</strong></p>
                <p>4 produtos</p>
            </div>
            <div>
                <p><strong>Casa e Decoração</strong></p>
                <p>3 produtos</p>
            </div>
            <div>
                <p><strong>Livros</strong></p>
                <p>3 produtos</p>
            </div>
            <div>
                <p><strong>Esporte e Lazer</strong></p>
                <p>3 produtos</p>
            </div>
        </div>
    </div>
   </StylesFooter>
  )
}

export default Footer