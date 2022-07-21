import { useSelectedFiltersSlug } from '../../../../context/search/SelectedFiltersSlugProvider';
import { useFilters } from '../../../../context/search/FiltersProvider';

const MinMaxForm = ({ filterIndex }) => {
    const { filters } = useFilters();
    const { setSelectedFiltersSlug } = useSelectedFiltersSlug();
    const filter = filters[filterIndex];

    return (
        <form
            className='relative flex w-full items-center sm:space-y-0 '
            onChange={(e) => {
                e.target.dataset?.minimum
                    ? setSelectedFiltersSlug((curr) => ({
                          ...curr,
                          [filter.slugs.minimum]: e.target.value,
                      }))
                    : setSelectedFiltersSlug((curr) => ({
                          ...curr,
                          [filter.slugs.maximum]: e.target.value,
                      }));
            }}
        >
            <div className='relative mr-1 h-full '>
                <input
                    placeholder='minimum'
                    type='number'
                    data-minimum
                    className='h-full w-full cursor-pointer rounded-xl border bg-transparent py-2 text-base placeholder:text-center dark:border-zinc-800 pl-2'
                    min={0}
                ></input>
            </div>
            <div className='relative h-full'>
                <input
                    placeholder='maximum'
                    type='number'
                    data-maximum
                    min={0}
                    className='maximum h-full w-full cursor-pointer rounded-xl border bg-transparent py-2 text-base placeholder:text-center dark:border-zinc-800 pl-2'
                ></input>
            </div>
        </form>
    );
};

export default MinMaxForm;
