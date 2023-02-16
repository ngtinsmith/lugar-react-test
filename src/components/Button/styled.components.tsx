import styled from "styled-components";
import { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  padding: 1.125rem 1.5rem;
  height: 53px;
  border: 1px solid #1e3240;
  background-color: ${(props) =>
    props.kind === "primary" ? "#1E3240" : "transparent"};
  color: ${(props) => (props.kind === "primary" ? "#ffffff" : "#1E3240")};
`;
