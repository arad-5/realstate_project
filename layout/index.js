import Footer from './Footer';
import Navbar from './Navbar';
const index = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className='container mx-auto px-2 sm:px-14'>{children}</main>
            <Footer />
        </>
    );
};

export default index;
