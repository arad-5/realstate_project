import { createContext, useState, useEffect, useContext } from 'react';

const FiltersContext = createContext();
const FiltersContextProvider = ({ children }) => {
    const [filters, setFilters] = useState([
        {
            title: 'purpose',
            form: 'radio',
            slug: 'purpose',
            options: [
                { label: 'sale', value: 'for-sale', color: '#DC2626' },
                { label: 'rent', value: 'for-rent', color: '#EA580C' },
            ],
        },
        {
            title: 'sort',
            form: 'select',
            slug: 'sort',
            options: [
                { label: 'price descending', value: 'price-desc' },
                { label: 'price ascending', value: 'price-asc' },
                { label: 'city level score', value: 'city-level-score' },
                { label: 'date descending', value: 'date-desc' },
                { label: 'verified score', value: 'verified-score' },
            ],
        },
        {
            title: 'price',
            subTitle: 'AED',
            form: 'minmax',
            slugs: {
                minimum: 'priceMin',
                maximum: 'priceMax',
            },
        },
        {
            title: 'rooms',
            form: 'minmax',
            slugs: {
                minimum: 'roomsMin',
                maximum: 'roomsMax',
            },
        },
        {
            title: 'area',
            subTitle: 'sqft',
            form: 'minmax',
            slugs: {
                minimum: 'areaMin',
                maximum: 'areaMax',
            },
        },
        {
            title: 'furnishing',
            form: 'select',
            slug: 'furnishingStatus',
            options: [
                { label: 'all', value: '' },
                { label: 'furnished', value: 'furnished' },
                { label: 'unfurnished', value: 'unfurnished' },
            ],
        },
        {
            title: 'video',
            form: 'checkbox',
            label: 'only with videos',
            slug: 'hasVideo',
        },
        {
            slug: 'hitsPerPage',
            value: 25,
        },
    ]);
    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
};

export default FiltersContextProvider;

export const useFilters = () => useContext(FiltersContext);
