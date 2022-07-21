import Image from 'next/image'
import Link from 'next/dist/client/link'
import { baseURL, fetchAPI } from '../utils/fetchAPI'
import Intro from '../components/pageSections/index/Intro'
import Properties from '../components/property/Properties'

export default function Home({ propertiesForSale, propertiesForRent }) {
    console.log(propertiesForSale, propertiesForRent)
    return (
        <div className='space-y-16'>
            <Intro />
            <Properties title='🔥properties for sale' properties={propertiesForSale} />

            <div className='relative left-1/2 h-screen w-screen -translate-x-1/2'>
                <Image src={'/images/rent-banner.jpg'} layout='fill' className='rounded-full object-cover' alt='properties for sale' priority />
            </div>
            <Properties title='🔥properties for rent' properties={propertiesForRent} />
        </div>
    )
}

export const getStaticProps = async () => {
    const { hits: propertiesForSale } = await fetchAPI(
        `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&sort=city-level-score&hitsPerPage=8`
    )
    const { hits: propertiesForRent } = await fetchAPI(
        `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&sort=city-level-score&hitsPerPage=8`
    )
    return {
        props: {
            propertiesForSale: await propertiesForSale,
            propertiesForRent: await propertiesForRent,
        },
        revalidate: 86400,
    }
}
