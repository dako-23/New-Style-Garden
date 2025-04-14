import HeaderBanner from "../header-banner/HeaderBanner.jsx";
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