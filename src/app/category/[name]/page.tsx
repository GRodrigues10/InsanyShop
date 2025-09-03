
import { StylesCategory } from "./category.styled";


export default function Category({ params }: { params: { name: string } }) {
  return (
    <StylesCategory>

      <div className="content-section">
        <h1>{params.name}</h1>
        
      </div>
    </StylesCategory>
  );
}
