import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Loading } from '@nextui-org/react';
import Image from 'next/image';

const PaginationSwiper = ({images , alt}) => {
    return (
        <Swiper
            spaceBetween={5}
            modules={[Pagination]}
            pagination={{
                dynamicBullets: true,
            }}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className='h-96 cursor-grab'
        >
            {images.map((photo) => (
                <SwiperSlide key={photo.id} className='relative'>
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
        </Swiper>
    );
};

export default PaginationSwiper;
