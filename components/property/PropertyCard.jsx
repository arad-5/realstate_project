import Link from 'next/link'
import Image from 'next/image'
import { FaBed, FaBath } from 'react-icons/fa'
import { MdCalendarViewMonth, MdVerified } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { useEffect } from 'react'
import Badge from '../Badge'
import placeholdeImage from '../../public/images/rent-banner.jpg'
// components
import PropertyAgencyLogoBadge from '../agency/PropertyAgencyLogoBadge'

const PropertyCard = ({ property: { coverPhoto, price, rooms, title, baths, area, agency, isVerified, externalID, location, purpose } }) => {
    return (
        <Link href={`/property?id=${externalID}`} passHref>
            <div className='property-card relative z-10 cursor-pointer border-b p-3 py-6 transition dark:border-neutral-700 last:border-b-0 dark:bg-[#202020] sm:mt-20 sm:rounded-2xl sm:border-0 sm:shadow-lg sm:hover:-translate-y-3 sm:hover:shadow-xl'>
                <div className='flex justify-between sm:block'>
                    <div className='property-card-image relative mb-3 h-28 w-1/2 rounded-2xl bg-neutral-200 transition dark:bg-neutral-800 sm:-mt-20 sm:h-48 sm:w-full'>
                        {coverPhoto && (
                            <Image
                                src={coverPhoto.url}
                                alt={title}
                                className='h-full w-full rounded-xl object-cover sm:rounded-2xl'
                                layout='fill'
                                quality={1}
                            />
                        )}
                    </div>
                    <div className='relative h-14 w-1/2 overflow-hidden text-xl sm:w-full'>
                        <h2 className='px-2'>{title}</h2>
                    </div>
                </div>
                <div>
                    <div className='stems-start mt-2 flex h-6 w-full overflow-hidden leading-5'>
                        <IoLocationSharp className='h-5 w-5 flex-shrink-0 text-xl text-blue-600' />
                        {location
                            .slice(1)
                            .map(location => location.name)
                            .join(', ')}
                    </div>
                    <div className='my-2 space-x-2 duration-100'>
                        <Badge className='property-badge transition-shadow'>
                            <MdCalendarViewMonth className='mr-2' />
                            {Math.round(area)} m<sup>2</sup>
                        </Badge>
                        <Badge className='property-badge'>
                            <FaBed className='mr-2' />
                            {rooms}
                        </Badge>
                        <Badge className='property-badge'>
                            <FaBath className='mr-2' />
                            {baths}
                        </Badge>
                    </div>
                </div>
                <div className='text-md flex items-center justify-between overflow-hidden sm:border-t pt-2 dark:border-[#404040]'>
                    <div className='flex items-center'>
                        <Badge
                            className={`property-badge property-purpose-badge left-6 top-8 border-0 font-hanson transition duration-700 sm:absolute sm:-mt-20 ${
                                purpose === 'for-sale' ? 'bg-red-600' : 'bg-yellow-500'
                            } `}
                        >
                            <span className='tracking-wider text-white'>{purpose === 'for-sale' ? 'SALE' : 'RENT'}</span>
                        </Badge>
                        <div className='ml-2 font-hanson text-neutral-600 dark:text-neutral-200'>
                            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} AED
                        </div>
                    </div>
                    <PropertyAgencyLogoBadge agency={agency} isVerified={isVerified} />
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard
