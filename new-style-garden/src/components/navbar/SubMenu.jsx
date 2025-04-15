import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaViber } from 'react-icons/fa';

export default function SubMenu() {
    return (
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
    );
}