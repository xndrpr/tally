import styled from "@emotion/styled";

export const NavigationBarSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding-top: 8px;
`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    width: 100%;
    height: 40px;
    padding: 4px;
    user-select: none;
    background: #161616;
    border-radius: 16px;
    -webkit-user-drag: none;
`;

export const Link = styled.a<{ $isActive: boolean }>`
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    padding: 5px 16px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background: ${({ $isActive }) => ($isActive ? "#0F0F0F" : "transparent")};
    border-radius: 16px;
    transition: background 0.1s ease-in-out;
`;
