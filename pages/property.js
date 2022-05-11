import { fetchAPI } from '../utils/fetchAPI';

import Image from 'next/image';
import PaginationSwiper from '../components/PaginationSwiper';

const property = ({ propertyDetail }) => {
    console.log(propertyDetail);
    const { title, photos, active } = propertyDetail;
    return (
        <section className='h-screen pt-20'>
            <div className='grid-cols-2 gap-5 md:grid'>
                <div>
                    <div className='rounded-2xl h-96'>
                        {/* <PaginationSwiper images={photos} alt={title} /> */}
                    </div>
                    <div className='flex justify-between'>
                        {active && (
                            <span className='border px-2 bg-green-800 text-green-300 rounded-full py-1'>active</span>
                        )}
                    </div>
                </div>
                <div className='border'></div>
            </div>
        </section>
    );
};

export default property;

export const getServerSideProps = async ({ query }) => {
    const propertyDetail = await fetchAPI(
        `https://bayut.p.rapidapi.com/properties/detail?externalID=${query.id}`
    );
    return {
        props: {
            propertyDetail,
        },
    };
};
