import Image from 'next/image'
import Link from 'next/link'
import { baseURL, fetchAPI } from '../utils/fetchAPI'
import Intro from '../components/pageSections/index/Intro'
import Properties from '../components/property/Properties'
import PrimaryButton from '../components/buttons/PrimaryButton'

export default function Home({ propertiesForSale, propertiesForRent }) {
 
    return (
        <div className='space-y-16 -mt-16'>
            <Intro />
            <Properties title='🔥properties for sale' properties={propertiesForSale} />
            <section className='flex flex-col items-center space-y-2 py-10 md:flex-row md:space-x-4'>
                <div className='relative h-[25vh] md:h-[70vh] w-full flex-shrink-0 md:w-1/2 max-h-80'>
                    <Image src={'/images/rent-banner.jpg'} layout='fill' className='rounded-full object-cover' alt='properties for sale' priority/>
                </div>
                <div className='flex flex-col md:items-end justify-center space-y-2 rounded-2xl p-4 dark:border-neutral-700 md:border'>
                    <h1 className=' font-hanson tracking-wide sm:text-3xl'>You can find your ideal property in UAE here!</h1>
                    <Link href='/search' passHref>
                        <PrimaryButton>Search properties by filter</PrimaryButton>
                    </Link>
                </div>
            </section>
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
