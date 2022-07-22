import { DarkmodeSwitch } from '../../../layout/index'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryButton from '../../buttons/PrimaryButton'
import SecondaryButton from '../../buttons/SecondaryButton'

const Intro = () => {
    return (
        <section>
            <div className='relative left-1/2  h-screen w-screen -translate-x-1/2'>
                <div className='relative right-0 top-0 -z-10 h-2/3 w-full sm:absolute sm:h-full md:w-4/6'>
                    <Image src={'/images/sale-banner.jpg'} layout='fill' className='object-cover' alt='properties for sale' priority />
                </div>
                <div className='relative z-50 -mt-[20vh] flex h-1/2 flex-col items-center justify-center rounded-tr-[20vh] bg-white after:absolute after:left-0 after:-top-[20vh] after:-z-10  after:h-[20vh] after:w-[20vh] after:rounded-bl-full after:shadow-[-100px_100px_0_100px_white] after:transition-colors dark:bg-neutral-900 after:dark:shadow-[-100px_100px_0_100px_#171717] sm:mt-0 sm:h-full sm:w-1/2 sm:rounded-tr-[15vw] after:sm:bottom-0 after:sm:top-auto after:sm:left-auto after:sm:-right-[15vw] after:sm:h-[15vw] after:sm:w-[15vw]'>
                    <div className='relative border'>
                        <div className='mb-5'>
                            <DarkmodeSwitch />
                        </div>
                        <div className='mb-4'>
                            <h1 className='mb-5 rounded-xl text-6xl font-semibold sm:text-[5rem] sm:leading-[4rem]'>
                                Arad <br /> realstate
                            </h1>
                            <h2 className='text-xl'>buy/rent realstate from uae</h2>
                        </div>
                        <div>
                            <div className='mb-3 flex space-x-4'>
                                <Link href='/search/results?purpose=for-rent&sort=date-desc' passHref>
                                    <SecondaryButton className='w-full'>Rent</SecondaryButton>
                                </Link>
                                <Link href='/search/results?purpose=for-sale&sort=date-desc' passHref>
                                    <SecondaryButton className='w-full'>Buy</SecondaryButton>
                                </Link>
                            </div>
                            <Link href='/search' passHref>
                                <PrimaryButton className='w-full'>Search Properties</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <div className='absolute top-0 left-0 w-full bg-gradient-to-t from-white via-transparent to-transparent transition-colors dark:from-[#151515]'></div> */}
            </div>
        </section>
    )
}

export default Intro
