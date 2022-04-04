import * as S from "./styles";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export function ButtonLink({ to, children }: ButtonProps) {
  return <S.ButtonLink to={to}>{children}</S.ButtonLink>;
}
