import React from "react";
import { motion } from 'framer-motion';

export default function HeaderBanner({ title }) {
    return (
        <div
            className="relative w-full h-70 flex items-center justify-center text-center bg-cover bg-center z-10"
            style={{ backgroundImage: 'url("https://res.cloudinary.com/dgvzzts4y/image/upload/v1744712539/page-pattern3.12_rl9jqo.png")' }}>
            <div className="absolute inset-0 bg-opacity-50"></div>

            <div className="relative text-white">
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
