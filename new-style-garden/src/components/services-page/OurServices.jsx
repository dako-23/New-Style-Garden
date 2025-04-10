import { FaLeaf, FaSnowflake, FaBroom, FaTree } from "react-icons/fa";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import SpecializedServices from "./SpecializedServices.jsx";


export default function OurServices() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}>

                <section className="py-20 px-6 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/hero-slider1.jpg" alt="Почистване" className="rounded-full object-cover aspect-square w-full h-auto" />
                            <img src="/hero-slider2.jpg" alt="Тревна площ" className="rounded-full object-cover aspect-square w-full h-auto" />
                            <img src="/hero-slider3.jpg" alt="Дезинфекция" className="rounded-full object-cover aspect-square w-full h-auto" />
                            <img src="/hero-slider1.jpg" alt="Храсти" className="rounded-full object-cover aspect-square w-full h-auto" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
                                НАШИТЕ УСЛУГИ
                            </h2>
                            <div className="space-y-4 text-gray-700 text-xl font-semibold py-10">
                                В New Style Garden вярваме, че всяко зелено пространство заслужава професионална грижа, внимание към детайла и естетически подход.
                                Затова предлагаме пълен набор от услуги, които обхващат както изграждането,
                                така и поддръжката на зелени площи – независимо дали става дума за частен двор, бизнес обект, паркове или обществени пространства.
                            </div>
                            <div className="space-y-4 text-gray-800 text-2xl font-bold">
                                Имате идея? Ние ще я превърнем в зелена реалност.
                                Свържете се с нас още днес – и нека заедно създадем място, което вдъхновява!
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link to={'/about'}>
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition cursor-pointer"
                            >
                                Изпрати запитване
                            </button>
                        </Link>
                    </div>
                </section>
                <SpecializedServices />
            </motion.div>
        </>
    );
}





{/* <ul className="space-y-4 text-gray-700">
    <li className="flex items-start gap-3">
        <FaBroom className="text-green-700 text-xl mt-1" />
        <span>
            <strong>Професионално почистване</strong> – за домове, офиси и бизнес обекти. Използваме съвременна техника и безопасни препарати.
        </span>
    </li>

    <li className="flex items-start gap-3">
        <FaLeaf className="text-green-700 text-xl mt-1" />
        <span>
            <strong>Градинска поддръжка и озеленяване</strong> – оформяне на тревни площи, подрязване на храсти, торене и профилактика.
        </span>
    </li>

    <li className="flex items-start gap-3">
        <FaTree className="text-green-700 text-xl mt-1" />
        <span>
            <strong>Проектиране и изграждане</strong> на зелени пространства, съобразени с растителността и терена.
        </span>
    </li>

    <li className="flex items-start gap-3">
        <FaSnowflake className="text-green-700 text-xl mt-1" />
        <span>
            <strong>Снегопочистване</strong> – за малки и големи площи, включително търговски и индустриални имоти.
        </span>
    </li>
</ul> */}