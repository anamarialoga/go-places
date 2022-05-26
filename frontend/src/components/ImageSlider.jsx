import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle'
import {Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { useNavigate } from 'react-router-dom'


export const ImageSlider = ({listings}) => {

    const navigate=useNavigate();

    return (
        <Swiper modules={[Navigation, EffectFade, Pagination, Autoplay]} navigation pagination={{clickable: true}} effect={'fade'} speed={800} slidesPerView={1} loop={true} autoplay={{ delay: 1000, disableOnInteraction: false}} className='swiper-container'>
            {listings.map((listing, index)=> (
                <SwiperSlide onClick={()=>navigate(`listings/${listing._id}`)} key={index}>
                    <div
                         style={{
                        background: `url(http://127.0.0.1:8888/${listing.images[0]}) center no-repeat`,
                        backgroundSize: 'cover',
                        }}
                        className='swiperSlideDiv'
                    >
                        <div className='swiperSlideText'>{listing.name}</div>
                        <p className={listing.offer ? 'swiperSlidePriceNew': 'swiperSlidePrice'}>
                         ${listing.offer ? listing.discount :  listing.price} /night
                        </p>
                        {listing.offer && <p className='swiperSlideOffer'>
                            Best Deal
                        </p>}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}