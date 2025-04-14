import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import PricesInfo from "./PricesInfo.jsx";
import { motion } from 'framer-motion'

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function Prices() {
    return (
        <div className="bg-main">
            <HeaderBanner title={'Нашите цени'} />
            <motion.div
                variants={childVariants}
                initial="hidden"
                animate="visible"
            >
                <PricesInfo />
            </motion.div>
        </div>
    );
}