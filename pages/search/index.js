import SearchBanner from '../../components/search/SearchBanner';
import { fetchAPI, baseURL } from '../../utils/fetchAPI';
const Index = () => {
    return (
        <section className='pt-20'>
            <SearchBanner />
        </section>
    );
};

export default Index;
