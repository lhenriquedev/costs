import { useEffect, useState } from "react";
import { Input } from "../../forms/Input";
import { Select } from "../../forms/Select";
import { SubmitButton } from "../../forms/SubmitButton";
import * as S from "./styles";

interface ProjectFormProps {
  buttonText: string;
}

export function ProjectForm({ buttonText }: ProjectFormProps) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <S.FormContainer>
      <Input
        name="name"
        type="text"
        labelText="Project name"
        placeholder="Enters a project name"
      />
      <Input
        name="budget"
        type="number"
        labelText="Project budget"
        placeholder="Enters a project budget"
      />
      <Select
        name="category_id"
        labelText="Project category"
        options={categories}
      />
      <SubmitButton buttonText={buttonText} />
    </S.FormContainer>
  );
}
