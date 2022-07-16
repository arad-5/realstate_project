import { useState, createContext, useContext, useEffect } from 'react';

const SearchResultsContext = createContext();
const SearchResultsProvider = ({ children }) => {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {}, []);

    return (
        <SearchResultsContext.Provider value={{ searchResult }}>
            {children}
        </SearchResultsContext.Provider>
    );
};

export default SearchResultsProvider;
export const useSearchResults = () => useContext(SearchResultsContext);
