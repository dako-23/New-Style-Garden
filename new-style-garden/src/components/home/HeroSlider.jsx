import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


export default function HeroSlider() {
    return (
        <div className="w-full h-[500px] md:h-[800px] relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation
                pagination={{ clickable: true, }}
                autoplay={{ delay: 2800, disableOnInteraction: false }}
                effect="fade"
                loop={true}
                className="w-full h-full"
            >
                {[1, 2, 3].map((n) => (
                    <SwiperSlide key={n}>
                        <div className="w-full h-full relative">
                            <img
                                src={`/hero-slider${n}.jpg`}
                                alt={`slide ${n}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <h2 className="text-3xl md:text-5xl text-strong-shadow font-bold drop-shadow-lg mb-4">
                                        Добре дошли в New Style Garden
                                    </h2>
                                    <p className="text-lg md:text-xl text-strong-shadow mb-6 font-medium">
                                        Красота. Природа. Хармония.
                                    </p>
                                    <button
                                        className="px-6 py-3 bg-lime-600 hover:bg-lime-500 text-white font-semibold rounded-full shadow-md transition">
                                        Разгледай услугите
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
