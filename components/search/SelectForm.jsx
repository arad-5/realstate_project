import { useEffect } from 'react';
import { useFilters } from '../../context/search/FiltersProvider';

import { useSelectedFiltersSlug } from '../../context/search/SelectedFiltersSlugProvider';

const SelectForm = ({ filterIndex }) => {
    const { filters } = useFilters();
    const filter = filters[filterIndex];

    const { selectedFiltersSlug, setSelectedFiltersSlug } =
        useSelectedFiltersSlug();

    return (
        <form
            className='w-full cursor-pointer'
            onChange={(e) => {
                setSelectedFiltersSlug((curr) => ({
                    ...curr,
                    [filter.slug]: e.target.value,
                }));
            }}
        >
            <select className='flex w-full items-center justify-center rounded-xl border bg-transparent py-2 text-center text-base text-zinc-500 transition-all hover:bg-zinc-100 hover:shadow dark:border-zinc-500 dark:text-zinc-500 dark:hover:bg-zinc-800'>
                {filter.options.map((option) => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default SelectForm;
