import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import SEO from "../seo/SEO.JSX";
import OurServices from "./OurServices.jsx";
import { motion } from 'framer-motion'

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function Services() {
    return (
        <div className="bg-main">
            <SEO
                title="New Style Garden | Нашите специализирани услуги"
                description="Професионално озеленяване и поддръжка, изграждане на поливни системи, затревяване с чим и семена. Доверете се на New Style Garden – естетика, природа и спокойствие в градината ви."
                url="https://newstylegarden.com/"
                image="https://res.cloudinary.com/dgvzzts4y/image/upload/v1744802263/gallery/hero-slider1_hiurqf_xcibzq.jpg"
            />
            <HeaderBanner title={'Услуги'} />
            <motion.div
                variants={childVariants}
                initial="hidden"
                animate="visible"
            >
                <OurServices />
            </motion.div>

        </div>
    );
}