import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import IrrigationTimeline from "./IrrigationTimeline.jsx";
import { motion } from 'framer-motion'

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function IrrigationServices() {
    return (
        <div className="bg-main-blue">
            <HeaderBanner title={'Поливни системи'} />
            <motion.div
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <IrrigationTimeline />
            </motion.div>
        </div>
    );
}