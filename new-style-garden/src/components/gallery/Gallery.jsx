import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import FullGallery from "./FullGallery.jsx";
import { motion } from 'framer-motion'

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function Gallery() {
    return (
        <div className='bg-main'>
            <HeaderBanner title={'Галерия'} />
            <motion.div
                variants={childVariants}
                initial="hidden"
                animate="visible"
            >
                <FullGallery />
            </motion.div>
        </div>
    );
}