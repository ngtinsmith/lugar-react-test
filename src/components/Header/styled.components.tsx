import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLeft = styled.div``;

export const NavRight = styled.div`
    display: flex;
`;

export const Menu = styled.ul`
    display: flex;
    font-size: 0.875rem;
    color: #1e3240;
    margin: 0;
    padding-left: 0;
`;

export const MenuItem = styled.a`
    color: #1E3240;
    text-decoration: none;

    text-transform: uppercase;

    &:not(:last-child) {
        margin-right: 70px;
    }
`;

export const LogoImg = styled.img``;
