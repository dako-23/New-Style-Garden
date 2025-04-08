import { Link } from "react-router-dom";


export default function Footer() {

    return (
        <footer className="text-white py-10 bg-[#09312C]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white pt-6">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-xl">New Style Garden</h2>
                    </div>
                    <div className="flex space-x-6 text-white text-xl">
                        <Link to="/" className="hover:text-white">Начало</Link>
                        <Link to="/about" className="hover:text-white">Контакти</Link>
                        <Link to="/services" className="hover:text-white">Услуги</Link>
                        <Link to="/prices" className="hover:text-white">Цени</Link>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                            <img src="/telegram.png" alt="Telegram" className="h-6" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/fb.webp" alt="Facebook" className="h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.png" alt="Instagram" className="h-6" />
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