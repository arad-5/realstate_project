import { useState, useEffect } from 'react'
import Link from 'next/link'
import { React } from '@nextui-org/react'

import { DarkmodeSwitch } from '.'
import { useRouter } from 'next/router'
import NavMenu from '../components/layout/navbar/NavMenu'

const Navbar = () => {
    const { pathname } = useRouter()

    const [toggleNavbar, setToggleNavbar] = useState()
    const scrollHandler = () => {
        if (window.pageYOffset > window.innerHeight / 3) {
            setToggleNavbar(true)
        } else {
            setToggleNavbar(false)
        }
    }
    useEffect(() => {
        if (pathname === '/') {
            scrollHandler()
            window.addEventListener('scroll', scrollHandler)
        } else {
            setToggleNavbar(true)
        }
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [pathname])

    return (
        <nav
            className={`fixed left-0 top-0 z-50 h-16 w-screen -translate-y-full border-b bg-white px-6 transition-transform dark:border-black dark:bg-[#171717] ${
                toggleNavbar && 'translate-y-0'
            }`}
        >
            <div className='container mx-auto flex h-full max-w-7xl items-center justify-between sm:px-14'>
                <div className='flex items-center'>
                    <Link href='/' passHref>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-full w-[3rem] cursor-pointer dark:text-white' viewBox='0 0 100 100'>
                            <path
                                fill='currentColor'
                                d='M61 44.6c0 5.9-5 10.8-11 10.8s-11-4.9-11-10.8v-5.4c0-5.9 5-10.8 11-10.8 3 0 5.8 1.2 7.8 3.2 2 1.9 3.3 4.6 3.3 7.6v5.4zm38.6-18.3c-.1-.3-.3-.6-.5-.9-1.4-2.8-3.1-5.4-5-7.8-.3-.4-.7-.9-1-1.3-2.1-2.6-5.4-4.1-8.7-4.1h-51c-6.1 0-11 4.9-11 10.8v32.4c0 5.9-5 10.8-11 10.8H5.5c-3 0-5.5 2.4-5.5 5.4 0 .8.2 1.5.4 2.1.1.3.3.6.5.9 1.4 2.8 3.1 5.4 5 7.8.3.4.7.9 1 1.3 2.1 2.6 5.4 4.1 8.7 4.1h17.8c6.1 0 11-4.9 11-10.8 0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4c0 3 1.2 5.7 3.3 7.6 2 2 4.7 3.2 7.8 3.2H72c6.1 0 11-4.9 11-10.8V44.6c0-5.9 5-10.8 11-10.8h.3c3 0 5.5-2.4 5.5-5.4.2-.8 0-1.5-.2-2.1z'
                            ></path>
                        </svg>
                    </Link>
                    <DarkmodeSwitch />
                </div>
                <NavMenu />
            </div>
        </nav>
    )
}

export default Navbar
