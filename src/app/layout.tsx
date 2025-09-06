import Header from "@/components/Header/Header";
import "./globals.css";
import { StylesLayout } from "./layout.styled";
import StyledComponentsRegistry from "../lib/registry";
import Filters from "@/components/Filters/Filters";
// import { CartProvider } from "../context/useContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          

      
            <Header />

          <Filters />
            {children}
           
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
