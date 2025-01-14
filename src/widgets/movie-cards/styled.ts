import styled from "@emotion/styled";

export const MovieCards = styled.div`
    display: flex;
    gap: 20px;
    min-height: 120px;
    padding-bottom: 6px;
    overflow-x: scroll;

    @media (pointer: none), (pointer: coarse) {
        padding: 0;
    }
`;
