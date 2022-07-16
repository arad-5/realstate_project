import Link from 'next/link';
import PrimaryButton from '../buttons/PrimaryButton';
import Filter from './Filter';
import { useFilters } from '../../context/search/FiltersProvider';

const Filters = () => {
    const { filters, setFilters } = useFilters();

    return (
        <div className='relative flex w-full max-w-2xl flex-wrap items-start justify-between space-y-2 overflow-y-auto overflow-x-hidden rounded-2xl border p-3 dark:border-[#404040] sm:space-x-2 sm:space-y-2 sm:p-5'>
            <h1
                className='mx-auto rounded-full 
                border px-3 py-1 dark:border-0 dark:bg-[#202020]'
            >
                Search property
            </h1>
            <div className='grid w-full flex-wrap gap-3 md:grid-cols-2'>
                {filters.map((filter, index) => {
                    if (!filter.form) return;
                    return (
                        <Filter
                            key={filter.title + index}
                            filter={filter}
                            index={index}
                        />
                    );
                })}
            </div>
            <div className='fixed bottom-0 left-0 z-30 w-screen rounded-t-2xl bg-white/60 px-4 py-2 backdrop-blur-lg dark:bg-[#151515]/60 sm:sticky sm:-bottom-5 md:w-full'>
                <Link href={'/search'} passHref>
                    <PrimaryButton>Search</PrimaryButton>
                </Link>
            </div>
        </div>
    );
};
export default Filters;
