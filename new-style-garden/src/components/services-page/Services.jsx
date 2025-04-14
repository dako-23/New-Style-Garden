import HeaderBanner from "../header-banner/HeaderBanner.jsx";
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