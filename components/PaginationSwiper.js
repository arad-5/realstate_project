import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Loading } from '@nextui-org/react'
import Image from 'next/image'

const PaginationSwiper = ({ images, alt }) => {
    return (
        <Swiper
            spaceBetween={0}
            modules={[Pagination]}
            pagination={{ dynamicBullets: true }}
            slidesPerView={1}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className='relative h-full cursor-grab rounded-2xl '
        >
            {images.map(photo => (
                <SwiperSlide key={photo.id} className='relative'>
                    <div className='flex'>
                        <div className='m-auto'>
                            <Loading size='lg' />
                        </div>
                        <Image src={photo.url} layout='fill' alt={alt} className='object-cover' />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PaginationSwiper
