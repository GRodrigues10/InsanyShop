'use client'
import React from 'react'
import { StylesNotFound } from './not-found.styled'
import { useRouter } from 'next/navigation'
// Página de Erro 404.
function NotFound() {
  const router = useRouter();
  const backPage = () => {
    router.push('/');
  }
  return (
    <StylesNotFound>
      <div className="content-section">
        <h1>Página não encontrada!</h1>
        <p>Por favor, volte para a página inicial.</p>
        <button onClick={backPage}>Voltar</button>
      </div>
    </StylesNotFound>
  )
}

export default NotFound