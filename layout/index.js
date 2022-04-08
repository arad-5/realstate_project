import Footer from './Footer'
import Navbar from './Navbar'
const index = ({ children }) => {
    return (
        <main className='dark'>
            {/* <Navbar /> */}
            <div className='min-h-screen dark:bg-[#0a0a0a] dark:text-slate-50 px-14'>{children}</div>
            {/* <Footer /> */}
        </main>
    )
}

export default index
