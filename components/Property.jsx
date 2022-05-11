import Link from 'next/link';
import Image from 'next/image';
import { User } from '@nextui-org/react';

import { FaBed, FaBath } from 'react-icons/fa';
import { MdCalendarViewMonth, MdVerified } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Property = ({
    property: {
        coverPhoto,
        price,
        rooms,
        title,
        baths,
        area,
        agency,
        isVerified,
        externalID,
        location,
    },
}) => {
    return (
        <Link href={`/property/${externalID}`} passHref>
            <div className='property-card z-10 cursor-pointer rounded-xl border bg-white p-3 transition dark:border-[#404040] dark:bg-[#202020] sm:mt-20 sm:flex-col sm:rounded-2xl sm:shadow-lg sm:hover:-translate-y-3 sm:hover:shadow-xl'>
                <div className='flex justify-between sm:block'>
                    <div className='property-card-image relative mb-3 h-28 w-1/3 rounded-2xl transition sm:-mt-20 sm:h-48 sm:w-full'>
                        {coverPhoto && (
                            <Image
                                src={coverPhoto.url}
                                layout='fill'
                                alt={title}
                                className='block rounded-md object-cover sm:rounded-2xl'
                            />
                        )}
                    </div>
                    <div className='relative my-1 ml-4 w-2/3 overflow-auto sm:ml-0 sm:h-24 sm:w-full'>
                        <h2>{title.slice(0, 50)}</h2>
                        <div className='mt-2 flex items-start'>
                            <IoLocationSharp className='mt-1 text-xl text-blue-600' />
                            <span>{`${location[2].name}`}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='space-x-2 space-y-1 text-gray-600 dark:text-gray-300'>
                        <span className='inline-flex items-center rounded-full border px-3 py-1 dark:border-[#404040]'>
                            <MdCalendarViewMonth className='mr-2' />
                            {Math.round(area)} m<sup>2</sup>
                        </span>
                        <span className='inline-flex items-center rounded-full border px-3 py-1 dark:border-[#404040]'>
                            <FaBed className='mr-2' />
                            {rooms}
                        </span>
                        <span className='inline-flex items-center rounded-full border px-3 py-1 dark:border-[#404040]'>
                            <FaBath className='mr-2' />
                            {baths}
                        </span>
                    </div>
                </div>
                <div className='text-md mt-2 flex items-center border-t pt-2 dark:border-[#404040]'>
                    <div className='rounded-full border px-2 py-1 dark:border-[#404040]'>
                        {price} AED
                    </div>
                    <div className='ml-auto flex items-center rounded-full border px-2 py-1 dark:border-[#404040]'>
                        <Image
                            src={agency?.logo?.url}
                            width='30'
                            height='30'
                            alt=''
                            className='block rounded-md object-contain object-left sm:rounded-none sm:rounded-b-md'
                        />
                        {isVerified && (
                            <MdVerified className='ml-2 text-2xl text-green-400' />
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Property;
