import { motion } from 'framer-motion';
import HeroSlider from './HeroSlider.jsx';
import AboutUs from './AboutUs.jsx';
import HowWeWork from './HowWeWork.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function Home() {
    return (
        <>
            <div className='bg-main'>
                <HeroSlider />
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <AboutUs />
                    </motion.div>
                    <motion.div
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <HowWeWork />
                    </motion.div>
                    <motion.div
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <WhyChooseUs />
                    </motion.div>
                    <motion.div
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* <Topics /> */}
                    </motion.div>
                    <motion.div
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* <LatestReviews /> */}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
