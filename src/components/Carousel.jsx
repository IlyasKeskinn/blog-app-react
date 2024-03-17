// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { CarouselCard } from './CarouselCard';

import React from 'react'


const posts = [
    { "title": "Lorem ipsum dolor sit amet", "tag": "Food", "img": "post-1.webp" },
    { "title": "Lorem sit amet", "tag": "Fashion", "img": "post-2.webp" },
    { "title": "Lorem dolor sit amet", "tag": "Lifestyle", "img": "post-3.webp" },
    { "title": "Ipsum dolor sit amet", "tag": "Food", "img": "post-4.webp" },
    { "title": "Lorem ipsum dolor sit ", "tag": "Travel", "img": "post-5.webp" },
]


export class Carousel extends React.Component {
    render() {
        return (
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
            >
                {posts.map((post, index) => {
                    return <SwiperSlide key={index}><CarouselCard post={post} /></SwiperSlide>
                })}
            </Swiper>

        );
    }
}

export default Carousel