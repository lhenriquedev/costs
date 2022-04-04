import { Link } from "react-router-dom";

import * as S from "./styles";

export function Navbar() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.SLink to="/">
          <h4>
            Costs<span>.</span>
          </h4>
        </S.SLink>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">My Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
          </ul>
        </nav>
      </S.Container>
    </S.Wrapper>
  );
}
