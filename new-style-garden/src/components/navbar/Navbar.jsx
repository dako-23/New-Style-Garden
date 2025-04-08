import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const navigation = [
    { name: 'Начало', path: '/', visibleFor: 'all' },
    { name: 'Контакти', path: '/about', visibleFor: 'all' },
]

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const textVariants = {
        hidden: { y: -150, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
                bounce: 0.1,
                delay: 0.3,
            },
        },
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (<>
        <div className="fixed w-full backdrop-blur-md text-white px-6 py-2 flex justify-between items-center z-20">
            <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-white" />
                <span className="font-medium">+359 879 914 560</span>
            </div>

            <div className="flex items-center gap-2">
                <FaEnvelope className="text-white" />
                <span className="font-medium">newstylegardenn@gmail.com</span>
            </div>
        </div>
        <motion.nav
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="fixed top-11 left-0 w-full flex text-xl justify-between items-center px-6 py-5 bg-[rgba(255,255,153,0.6)] backdrop-blur-md z-10 h-16 shadow-md"
        >
            <div className="flex items-center">
                <Link
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsMobileMenuOpen(false);
                    }}
                    to="/"
                >
                    <img src="/navbar-logo.png" alt="Logo" className="w-44 h-auto" />
                </Link>
            </div>

            <div className="md:hidden flex">
                <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <AiOutlineClose className="text-2xl text-black" />
                    ) : (
                        <AiOutlineMenu className="text-2xl text-black" />
                    )}
                </button>
            </div>

            <ul
                className={`md:flex md:items-center md:space-x-6 md:gap-6 text-gray-900 font-medium ${isMobileMenuOpen
                    ? "flex flex-col absolute top-20 right-0 w-full bg-yellow-100 bg-opacity-90 backdrop-blur-md px-4 py-6 z-10"
                    : "hidden"
                    }`}
            >
                {navigation.map((nav) => (
                    <li key={nav.name} className="hover:text-green-900 py-2 md:py-0">
                        <NavLink
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={({ isActive }) =>
                                isActive ? {
                                    color: "oklch(0.35 0.15 145)",
                                    borderBottom: "2px solid #111827",
                                    paddingBottom: "2px",
                                } : {}
                            }
                            to={nav.path}
                        >
                            {nav.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </motion.nav>
    </>
    )
}