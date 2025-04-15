import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa';

const fadeVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.25, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        filter: "blur(5px)",
        transition: { duration: 0.1, ease: "easeInOut" }
    }
};

export default function ScrollBtn() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <motion.button
                    key="scroll-top"
                    variants={fadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-green-700 hover:bg-green-600 text-white shadow-lg transition cursor-pointer backdrop-blur-sm"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={45} />
                </motion.button>
            )}
        </>
    );
}