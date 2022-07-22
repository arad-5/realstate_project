import { MdVerified } from 'react-icons/md'
import Image from 'next/image'

const PropertyAgencyLogoBadge = ({ agency, isVerified }) => {
    return (
        <div className='flex items-center'>
            <Image
                src={agency?.logo?.url}
                width='30'
                height='30'
                alt={agency?.name}
                className='block rounded-full dark:bg-neutral-800 bg-neutral-200 object-contain object-left'
                loading={'lazy'}
            />
            {isVerified && <MdVerified className='ml-2 text-xl text-green-400' />}
        </div>
    )
}

export default PropertyAgencyLogoBadge
