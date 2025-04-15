import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useState } from 'react';
import gallery from '../../images/gallery.json'

export default function HomeGalleryCarousel() {

    const [open, setOpen] = useState(false);

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
                    loop={true}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {gallery.map((src, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={src}
                                alt={`gallery ${i}`}
                                className="rounded-xl shadow-md w-full h-64 object-cover cursor-pointer hover:scale-96 transition duration-300"
                                onClick={() => setOpen(i)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <Lightbox
                open={open !== false}
                close={() => setOpen(false)}
                index={open}
                slides={gallery.map((src) => ({ src }))}
                styles={{
                    container: {
                        backgroundColor: "rgba(0,0,0,0.85)" // по-мек фон
                    }
                }}
            />
        </>

    );
}
