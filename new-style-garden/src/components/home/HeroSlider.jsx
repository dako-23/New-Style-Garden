import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import { useHeroSliderImages } from '../../api/heroSliderApi.js';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen/index';
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { ClipLoader } from 'react-spinners';
import { motion } from 'framer-motion';

export default function HeroSlider() {
    const { heroSliderImages, isLoading } = useHeroSliderImages();

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dgvzzts4y'
        }
    });

    const canLoop = heroSliderImages.length >= 1;

    if (isLoading || heroSliderImages.length === 0) {
        return (
            <div className="w-full h-[500px] md:h-[750px] flex items-center justify-center">
                <ClipLoader
                    color="#15803d"
                    size={50}
                    speedMultiplier={1.2} />
            </div>
        );
    }

    return (
        <div className="w-full h-[500px] md:h-[750px] relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation
                pagination={{ clickable: true, }}
                autoplay={{ delay: 2800, disableOnInteraction: false }}
                effect="fade"
                loop={canLoop}
                className="w-full h-full"
            >
                {heroSliderImages.map((image, i) => (
                    <SwiperSlide key={i}>
                        <div className="w-full h-full relative">
                            <AdvancedImage
                                cldImg={cld
                                    .image(image)
                                    .format(auto())
                                    .delivery(quality("auto"))
                                    .resize(fill().width(3840).height(2160))
                                }
                                alt={'Градина, изградена от New Style Garden'}
                                key={i}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 12,
                                        delay: 0.2,
                                    }}
                                    className="text-center text-white">
                                    <h2 className="text-3xl md:text-5xl text-strong-shadow font-bold drop-shadow-lg mb-4">
                                        Добре дошли в New Style Garden
                                    </h2>
                                    <p className="text-lg md:text-xl text-strong-shadow mb-6 font-medium">
                                        Красота. Природа. Хармония.
                                    </p>
                                    <Link to={'/services'}>
                                        <button
                                            className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-full shadow-md transition cursor-pointer">
                                            Разгледай услугите
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
