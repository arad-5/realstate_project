import { useState } from 'react';
import { useFilters } from '../../../../context/search/FiltersProvider';
import SecondaryButton from '../../../buttons/SecondaryButton';
import { BsCheck } from 'react-icons/bs';
import { useSelectedFiltersSlug } from '../../../../context/search/SelectedFiltersSlugProvider';

const CheckBoxForm = ({ filterIndex }) => {
    const { filters } = useFilters();
    const [checked, setChecked] = useState(false);
    const { setSelectedFiltersSlug } = useSelectedFiltersSlug();
    const filter = filters[filterIndex];

    return (
        <form
            className='w-full'
            onChange={(e) => {
                setChecked(e.target.checked);
                setSelectedFiltersSlug((curr) => ({
                    ...curr,
                    [filter.slug]: e.target.checked ? true : '',
                }));
            }}
        >
            <div
                className={`relative flex items-center justify-center space-x-2 rounded-xl border py-2 text-base ring-blue-500/50 transition-all duration-100 dark:border-zinc-700 ${
                    checked ? 'ring-1' : ''
                }`}
            >
                <label htmlFor={filter.title + 'checkInput'}>
                    {filter.label}
                </label>
                <input
                    type='checkbox'
                    id={filter.title + 'checkInput'}
                    className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
                />
                <div
                    className={`h-5 w-5 rounded-full border transition-all duration-100 dark:border-zinc-700 ${
                        checked ? 'bg-blue-500' : ''
                    }`}
                >
                    {checked ? <BsCheck className='text-lg text-white' /> : ''}
                </div>
            </div>
        </form>
    );
};

export default CheckBoxForm;
