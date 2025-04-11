import React from "react";
import { motion } from 'framer-motion';

export default function HeaderBanner({ title }) {
    return (
        <div
            className="relative w-full h-70 flex items-center justify-center text-center bg-cover bg-center "
            style={{ backgroundImage: 'url("/page-pattern3.jpg")' }}>
            <div className="absolute inset-0 bg-opacity-50 z-0"></div>

            <div className="relative z-0 text-white">
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut"}}
                    className="text-5xl font-bold mt-18"
                >
                    {title}
                </motion.h1>
            </div>
        </div >
    );
}
