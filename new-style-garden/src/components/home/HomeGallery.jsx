import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useHomeGallery } from '../../api/homeGalleryApi.js';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen/index';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import Lightbox from "yet-another-react-lightbox";

export default function HomeGalleryCarousel() {

    const { homeGallery } = useHomeGallery()

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const canLoop = homeGallery.length >= 1;

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dgvzzts4y'
        }
    });

    return (
        <>
            <section className="py-10 px-4 bg-gray-50 rounded-xl shadow-lg">
                <div className="flex justify-center">
                    <h2 className="text-center text-3xl font-bold text-gray-800 border-l-4 border-green-600 pl-4 mb-12">Нашите обекти</h2>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={false}
                    autoplay={{ delay: 3000 }}
                    loop={canLoop}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {homeGallery.map((src, i) => (
                        <SwiperSlide key={i}>
                            <AdvancedImage
                                cldImg={cld
                                    .image(src)
                                    .format(auto())
                                    .delivery(quality("auto"))
                                    .resize(fill().width(800).height(600))
                                }
                                alt={'Снимки от озеленяване на наши обекти'}
                                className="rounded-xl shadow-md w-full h-64 object-cover cursor-pointer hover:scale-95 transition duration-300"
                                onClick={() => {
                                    setOpen(true);
                                    setIndex(i);
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <Lightbox
                open={open !== false}
                close={() => setOpen(false)}
                index={index}
                slides={homeGallery.map((id) => ({
                    src: cld.image(id).toURL()
                }))}
                styles={{
                    container: {
                        backgroundColor: "rgba(0,0,0,0.85)" // по-мек фон
                    }
                }}
            />
        </>

    );
}
