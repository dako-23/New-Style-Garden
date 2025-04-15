import { FaFacebookF, FaInstagram, FaViber } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-white py-10 bg-[#09312C]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white pt-6 gap-6 md:gap-0">
                    <div className="text-center md:text-left font-semibold">
                        <h2 className="text-2xl sm:text-3xl">New Style Garden</h2>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-6 text-base sm:text-lg text-center font-medium">
                        <Link to="/" className="hover:text-green-400 transition">Начало</Link>
                        <Link to="/about" className="hover:text-green-400 transition">Контакти</Link>
                        <Link to="/services" className="hover:text-green-400 transition">Услуги</Link>
                        <Link to="/prices" className="hover:text-green-400 transition">Цени</Link>
                        <Link to="/privacy-policy" className="hover:text-green-400 transition">Политика за поверителност</Link>
                    </div>

                    <div className="flex gap-4 text-xl">
                        <a href="https://www.facebook.com/NewStylegarden" target="_blank" rel="noreferrer" className="hover:text-green-500 transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/newstylegarden" target="_blank" rel="noreferrer" className="hover:text-green-500 transition">
                            <FaInstagram />
                        </a>
                        <a href="viber://chat?number=%2B359879914560" target="_blank" rel="noreferrer" className="hover:text-green-500 transition">
                            <FaViber />
                        </a>
                    </div>
                </div>

                <div className="text-white text-sm mt-6 text-center">
                    © {new Date().getFullYear()} New Style Garden. Всички права запазени.
                </div>
            </div>
        </footer>
    );
}
