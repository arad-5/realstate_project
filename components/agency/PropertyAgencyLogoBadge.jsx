import { MdVerified } from 'react-icons/md'
import Image from 'next/image'

const PropertyAgencyLogoBadge = ({ agency, isVerified }) => {
    return (
        <div className='property-badge flex items-center rounded-full border px-2 py-1 transition duration-1000 dark:border-[#404040]'>
            <Image
                src={agency?.logo?.url}
                width='30'
                height='30'
                alt={agency?.name}
                className='block rounded-full bg-white object-contain object-left'
                loading={'lazy'}
            />
            {isVerified && <MdVerified className='ml-2 text-xl text-green-400' />}
        </div>
    )
}

export default PropertyAgencyLogoBadge
