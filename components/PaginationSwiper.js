import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Loading } from '@nextui-org/react';
import Image from 'next/image';

const PaginationSwiper = ({ images, alt }) => {
    return (
        <Swiper
            spaceBetween={0}
            modules={[Pagination]}
            pagination={{
                dynamicBullets: true,
            }}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className='relative h-full cursor-grab'
        >
            {images.map((photo) => (
                <SwiperSlide key={photo.id}>
                    <div className='flex h-full'>
                        <div className='m-auto'>
                            <Loading size='lg' />
                        </div>
                        <Image
                            src={photo.url}
                            layout='fill'
                            alt={alt}
                            objectFit='contain'
                        />
                    </div>
                </SwiperSlide>
            ))}
            <div className='absolute bottom-1 left-1/2 h-5 w-28 -translate-x-1/2 rounded-full border bg-white'></div>
        </Swiper>
    );
};

export default PaginationSwiper;
