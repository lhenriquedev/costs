import * as S from "./styles";

interface ButtonProps {
  buttonText: string;
}

export function SubmitButton({ buttonText }: ButtonProps) {
  return (
    <div>
      <S.Button>{buttonText}</S.Button>
    </div>
  );
}
