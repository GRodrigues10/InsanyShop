"use client";
import { useParams, useRouter } from "next/navigation";
import { StylesProduct } from "./product.styled";
import { ArrowLeftCircle, ShoppingCart, Undo2 } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/services/api";
import Spinner from "@/components/spinnerLoading/Spinner";
import { formatPrice } from "@/utils/format";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      fetchProductById(Number(id)).then((p) => setProduct(p));
    }
  }, [id]);

  if (!product) { return <Spinner fullScreen />  }

  return (
    <StylesProduct>
      <div className="content-section">
        <div className="details">
          <div className="details-img">
            <div className="btn">
              <span onClick={() => router.push("/")}>
                <Undo2 />
              </span>{" "}
              Voltar
            </div>
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details-text">
            <div className="part1">
              <p>{product.category}</p>
              <h1>{product.name}</h1>
              <h3>R$ {formatPrice(product.price)}</h3>
            </div>
            <div className="part2">
              <h3>Descrição</h3>
              <p>{product.description}</p>
            </div>
            <button>
              <span>
                <ShoppingCart />
              </span>{" "}
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </StylesProduct>
  );
}
