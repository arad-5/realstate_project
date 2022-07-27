import Filters from '../../components/pages/search/index/Filters'
import RecommendationProperties from '../../components/pageSections/search/RecommendationProperties'
import { fetchAPI, baseURL } from '../../utils/fetchAPI'

const Index = ({ reconmmendation }) => {
    return (
        <div className='min-h-[700px] justify-center space-y-5 py-32 lg:flex lg:max-h-screen lg:space-x-2 lg:space-y-0'>
            <section className='mx-auto flex w-full max-w-2xl justify-center overflow-auto rounded-2xl border dark:border-zinc-800 lg:mx-0'>
                <Filters />
            </section>
            <section className='overflow-y-auto rounded-2xl border dark:border-zinc-800'>
                <RecommendationProperties properties={reconmmendation} />
            </section>
        </div>
    )
}

export default Index
export const getStaticProps = async () => {
    const { hits: reconmmendation } = await fetchAPI(
        `${baseURL}/properties/list?locationExternalIDs=5002%2C6020&hitsPerPage=2&page=0&lang=en&sort=city-level-score&rentFrequency=monthly`
    )
    return {
        props: {
            reconmmendation,
        },
        revalidate: 86400,
    }
}
