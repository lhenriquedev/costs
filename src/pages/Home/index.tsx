import * as S from "./styles";

import savingsHero from "../../assets/images/savings.svg";
import { ButtonLink } from "../../components/layouts/ButtonLink";

export function Home() {
  return (
    <S.Container>
      <S.Content>
        <S.TextBox>
          <h1>
            Welcome to <br />
            <span>the Costs.</span>
          </h1>
          <p>
            Start to manage your projects right now with the best tool in the
            world.
          </p>
          <ButtonLink to="/newproject">Start a project</ButtonLink>
        </S.TextBox>
        <img src={savingsHero} alt="Costs" />
      </S.Content>
    </S.Container>
  );
}
