import { StylesSpinner } from "./Spinner.styled";

// Componente de loading da página Insany.
interface SpinnerProps {
  fullScreen?: boolean;
}

export default function Spinner({ fullScreen }: SpinnerProps) {
  return (
    <StylesSpinner fullScreen={fullScreen}>
      <div className="circle" />
    </StylesSpinner>
  );
}
