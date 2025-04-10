import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const navigation = [
    { name: "Начало", path: "/" },
    { name: "Нашите обекти", path: "/gallery" },
    {
      name: "Услуги",
      path: "/services",
      submenu: [
        { name: "Поддръжка на градини", path: "/services/garden-care" },
        { name: "Озеленяване и ландфашт", path: "/services/landscaping" },
        { name: "Поливни системи", path: "/services/irrigation" },
      ],
    },
    { name: "Цени", path: "/prices" },
    { name: "Контакти", path: "/about" },
  ];

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
                delay: 0.2,
            },
        },
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (<>
        <div className="fixed w-full bg-[#09312C] backdrop-blur-md text-white z-20">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between pl-1 pr-1">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-white" />
                        <span className="font-medium">+359 879 914 560</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-white" />
                        <span className="font-medium">newstylegardenn@gmail.com</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-500 transition text-xl">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-500 transition text-xl">
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-green-500 transition text-xl">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>

        <motion.nav
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="fixed top-10 left-0 w-full bg-white/80 backdrop-blur-md z-10 shadow-md"
        >
            <div className="max-w-7xl mx-auto px-0 h-17 flex items-center justify-between text-xl">
                <Link
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsMobileMenuOpen(false);
                    }}
                    to="/"
                >
                    <img src="/navbar-logo.png" alt="Logo" className="w-39 h-auto" />
                </Link>

                <div className="md:hidden flex">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <AiOutlineClose className="text-2xl text-black" />
                        ) : (
                            <AiOutlineMenu className="text-2xl text-black" />
                        )}
                    </button>
                </div>

                <ul className="md:flex md:items-center md:space-x-6 md:gap-8 text-gray-700 font-medium">
                    {navigation.map((nav) => (
                        <li
                            key={nav.name}
                            className="relative group py-2 md:py-0 hover:text-green-900"
                        >
                            <NavLink
                                to={nav.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-flex items-center gap-1"
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                            color: "oklch(0.35 0.15 145)",
                                            borderBottom: "2px solid #111827",
                                            paddingBottom: "2px",
                                        }
                                        : {}
                                }
                            >
                                {nav.name}
                                {nav.submenu && (
                                    <FaChevronDown className="text-xs mt-[2px]" />
                                )}
                            </NavLink>

                            {nav.submenu && (
                                <ul className="absolute left-1/2 transform -translate-x-1/2 left-0 mt-2 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-max z-30">
                                    {nav.submenu.map((sub, idx) => (
                                        <li
                                            key={idx}
                                            className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap first:rounded-t-md last:rounded-b-md"
                                        >
                                            <NavLink
                                                to={sub.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block text-sm"
                                            >
                                                {sub.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav >
    </>
    )
}