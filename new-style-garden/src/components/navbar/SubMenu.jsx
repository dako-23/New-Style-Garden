import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaViber } from 'react-icons/fa';

export default function SubMenu() {
    return (
        <div className="fixed w-full bg-[#09312C] backdrop-blur-md text-white z-50">
            <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">
                {/* Лява част */}
                <div className="flex items-center gap-6">
                    {/* Телефон */}
                    <a href="tel:+359879914560" className="flex items-center gap-2 transition">
                        <FaPhoneAlt className="text-white" />
                        <span className="font-medium hidden sm:inline">+359 879 914 560</span>
                    </a>

                    {/* Имейл */}
                    <a href="mailto:newstylegardenn@gmail.com" className="flex items-center gap-2 transition">
                        <FaEnvelope className="text-white" />
                        <span className="font-medium hidden sm:inline">newstylegardenn@gmail.com</span>
                    </a>
                </div>

                {/* Дясна част: Социални */}
                <div className="flex items-center gap-4 text-xl">
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
        </div>
    );
}
