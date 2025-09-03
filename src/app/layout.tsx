import Header from "@/components/Header/Header";
import "./globals.css";
import { StylesLayout } from "./layout.styled";
import StyledComponentsRegistry from "../lib/registry"; // caminho correto para o seu registry

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
              <select>
                <option value="catergory">Selecione a categoria</option>
              </select>
              <select>
                <option value="order">Ordenar por</option>
              </select>
            </div>
          </StylesLayout>

          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
