import Link from 'next/link'
import Image from 'next/image'
import {User} from "@nextui-org/react"


const Property = ({ property: { coverPhoto, price, rentrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {
    coverPhoto && console.log(coverPhoto.url)
    // https://bayut-production.s3.eu-central-1.amazonaws.com/image/183960260/ab96a6f51e074a408a6020a84d614e62
    return (
        <Link href={`/property/${externalID}`} passHref>
            <div className=' overflow-hidden rounded-xl cursor-pointer h-96 border-b-4 border-blue-600'>
                <div className='h-60 relative mb-3'>{coverPhoto && <Image src={coverPhoto.url} layout='fill' alt={title} className='object-cover block rounded-b-md'/>}</div>
                <h2 className='pl-2'>{title.length > 30 ? <>{title.slice(0, 30)} <span className='text-slate-400'>...</span></> : title}</h2>
               <Image src={agency?.logo?.url} width="200" height="50" alt='' className='object-contain object-left rounded-md'/>
            </div>
        </Link>
    )
}

export default Property
