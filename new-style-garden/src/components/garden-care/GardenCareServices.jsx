import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import SEO from "../seo/SEO.JSX";
import GardenCareTimeline from "./GardenCareTimeline.jsx";
import { motion } from 'framer-motion'

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function GardenCareServices() {

    return (
        <div className="bg-main">
            <SEO
                title="New Style Garden | Поддръжка на градини"
                description="Професионално озеленяване и поддръжка, изграждане на поливни системи, затревяване с чим и семена. Доверете се на New Style Garden – естетика, природа и спокойствие в градината ви."
                url="https://newstylegarden.com/"
                image="https://res.cloudinary.com/dgvzzts4y/image/upload/v1744802263/gallery/hero-slider1_hiurqf_xcibzq.jpg"
            />
            <HeaderBanner title={'Поддръжка'} />
            <motion.div
                variants={childVariants}
                initial="hidden"
                animate="visible"
            >
                <GardenCareTimeline />
            </motion.div>
        </div>
    );
}