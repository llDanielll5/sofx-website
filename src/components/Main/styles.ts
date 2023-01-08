import styled from "styled-components";
import { FaChevronCircleUp } from "react-icons/fa";

export const StyledMain = styled.div`
  overflow: hidden;
  width: 100%;
  @media screen and (max-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (max-width: 960px) {
    max-width: 960px;
  }
`;

export const ScrollUpIcon = styled(FaChevronCircleUp)``;
