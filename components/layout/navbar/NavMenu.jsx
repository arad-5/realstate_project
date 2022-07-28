import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    Router.events.on('routeChangeComplete', () => setMenuOpen(false))
    return (
        <>
            <button type='button' className={`relative h-full w-16 lg:hidden`} onClick={() => setMenuOpen(curr => !curr)}>
                <span
                    className={`absolute top-1/2 left-1/2 block h-[2px] w-7 -translate-x-1/2 bg-[#141414] transition-transform dark:bg-white ${
                        menuOpen ? 'translate-y-[0px] -rotate-45' : '-translate-y-[5px]'
                    }`}
                ></span>
                <span
                    className={`absolute bottom-2 top-1/2 left-1/2 block h-[2px] w-7 -translate-x-1/2 bg-[#141414] transition-transform dark:bg-white ${
                        menuOpen ? 'translate-y-[0px] rotate-45' : 'translate-y-[5px]'
                    }`}
                ></span>
            </button>
            <div
                className={`absolute left-0 top-16 z-50 w-screen origin-top overflow-hidden rounded-b-3xl border-b bg-white/50 pt-5 backdrop-blur-lg transition-transform dark:border-neutral-700 dark:bg-[#171717]/50 lg:static lg:h-full lg:w-auto lg:rounded-none lg:border-0 lg:py-0 ${
                    menuOpen ? 'scale-y-100' : 'scale-y-0'
                } lg:scale-100`}
            >
                <ul className='h-full font-hanson tracking-wider lg:flex'>
                    <li className='text-md flex h-full dark:text-white'>
                        <Link href='/search/results?purpose=for-sale&sort=date-desc' passHref>
                            <div className='flex w-full cursor-pointer items-center px-6 py-4 hover:bg-zinc-100 focus:bg-black dark:hover:bg-neutral-800 lg:py-0'>
                                buy
                            </div>
                        </Link>
                    </li>
                    <li className='text-md flex h-full border-y dark:border-neutral-700 dark:text-white lg:border-0'>
                        <Link href='/search/results?purpose=for-rent&sort=date-desc' passHref>
                            <div className='flex w-full cursor-pointer items-center py-4 px-6 hover:bg-zinc-100 focus:bg-black dark:hover:bg-neutral-800 lg:py-0'>
                                rent
                            </div>
                        </Link>
                    </li>
                    <li className='text-md flex h-full dark:text-white'>
                        <Link href='/search' passHref className='border'>
                            <div className='flex w-full cursor-pointer items-center py-4 px-6 hover:bg-zinc-100 focus:bg-black dark:hover:bg-neutral-800 lg:py-0'>
                                search
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavMenu
