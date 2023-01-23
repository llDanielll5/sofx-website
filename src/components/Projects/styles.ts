import Link from "next/link";
import styled from "styled-components";

export const ProjectContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  box-shadow: 0 5px 5px #ccc;
  padding: 16px 12px;
  border-radius: 25px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const ProjectsRow = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LinkStyled = styled(Link)`
  width: calc(100vw / 2 - 24px);
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
