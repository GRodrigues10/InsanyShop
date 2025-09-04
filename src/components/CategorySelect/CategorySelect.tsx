"use client";

import { useRouter } from "next/navigation";
import { StylesCategorySelect } from "./CategorySelect.styled";

export default function CategorySelect() {
  const router = useRouter();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    
    if (category !== "categoria") {
      router.push(`/category/${category}`);
    }
    else{
      router.push('/')
    }
  };

  return (
    <StylesCategorySelect>
      <select onChange={handleCategoryChange} defaultValue="catergory">
        <option value="categoria">Selecione a categoria</option>
        <option value="eletronicos">Eletrônicos</option>
        <option value="roupas">Roupas e Calçados</option>
        <option value="casa">Casa e Decoração</option>
        <option value="livros">Livros</option>
        <option value="esportes">Esporte e Lazer</option>
      </select>
    </StylesCategorySelect>
  );
}
