import { useState } from 'react'
import Link from 'next/link'

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <button type='button' className={`relative h-full w-16 md:hidden sm:hidden`} onClick={() => setMenuOpen(curr => !curr)}>
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
            <div className={`absolute left-0 top-16 w-screen dark:bg-[#171717]/50 bg-white/50 backdrop-blur-lg pt-5 dark:border-neutral-700 overflow-hidden sm:static sm:h-full sm:w-auto sm:py-0 border-b sm:rounded-none rounded-b-3xl sm:border-0 transition-transform origin-top ${menuOpen ? 'scale-y-100' : 'scale-y-0'} sm:scale-100`}>
                <ul className='h-full sm:flex'>
                    <li className='flex h-full text-xl dark:text-white'>
                        <Link href='/search/results?purpose=for-sale&sort=date-desc' passHref>
                            <div className='flex w-full cursor-pointer items-center px-6 sm:py-0 py-4 hover:bg-zinc-100 dark:hover:bg-neutral-800'>buy</div>
                        </Link>
                    </li>
                    <li className='flex h-full border-y dark:border-neutral-700 sm:border-0 text-xl dark:text-white'>
                        <Link href='/search/results?purpose=for-rent&sort=date-desc' passHref>
                            <div className='flex w-full sm:py-0 py-4 cursor-pointer items-center px-6 hover:bg-zinc-100 dark:hover:bg-neutral-800'>rent</div>
                        </Link>
                    </li>
                    <li className='flex h-full text-xl dark:text-white'>
                        <Link href='/search' passHref className='border'>
                            <div className='flex w-full sm:py-0 py-4 cursor-pointer items-center px-6 hover:bg-zinc-100 dark:hover:bg-neutral-800'>search</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavMenu
