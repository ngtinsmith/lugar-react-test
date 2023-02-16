import { FC, ReactNode } from "react";
import { StyledButton } from "./styled.components";

export interface ButtonProps {
    kind?: "primary" | "secondary";
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ kind, children }) => {
    return <StyledButton kind={kind}>{children}</StyledButton>;
};

export default Button;
