"use client";

import { usePathname } from "next/navigation";
import CategorySelect from "@/components/CategorySelect/CategorySelect";
import SortSelect from "@/components/SortSelect/SortSelect";
import { StylesLayout } from "@/app/layout.styled";

export default function Filters() {
  const pathname = usePathname();

  // Não exibe os selects na página /products
  if (pathname.startsWith("/product/")) return null;

  return (
    <StylesLayout>
      <div className="content-section">
        <CategorySelect />
        <SortSelect />
      </div>
    </StylesLayout>
  );
}
