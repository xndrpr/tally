import Skeleton from "react-loading-skeleton";
import styled from "@emotion/styled";

export const MovieCards = styled.div`
    display: flex;
    gap: 20px;
    min-height: 120px;
    overflow-x: scroll;
`;

export const MovieCard = styled.div<{ $image: string }>`
    --padding: 4px;

    position: relative;
    flex-shrink: 0;
    width: 220px;
    height: 120px;
    padding: 8px;
    margin: var(--padding);
    background-image: url(${({ $image }) => $image});
    background-position: center;
    background-size: cover;
    border-radius: 12px;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        padding: var(--padding);
        overflow: hidden;
        content: "";
        background-image: url(${({ $image }) => $image});
        filter: blur(4px);
        background-position: center;
        background-size: cover;
        border-radius: inherit;
        opacity: 0.5;
        transform: translate(calc(-1 * var(--padding)), calc(-1 * var(--padding)));
    }
`;

export const MovieTitle = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 80%;
    margin: 16px 8px;
    overflow: hidden;
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
`;

export const MovieCardSkeleton = styled(Skeleton)`
    width: 220px;
    height: 120px;
`;
