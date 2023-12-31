import { Link } from "react-router-dom";
import {
  ContainerHeader,
  Logo,
  MenuList,
  Menu,
  Search,
} from "./ContainerHeader.ts";

type Props = {
  page: string;
  home: () => void;
};

export const Header = ({ page, home }: Props) => {
  return (
    <div>
      <ContainerHeader>
        <Logo>
          <Link to={`${page}`} onClick={home}>
            <img src="images/logo.png" alt="logo" className="logo" />
          </Link>
        </Logo>
        <MenuList>
          <Menu>Filmes</Menu>
          <Menu>Séries</Menu>
          <Menu>Gênero</Menu>
        </MenuList>
        <Search>
          <img
            src="images/lupa.png"
            alt="search"
            className="search"
            title="Pesquisar"
          />
        </Search>
      </ContainerHeader>
    </div>
  );
};
