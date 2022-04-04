import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  name: string;
  labelText: string;
  placeholder: string;
  value: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  name,
  type,
  labelText,
  placeholder,
  value,
  handleOnChange,
}: InputProps) {
  return (
    <S.InputContainer>
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        name={name}
        onChange={handleOnChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </S.InputContainer>
  );
}
