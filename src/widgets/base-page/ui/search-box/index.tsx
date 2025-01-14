import { SearchBoxSC, SearchInput, SearchInputIcon } from "./styled";
import { useAtom } from "jotai";
import { searchInputAtom } from "@/shared/atoms/search-input.atom";

export const SearchBox = () => {
    const [inputValue, setInputValue] = useAtom(searchInputAtom);

    return (
        <SearchBoxSC>
            <SearchInput
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Search for a movie/tv show"
            />
            <SearchInputIcon />
        </SearchBoxSC>
    );
};
