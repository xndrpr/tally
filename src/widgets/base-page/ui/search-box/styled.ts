import styled from "@emotion/styled";
import SearchIcon from "@assets/icons/search.svg?react";

export const SearchBoxSC = styled.div`
    position: relative;
    height: 30px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 30px;
    padding: 16px;
    color: #fff;
    background: #000;
    border: none;
    border-radius: 8px;
    outline: none;

    &::placeholder {
        color: rgb(255 255 255 / 40%);
    }
`;

export const SearchInputIcon = styled(SearchIcon)`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
`;
