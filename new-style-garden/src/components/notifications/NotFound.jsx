import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderBanner from "../header-banner/HeaderBanner.jsx";

export default function NotFound() {
    return (
        <>
            <HeaderBanner title={'Грешка: 404'} />
            <div className="bg-main h-171 flex flex-col items-center justify-center text-center px-6">
                <motion.h1
                    className="text-6xl font-bold text-gray-800 mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    404
                </motion.h1>
                <motion.h2
                    className="text-2xl md:text-3xl text-green-700 font-semibold mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Страницата не съществува.
                </motion.h2>
                <motion.p
                    className="text-xl text-green-800 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Възможно е линкът да е остарял или страницата да е премахната.
                </motion.p>
                <Link
                    to="/"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition"
                >
                    Обратно към началната страница
                </Link>
            </div>
        </>
    );
}
