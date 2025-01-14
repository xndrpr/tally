import styled from "@emotion/styled";

export const DetailModalSC = styled.div<{ $image: string }>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 24px;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        content: "";
        background: rgb(0 0 0 / 20%);
        background-image: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)),
            url(${({ $image }) => $image});
        filter: blur(8px);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin: 16px;
    cursor: pointer;
    background: #222224;
    border: none;
    border-radius: 50%;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
`;

export const Poster = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
`;

export const Overview = styled.p`
    max-width: calc(100%);
    margin: 16px;
    margin-top: 16px;
    font-size: 16px;
    color: #6c6c6c;
    text-align: justify;
    white-space: pre-wrap;
`;
