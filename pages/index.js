import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@nextui-org/react'
import { baseURL, fetchAPI } from '../utils/fetchAPI'
import Property from '../components/Property'

export default function Home({ propertiesForSale, propertiesForRent }) {
    return (
        <section className='flex flex-col items-center p-10'>
            <section className=' grid grid-cols-5 gap-5 mb-5'>
                {propertiesForSale.map((property) => (
                    <Property property={property} key={property.id} />
                ))}
            </section>
            <section className='grid grid-cols-5 gap-5 '>
                {propertiesForRent.map((property) => (
                    <Property property={property} key={property.id} />
                ))}
            </section>
        </section>
    )
}

export const getStaticProps = async () => {
    const propertyForSale = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
    const propertyForRent = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
    return {
        props: {
            propertiesForSale: propertyForSale?.hits,
            propertiesForRent: propertyForRent?.hits,
        },
    }
}
