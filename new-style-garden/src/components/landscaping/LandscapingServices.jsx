import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import LandscapingTimeline from "./LandscapingTimeline.jsx";
import { motion } from 'framer-motion'

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function LandscapingServices() {

    return (
        <div className="bg-main-brown">
            <HeaderBanner title={'Озеленяване и ландшафт'} />
            <motion.div
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <LandscapingTimeline />
            </motion.div>
        </div>
    );
}