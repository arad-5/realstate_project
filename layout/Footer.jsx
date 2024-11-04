import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="container mx-auto flex items-center justify-center space-x-2 py-4 sm:px-10">
            <div>
                <div className="text-md flex cursor-pointer items-center space-x-2 rounded-full p-4 transition-colors hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-800">
                    <div className="leading-4">written by Arad Taghikhani</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
