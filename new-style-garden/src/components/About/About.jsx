
import { motion } from 'framer-motion';
import ContactForm from "./ContactForm.jsx";
import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import FacebookWidget from "./FacebookWidget.jsx";
import PageHeader from './PageHeader.jsx';
import SEO from '../seo/SEO.JSX';

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function About() {

    return (
        <>
            <HeaderBanner title={'Контакти'} />
            <div className="bg-main">
                <SEO
                    title="New Style Garden | Контакти"
                    description="Професионално озеленяване и поддръжка, изграждане на поливни системи, затревяване с чим и семена. Доверете се на New Style Garden – естетика, природа и спокойствие в градината ви."
                    url="https://newstylegarden.com/"
                    image="https://res.cloudinary.com/dgvzzts4y/image/upload/v1744802263/gallery/hero-slider1_hiurqf_xcibzq.jpg"
                />
                <motion.div
                    variants={childVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-6xl mx-auto py-16 px-6"
                >
                    <PageHeader />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-start md:place-items-center">
                        <div className="w-full md:w-[500px]">
                            <ContactForm />
                        </div>

                        <div className="md:ml-8 mx-auto">
                            <FacebookWidget />
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
