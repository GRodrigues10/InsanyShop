import Header from "@/components/Header/Header";
import "./globals.css";
import { StylesLayout } from "./layout.styled";
import StyledComponentsRegistry from "../lib/registry"; // caminho correto para o seu registry
import CategorySelect from "@/components/CategorySelect/CategorySelect";
import SortSelect from "@/components/SortSelect/SortSelect";


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

          <StylesLayout>
            <div className="content-section">
             <CategorySelect/>
            <SortSelect/>
            </div>
          </StylesLayout>

          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
