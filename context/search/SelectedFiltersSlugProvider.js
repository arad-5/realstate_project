import { createContext, useContext, useState, useEffect } from 'react';

const SelectedFiltersSlugContext = createContext();
import { useRouter } from 'next/router';

const SelectedFiltersSlugProvider = ({ children }) => {
    const [selectedFiltersSlug, setSelectedFiltersSlug] = useState({});
    const [searchSlug, setSearchSlug] = useState('');
    useEffect(() => {
        setSearchSlug(
            Object.keys(selectedFiltersSlug)
                .map((key) =>
                    selectedFiltersSlug[key] !== ''
                        ? `${key}=${selectedFiltersSlug[key]}`
                        : ''
                )
                .join('&')
        );
    }, [selectedFiltersSlug]);


    const {pathname , replace: routeReplace } = useRouter()
    useEffect(() => {
        console.log(searchSlug);
        routeReplace(`${pathname}?${searchSlug}`)
    }, [searchSlug]);

    return (
        <SelectedFiltersSlugContext.Provider
            value={{ selectedFiltersSlug, setSelectedFiltersSlug, searchSlug }}
        >
            {children}
        </SelectedFiltersSlugContext.Provider>
    );
};

export default SelectedFiltersSlugProvider;

export const useSelectedFiltersSlug = () =>
    useContext(SelectedFiltersSlugContext);