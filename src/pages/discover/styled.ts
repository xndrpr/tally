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
    background-image: linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),
        url(${({ $image }) => $image});
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

export const MovieYear = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    margin: 8px;
    color: #ffffff80;
`;

export const MovieRating = styled.span<{ $percent: number }>`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    margin: 8px;
    font-size: 10px;
    color: #fff;
    border: 2px solid
        ${props => {
            if (props.$percent < 50) {
                return "#f44336";
            } else if (props.$percent < 80) {
                return "#ff9800";
            } else {
                return "#4caf50";
            }
        }};
    border-radius: 50%;
`;

export const MovieCardSkeleton = styled(Skeleton)`
    width: 220px;
    height: 120px;
`;
