import styled from "@emotion/styled";

export const Layout = styled.div`
    display: grid;
    grid-template-rows: 60px 50px 1fr;
    width: 100%;
    height: 100vh;
    padding: 16px;
    overflow: hidden;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 100vh;
    overflow: auto;
`;
