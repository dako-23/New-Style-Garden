import { motion } from 'framer-motion';
import HeroSlider from './HeroSlider.jsx';
import AboutUs from './AboutUs.jsx';
import HowWeWork from './HowWeWork.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import HomeGallery from './HomeGallery.jsx';
import SEO from '../seo/SEO.JSX';

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
            <SEO
                title="New Style Garden | Озеленяване и поддръжка на градини в София"
                description="Професионално озеленяване, изграждане на поливни системи, затревяване с чим и семена. Доверете се на New Style Garden – естетика, природа и спокойствие в градината ви."
                url="https://newstylegarden.com/"
                image="https://res.cloudinary.com/dgvzzts4y/image/upload/v1744802263/gallery/hero-slider1_hiurqf_xcibzq.jpg"
            />
            <div className='bg-main min-h-screen overflow-hidden pb-20'>
                <motion.div
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <HeroSlider />
                </motion.div>
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
                        <HomeGallery />
                    </motion.div>
                </div>
            </div>
        </>
    );
}
