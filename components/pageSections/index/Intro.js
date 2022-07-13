import { DarkmodeSwitch } from '../../../layout/index';
import Image from 'next/image';

const Intro = () => {
    return (
        <section>
            <div className='absolute z-30'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='m-3 w-28 cursor-pointer rounded-2xl bg-white text-3xl font-bold dark:bg-[#151515] dark:text-white'
                    viewBox='0 0 100 100'
                >
                    <path
                        fill='currentColor'
                        d='M61 44.6c0 5.9-5 10.8-11 10.8s-11-4.9-11-10.8v-5.4c0-5.9 5-10.8 11-10.8 3 0 5.8 1.2 7.8 3.2 2 1.9 3.3 4.6 3.3 7.6v5.4zm38.6-18.3c-.1-.3-.3-.6-.5-.9-1.4-2.8-3.1-5.4-5-7.8-.3-.4-.7-.9-1-1.3-2.1-2.6-5.4-4.1-8.7-4.1h-51c-6.1 0-11 4.9-11 10.8v32.4c0 5.9-5 10.8-11 10.8H5.5c-3 0-5.5 2.4-5.5 5.4 0 .8.2 1.5.4 2.1.1.3.3.6.5.9 1.4 2.8 3.1 5.4 5 7.8.3.4.7.9 1 1.3 2.1 2.6 5.4 4.1 8.7 4.1h17.8c6.1 0 11-4.9 11-10.8 0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4c0 3 1.2 5.7 3.3 7.6 2 2 4.7 3.2 7.8 3.2H72c6.1 0 11-4.9 11-10.8V44.6c0-5.9 5-10.8 11-10.8h.3c3 0 5.5-2.4 5.5-5.4.2-.8 0-1.5-.2-2.1z'
                    ></path>
                </svg>
                <DarkmodeSwitch />
            </div>
            <div className='relative left-1/2 h-screen w-screen -translate-x-1/2'>
                <Image
                    src={'/images/sale-banner.jpg'}
                    layout='fill'
                    className='rounded-tl-full object-cover'
                    alt='properties for sale'
                    priority
                />
                <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-white via-transparent to-transparent transition-colors dark:from-[#151515]'></div>
            </div>
        </section>
    );
};

export default Intro;