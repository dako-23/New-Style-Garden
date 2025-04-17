
import { motion } from 'framer-motion';
import ContactForm from "./ContactForm.jsx";
import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import FacebookWidget from "./FacebookWidget.jsx";
import PageHeader from './PageHeader.jsx';

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
