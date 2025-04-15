import { FaFacebookF, FaInstagram, FaViber } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer() {

    return (
        <footer className="text-white py-10 bg-[#09312C]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white pt-6">
                    <div className="text-center md:text-left font-semibold mb-6 md:mb-0">
                        <h2 className="text-3xl">New Style Garden</h2>
                    </div>
                    <div className="flex space-x-6 text-white font-semibold text-xl">
                        <Link to="/" className="hover:text-white">Начало</Link>
                        <Link to="/about" className="hover:text-white">Контакти</Link>
                        <Link to="/services" className="hover:text-white">Услуги</Link>
                        <Link to="/prices" className="hover:text-white">Цени</Link>
                        <Link to="/privacy-policy" className="hover:text-white">Политика за поверителност</Link>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
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
                <div className="text-white text-sm mt-6">
                    © {new Date().getFullYear()} New Style Garden. All rights reserved.
                </div>
            </div>
        </footer >
    );
}