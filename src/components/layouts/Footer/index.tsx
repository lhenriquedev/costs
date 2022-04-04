import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import * as S from "./styles";

export function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p>
          <span>Costs </span>
          &copy; 2022 - Henrique Marques
        </p>
      </S.Container>
    </S.Footer>
  );
}
