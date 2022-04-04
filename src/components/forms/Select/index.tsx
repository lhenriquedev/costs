import { ChangeEvent, InputHTMLAttributes } from "react";
import * as S from "./styles";

interface SelectProps {
  name: string;
  labelText: string;
  value: string;
  options: {
    id: number;
    name: string;
  }[];
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id: number;
}

export function Select({
  name,
  labelText,
  options,
  value,
  handleOnChange,
}: SelectProps) {
  return (
    <S.SelectContainer>
      <label htmlFor={name}>{labelText}</label>
      <select name={name} id={name} defaultValue={"Select an option"}>
        <option value="Select an option" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </S.SelectContainer>
  );
}
