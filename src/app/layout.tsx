import Header from "@/components/Header/Header";
import "./globals.css";
// import { StylesLayout } from "./layout.styled";
import StyledComponentsRegistry from "../lib/registry";
import Filters from "@/components/Filters/Filters";
import { url } from "inspector";
import { SearchProvider } from "@/context/searchContext";
import { CartProvider } from "@/context/useContext";
// import { CartProvider } from "../context/useContext";

// Configurando o metadata do site.
export const metadata = {
  title: "InsanyShop 🛒 | E-commerce",
  description:
    "InsanyShop - E-commerce de produtos variados como eletrônicos, roupas e móveis. Site rápido, seguro e fácil de usar.",
  icons: {
    icon: "/shop2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <SearchProvider>
            <CartProvider>
              <Header />

              <Filters />

              {children}
            </CartProvider>
          </SearchProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
