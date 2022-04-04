import { ProjectForm } from "../../components/layouts/ProjectForm";
import * as S from "./styles";

export function NewProject() {
  return (
    <S.Container>
      <S.Content>
        <h2>Create your project.</h2>
        <span>
          Create your project and after that, you can add your services.
        </span>
        <ProjectForm buttonText="Create project" />
      </S.Content>
    </S.Container>
  );
}
