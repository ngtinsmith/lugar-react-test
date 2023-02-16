import styled from "styled-components";

export const Container = styled.div`
    background: #afd4e2;
    margin-top: 104px;
`;

export const Greetings = styled.h1`
    font-size: 90px;
    font-weight: 700;
    lineheight: 1.2rem;
    text-align: left;
    max-width: 600px;
    margin: 0;
`;

export const HeroSubtitle = styled.p`
    font-size: 1.125rem;
    text-align: left;
`;

export const HeroCTAs = styled.div`
    display: flex;
    margin-top: 32px;

    > :not(:last-child) {
        margin-right: 30px;
    }
`;
