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
            <div className='property-card relative z-10 cursor-pointer rounded-xl bg-white p-3 transition dark:bg-[#202020] sm:mt-20 sm:rounded-2xl sm:shadow-lg sm:hover:-translate-y-3 sm:hover:shadow-xl'>
                <div className='flex justify-between sm:block'>
                    <div className='property-card-image relative bg-zinc-500 dark:bg-zinc-800 mb-3 h-28 w-1/2 rounded-2xl transition sm:-mt-20 sm:h-48 sm:w-full'>
                        {coverPhoto && (
                            <Image src={coverPhoto.url} placeholder={'blur'} blurDataURL={placeholdeImage} alt={title} className='h-full w-full rounded-xl object-cover sm:rounded-2xl' layout='fill' quality={1}/>
                        )}
                    </div>
                    <div className='relative h-12 w-1/2 overflow-hidden sm:w-full'>
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
                        <Badge className='property-badge transition-shadow duration-200'>
                            <FaBed className='mr-2' />
                            {rooms}
                        </Badge>
                        <Badge className='property-badge duration-300'>
                            <FaBath className='mr-2' />
                            {baths}
                        </Badge>
                    </div>
                </div>
                <div className='text-md flex items-center justify-between overflow-hidden border-t pt-2 dark:border-[#404040]'>
                    <div className='flex'>
                        <div className='property-badge mr-2 rounded-full border px-2 py-1 transition-shadow dark:border-[#404040]'>
                            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} AED
                        </div>
                        <Badge
                            className={`property-badge property-purpose-badge left-6 top-6 border-0  transition duration-700 sm:absolute sm:-mt-20 ${
                                purpose === 'for-sale' ? 'bg-red-600' : 'bg-yellow-500'
                            } `}
                        >
                            <b className='text-white'>{purpose === 'for-sale' ? 'SALE' : 'RENT'}</b>
                        </Badge>
                    </div>
                    <PropertyAgencyLogoBadge agency={agency} isVerified={isVerified} />
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard
