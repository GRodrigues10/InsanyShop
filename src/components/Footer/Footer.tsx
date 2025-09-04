"use client";
import React from "react";
import { StylesFooter } from "./Footer.styled";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();

  //Criei um objeto para facilitar a implemetanção do código.
  const categories = [
    { name: "Eletrônicos", url: "eletronicos", count: 4 },
    { name: "Roupas e Calçados", url: "roupas", count: 4 },
    { name: "Casa e Decoração", url: "casa", count: 3 },
    { name: "Livros", url: "livros", count: 3 },
    { name: "Esporte e Lazer", url: "esportes", count: 3 },
  ];

// Função reponsável por navegar entre as seções.
  const handleNavigate = (url: string) => {
    router.push(`/category/${url}`);
  };

  return (
    <StylesFooter>
      <div className="content-section">
        <h1>Principais Categorias</h1>
        <div className="categories">
          {categories.map((category) => (
            <div
              key={category.url}
              onClick={() => handleNavigate(category.url)}
            >
              <p>
                <strong>{category.name}</strong>
              </p>
              <p>{category.count} produtos</p>
            </div>
          ))}
        </div>
      </div>
    </StylesFooter>
  );
}

export default Footer;
