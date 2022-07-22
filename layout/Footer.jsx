import Image from 'next/image'
import Link from 'next/link'
import { copyrightImage } from '../public/images/copyright_image.webp'
import {FiChevronRight} from 'react-icons/fi'

const Footer = () => {
    
    return (
        <footer className='container mx-auto flex items-center justify-center space-x-2 py-10 font-hanson sm:px-10'>
            <Link href='https://arad.vercel.app/' passHref>
                <div className='flex items-center space-x-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors rounded-full p-4'>
                    <div className='relative h-12 w-12'>
                        <Image src='/images/copyright_image.webp' layout='fill' alt='footer profile image' className='rounded-full object-cover' />
                    </div>
                    <div className='leading-4'>
                        written with ❤️
                        <br /> by Arad Taghikhani
                    </div>
                    <FiChevronRight className='text-2xl text-blue-500'/>
                </div>
            </Link>
        </footer>
    )
}

export default Footer
