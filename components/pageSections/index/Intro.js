import { DarkmodeSwitch } from '../../../layout/index'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryButton from '../../buttons/PrimaryButton'
import SecondaryButton from '../../buttons/SecondaryButton'
import { SiEmirates } from 'react-icons/si'
const Intro = () => {
    return (
        <section>
            <div className="relative left-1/2 h-screen w-screen -translate-x-1/2 overflow-y-hidden">
                <div className="relative right-0 top-0 -z-10 h-2/3 w-full sm:absolute sm:h-full md:w-4/6">
                    <Image
                        src={'/static/images/saleBanner.jpg'}
                        layout="fill"
                        className="object-cover"
                        alt="properties for sale"
                        priority
                    />
                </div>
                <div className="relative -mt-[20vh] flex h-1/2 flex-col items-center justify-center rounded-tr-[20vh] bg-white after:absolute after:left-0 after:-top-[20vh] after:-z-10  after:h-[20vh] after:w-[20vh] after:rounded-bl-full after:shadow-[-15vw_15vw_0_15vw_white] after:transition-colors dark:bg-neutral-900 after:dark:shadow-[-15vw_15vw_0_15vw_#171717] sm:mt-0 sm:h-full sm:w-1/2 sm:rounded-tr-[15vw] after:sm:bottom-0 after:sm:top-auto after:sm:left-auto after:sm:-right-[15vw] after:sm:h-[15vw] after:sm:w-[15vw]"></div>
                <div className="container absolute left-1/2 top-0 flex h-full w-screen -translate-x-1/2 items-end justify-center py-[5vh] sm:items-center sm:justify-start sm:px-14">
                    <div className="relative w-full rounded-3xl px-2 sm:w-auto sm:bg-white sm:p-10 sm:dark:bg-[#171717]">
                        <div className="mb-5">
                            <DarkmodeSwitch />
                        </div>
                        <div className="mb-[5vh]">
                            <h1 className="rounded-xl font-hanson text-[13vw] font-semibold leading-[13vw] sm:mb-5 sm:text-6xl sm:leading-none">
                                Tamlik <br /> realestate
                            </h1>
                            <h2 className="text-xl">
                                buy/rent realestate from uae{' '}
                                <SiEmirates className="inline text-3xl" />
                            </h2>
                        </div>
                        <div>
                            <div className="mb-3 flex space-x-4">
                                <Link
                                    href="/search/results?purpose=for-rent&sort=date-desc"
                                    passHref
                                >
                                    <SecondaryButton className="">
                                        Rent
                                    </SecondaryButton>
                                </Link>
                                <Link
                                    href="/search/results?purpose=for-sale&sort=date-desc"
                                    passHref
                                >
                                    <SecondaryButton className="w-full">
                                        Buy
                                    </SecondaryButton>
                                </Link>
                            </div>
                            <Link href="/search" passHref>
                                <PrimaryButton className="w-full">
                                    Search Properties
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
