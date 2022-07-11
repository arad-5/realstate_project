import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';
import { MdCalendarViewMonth, MdVerified } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

// components
import PropertyAgencyLogoBadge from '../agency/PropertyAgencyLogoBadge';

const PropertyCard = ({
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
        purpose,
    },
}) => {
    return (
        <Link href={`/property?id=${externalID}`} passHref>
            <div className='property-card relative z-10 cursor-pointer rounded-xl border bg-white p-3 transition dark:border-[#404040] dark:bg-[#202020] sm:mt-20 sm:flex-col sm:rounded-2xl sm:shadow-lg sm:hover:-translate-y-3 sm:hover:shadow-xl'>
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
                        <span className='property-badge duration-100 inline-flex items-center rounded-full border px-3 py-1 transition-shadow dark:border-[#404040]'>
                            <MdCalendarViewMonth className='mr-2' />
                            {Math.round(area)} m<sup>2</sup>
                        </span>
                        <span className='property-badge duration-300 inline-flex items-center rounded-full border px-3 py-1 transition-shadow dark:border-[#404040]'>
                            <FaBed className='mr-2' />
                            {rooms}
                        </span>
                        <span className='property-badge duration-500 inline-flex items-center rounded-full border px-3 py-1 transition-shadow dark:border-[#404040]'>
                            <FaBath className='mr-2' />
                            {baths}
                        </span>
                    </div>
                </div>
                <div className='text-md mt-2 flex items-center justify-between border-t pt-2 dark:border-[#404040]'>
                    <div className='flex'>
                        <div className='property-badge mr-2 rounded-full border px-2 py-1 transition-shadow dark:border-[#404040]'>
                            {price} AED
                        </div>
                        <div
                            className={`property-badge property-purpose-badge left-6 top-6 rounded-full px-3 py-1 font-bold text-white transition duration-700 sm:-mt-20 ${
                                purpose === 'for-sale'
                                    ? 'bg-red-600 dark:bg-[#390000] dark:text-red-500'
                                    : 'bg-yellow-500 dark:bg-yellow-900 dark:text-yellow-500'
                            }  sm:absolute`}
                        >
                            {purpose === 'for-sale' ? 'SALE' : 'RENT'}
                        </div>
                    </div>
                    <PropertyAgencyLogoBadge
                        agency={agency}
                        isVerified={isVerified}
                    />
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
