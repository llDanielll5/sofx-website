import styled from "styled-components";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
} from "../../constants/cssVariables";
import Text from "../Text";

export const Container = styled.div`
  max-width: 1024px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
`;

export const Section = styled.div`
  padding: 4.5rem 0 2rem;
`;

export const SectionTitle = styled.div`
  margin-bottom: 1rem;
`;

export const Title = styled(Text)`
  color: ${COLORS.secondColor};
`;

export const Subtitle = styled(Text)`
  display: block;
  color: ${COLORS.secondColor};
  font-size: ${TYPOGRAPHY.small};
  @media screen and (min-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.small};
  }
`;
