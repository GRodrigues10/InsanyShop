import React from 'react'
import { StylesCartCards } from './ProductCard.styled'
import {Trash2 } from 'lucide-react'

function ProductCart() {
  return (
    <StylesCartCards>
         
          <div className="content-section">
            <div className="card-product">
              <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop" alt="Imagem do produto" />
              <div className="text">
                <div className="header">
                  <h2>Caneca de cerâmica Rústica</h2>
                  <p><Trash2/></p>
                </div>
                <p>
                  Aqui vem um texto descritivo do produto, esta caixa de texto
                  servirá apenas de exemplo para que simule algum texto que venha a
                  ser inserido nesse campo, descrevendo tal produto.
                </p>
                <div className="footer">
                  <select>
                    <option value="1">1</option>
                  </select>
                  <p><strong>R$ 32,00</strong></p>
                </div>
              </div>
            </div>
          </div>
  
   
    </StylesCartCards>
  )
}

export default ProductCart