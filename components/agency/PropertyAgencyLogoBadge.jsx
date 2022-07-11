import { MdVerified } from 'react-icons/md';
import Image from 'next/image';

const PropertyAgencyLogoBadge = ({ agency, isVerified }) => {
    return (
        <div className='property-badge flex items-center rounded-full border px-2 py-1 transition duration-1000 dark:border-[#404040]'>
            <Image
                src={agency?.logo?.url}
                width='30'
                height='30'
                alt={agency.name}
                className='block rounded-md object-contain object-left sm:rounded-none sm:rounded-b-md'
            />
            {isVerified && (
                <MdVerified className='ml-2 text-2xl text-green-400' />
            )}
        </div>
    );
};

export default PropertyAgencyLogoBadge;
