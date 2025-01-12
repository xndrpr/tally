import styled from "@emotion/styled";

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const Links = styled.div`
    display: flex;
    gap: 12px;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    color: #000;
    text-decoration: none;
    background: #90cdff;
    border-radius: 4px;
    transition: background 0.1s ease-in-out;

    &:hover {
        background: #70bfff;
    }
`;
