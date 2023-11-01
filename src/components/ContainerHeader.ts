import styled from "styled-components";

export const ContainerHeader = styled.header`
  box-shadow: 8px 3px 20px 5px rgb(0, 0, 0, 0.55);
  width: 100%;
  height: 70px;
  display: flex;
  padding: 0 5rem;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  height: 45%;
  display: flex;
  flex: 2;

  .logo {
    cursor: pointer;
  }
`;

export const MenuList = styled.ul`
  height: 45%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex: 1;
`;

export const Menu = styled.li`
  height: 45%;
  display: flex;
  margin: 0 1rem;
  cursor: pointer;
`;

export const Search = styled.div`
  height: 45%;
  display: flex;
  justify-content: right;
  cursor: pointer;
  flex: 2;

  .search {
    cursor: pointer;
  }
`;
