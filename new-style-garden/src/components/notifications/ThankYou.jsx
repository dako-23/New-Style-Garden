import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ThankYou() {
    return (
        <div className="bg-main min-h-screen flex flex-col justify-center items-center text-center px-6">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-gray-700 drop-shadow mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Благодарим Ви!
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl font-semibold text-green-800 max-w-2xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Получихме успешно вашето запитване и съвсем скоро наш представител ще се свърже с вас.
                Благодарим ви за доверието – за нас е удоволствие да превърнем всяка зелена идея в реалност!
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Link
                    to="/"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
                >
                    Обратно към началната страница
                </Link>
            </motion.div>
        </div>
    );
}
