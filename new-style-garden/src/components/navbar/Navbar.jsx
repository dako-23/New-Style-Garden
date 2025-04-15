import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaChevronDown, FaLeaf, FaSeedling, FaTint, FaViber } from 'react-icons/fa';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

const navigation = [
    { name: 'Начало', path: '/' },
    { name: 'Нашите обекти', path: '/gallery' },
    {
        name: 'Услуги',
        path: '/services',
        submenu: [
            { name: 'Поддръжка на градини', path: '/services/garden-care', colorClass: 'text-green-700', icon: <FaLeaf className="mr-2" /> },
            { name: 'Озеленяване и ландфашт', path: '/services/landscaping', colorClass: 'text-amber-700', icon: <FaSeedling className="mr-2" /> },
            { name: 'Поливни системи', path: '/services/irrigation', colorClass: 'text-sky-700', icon: <FaTint className="mr-2" /> },
        ],
    },
    { name: 'Цени', path: '/prices' },
    { name: 'Контакти', path: '/about' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <div className="fixed w-full bg-[#09312C] backdrop-blur-md text-white z-50">
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
                        <a href="https://www.facebook.com/NewStylegarden" target="_blank" rel="noreferrer" className="hover:text-green-500 transition text-xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/newstylegarden" target="_blank" rel="noreferrer" className="hover:text-green-500 transition text-xl">
                            <FaInstagram />
                        </a>
                        <a href="viber://chat?number=%2B359879914560" target="_blank" rel="noreferrer" className="hover:text-green-500 transition text-xl">
                            <FaViber />
                        </a>
                    </div>
                </div>
            </div>
            <motion.nav
                className="fixed top-10 left-0 w-full bg-white/80 backdrop-blur-md z-40 shadow-md"
                initial={{ y: -150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 80,
                    damping: 20,
                    bounce: 0.1,
                    delay: 0.2,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 h-17 flex items-center justify-between text-xl">
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/">
                        <img src="/navbar-logo.png" alt="Logo" className="w-40 h-auto" />
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
                    <ul className="hidden md:flex md:items-center md:space-x-6 text-gray-700 font-medium">
                        {navigation.map((nav) => (
                            <li key={nav.name} className="relative group py-2 hover:text-green-900">
                                <NavLink
                                    to={nav.path}
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
                                    {nav.submenu && <FaChevronDown className="text-xs mt-[2px]" />}
                                </NavLink>

                                {nav.submenu && (
                                    <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-max z-30">
                                        {nav.submenu.map((sub, idx) => (
                                            <li key={idx} className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap first:rounded-t-md last:rounded-b-md">
                                                <NavLink
                                                    to={sub.path}
                                                    className={`flex items-center text-sm ${sub.colorClass}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sub.icon} {sub.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden px-6 pb-6 bg-gray-50 shadow-md z-40">
                        <ul className="flex flex-col gap-2 pt-4 text-gray-800">
                            {navigation.map((nav) => (
                                <li key={nav.name}>
                                    <NavLink
                                        to={nav.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-base text-xl font-medium"
                                    >
                                        {nav.name}
                                    </NavLink>

                                    {nav.submenu && (
                                        <ul className="ml-1 mt-1 flex flex-col gap-2">
                                            {nav.submenu.map((sub, idx) => (
                                                <li key={idx}>
                                                    <NavLink
                                                        to={sub.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={`flex items-center text-lg ${sub.colorClass}`}
                                                    >
                                                        {sub.icon} {sub.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.nav>
        </>
    );
}
