import Link from 'next/link';
import PrimaryButton from '../buttons/PrimaryButton';
import { useEffect, useState } from 'react';
import Purpose from './Purpose';
import Price from './Price';
import Rooms from './Rooms';
import Furnished from './Furnished';
import Area from './Area';
import Sort from './Sort';

const SearchBanner = () => {
    const [filters, setFilters] = useState({
        purpose: 'for-sale',
        hitsPerPage: 25,
        sort: 'city-level-score',
    });

    useEffect(() => {
        console.log(filters);
    }, [filters]);
    
    return (
        <div className='flex w-full flex-wrap items-start justify-between space-y-2 rounded-2xl border p-3 dark:border-[#404040] sm:space-x-2 sm:space-y-2 sm:p-5'>
            <h1
                className='mx-auto rounded-full 
                border px-3 py-1 dark:border-0 dark:bg-[#202020]'
            >
                Search property
            </h1>
            <div className='grid w-full flex-wrap gap-3 md:grid-cols-2 lg:grid-cols-3'>
                <Purpose filters={filters} setFilters={setFilters} />
                <Price filters={filters} setFilters={setFilters} />
                <Rooms filters={filters} setFilters={setFilters} />
                <Area filters={filters} setFilters={setFilters} />
                <Furnished filters={filters} setFilters={setFilters} />
                <Sort filters={filters} setFilters={setFilters} />
            </div>
            <div className='w-fill'>
                <Link href={'/search'} passHref className='block w-full'>
                    <PrimaryButton additionaClassName='w-full block'>
                        Search
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    );
};

export default SearchBanner;
