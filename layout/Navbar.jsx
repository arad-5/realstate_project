import { useState, useEffect } from 'react'
import Link from 'next/link'
import { React } from '@nextui-org/react'
import {SiEmirates} from 'react-icons/si'
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
                        <div className='absolute flex left-1/2 items-center -translate-x-1/2 cursor-pointer font-hanson leading-3'>
                        <SiEmirates className='text-3xl' /> Arad <br /> realstate
                        </div>
                    </Link>
                    <DarkmodeSwitch />
                </div>
                <NavMenu />
            </div>
        </nav>
    )
}

export default Navbar
