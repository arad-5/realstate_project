import SecondaryButton from '../../buttons/SecondaryButton'
import { RiWhatsappFill } from 'react-icons/ri'
import { IoCloseOutline } from 'react-icons/io5'
import { IoIosCall } from 'react-icons/io'
import { useEffect } from 'react'
import Link from 'next/link'
import PrimaryButton from '../../buttons/PrimaryButton'

const ContactModal = ({ phoneNumber, contactName, isContactModalOpen, setIsContactModalOpen, agencyBadge }) => {
    useEffect(() => (document.body.style.overflowY = isContactModalOpen ? 'hidden' : 'auto'), [isContactModalOpen])

    return (
        <div
            className={`left fixed left-0 top-0 z-40 flex h-screen w-screen justify-center overflow-hidden bg-white/60 backdrop-blur-lg dark:bg-[#151515]/60 sm:items-center ${
                isContactModalOpen ? 'block' : 'hidden delay-300'
            }`}
        >
            <div
                className={`left-1/2 mt-auto w-full max-w-sm space-y-3 overflow-hidden rounded-t-2xl border border-zinc-100 bg-white transition-all duration-300 ease-in-out dark:border-zinc-800 dark:bg-[#141414] sm:m-auto sm:rounded-2xl ${
                    isContactModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
                <div className='z-30 flex items-start justify-between'>
                    <div className='flex items-center p-5 text-zinc-500 dark:text-zinc-300 '>
                        {agencyBadge}
                        <h4 className='ml-2'>{contactName}</h4>
                    </div>
                    <button className='float-right mb-2 p-5 text-3xl' onClick={() => setIsContactModalOpen(false)}>
                        <IoCloseOutline />
                    </button>
                </div>
                <div className='p-5'>
                    <div className='flex flex-col space-y-2'>
                        {phoneNumber?.whatsapp ? (
                            <Link href={`https://api.whatsapp.com/send?phone=${phoneNumber.whatsapp}&text=hi`} passHref>
                                <SecondaryButton className='relative flex w-full items-center justify-center py-4'>
                                    whatsapp
                                    <RiWhatsappFill className='absolute left-5 text-3xl text-green-500' />
                                </SecondaryButton>
                            </Link>
                        ) : (
                            ''
                        )}
                        {Object.keys(phoneNumber).map(key => {
                            return (
                                <Link href={`tel:${phoneNumber[key]}`} passHref key={key}>
                                    <SecondaryButton>{phoneNumber[key]}</SecondaryButton>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactModal
