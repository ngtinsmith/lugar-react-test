import styled from "styled-components";

export const Container = styled.div<{ background: string }>`
    background-color: #f3f3f3;
    background: ${(props) => props.background ? `url(${props.background})` : "none"};
    position: relative;
    min-height: 350px;
`;

export const DetailsWrapper = styled.div`
    width: 100%;
    padding: 0 30px;
    position: absolute;
    bottom: -40px;
    z-index: 1;
    height: 80px;
`

export const Details = styled.div`
    padding: 22px 1.25rem;
    text-align: left;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.04);
    height: 100%;
`;

export const PropertyName = styled.p`
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.2rem;
    color: #1e3240;
    margin-top: 0;
    margin-bottom: 6px;
`;

export const PropertyLocation = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 1.2;
    color: #1e3240;
    margin: 0;
`;
