
import { motion } from 'framer-motion';
import ContactForm from "./ContactForm.jsx";
import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import FacebookWidget from "./FacebookWidget.jsx";

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
                    <div className="flex justify-center">
                        <h2 className="text-4xl font-bold text-gray-800 border-l-4 border-green-600 pl-4 mb-6">
                            Свържете се с нас
                        </h2>
                    </div>
                    <p className="text-lg text-gray-800 text-center max-w-3xl mx-auto mb-10 font-semibold">
                        Изпратете ни запитване още сега, за да изготвим за вас индивидуална оферта,
                        съобразена с нуждите и спецификата на проекта. Нашите специалисти ще се свържат с вас
                        за уточнение на детайлите и за организиране на оглед, при необходимост.
                    </p>
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
