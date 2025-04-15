import { FaPhoneAlt, FaViber } from 'react-icons/fa';

export default function ContactButtons() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            <div className="relative group flex items-center">
                <div className="absolute right-full mr-2 bg-[#09312C] text-white text-sm px-8 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-50 h-20">
                    <p className="font-semibold text-center text-2xl">New Style Garden</p>
                    <p className="text-green-400 text-center text-xl">+359879914560</p>
                </div>
                <a
                    href="tel:+359879914560"
                    className="bg-green-500 hover:bg-green-600 animate-pulse text-white p-3 rounded-full shadow-lg transition duration-300"
                    aria-label="Позвъни"
                >
                    <FaPhoneAlt size={40} />
                </a>
            </div>
            <div className="relative group flex items-center">
                <div className="absolute right-full mr-2 bg-[#09312C] text-white text-sm px-8 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-50 h-20">
                    <p className="font-semibold text-center text-2xl">Viber</p>
                    <p className="text-green-400 text-center text-xl">+359879914560</p>
                </div>
                <a
                    href="viber://chat?number=%2B359879914560"
                    className="bg-purple-600 hover:bg-purple-700 animate-pulse text-white p-3 rounded-full shadow-lg transition duration-300"
                    aria-label="Свържи се с Viber"
                >
                    <FaViber size={40} />
                </a>
            </div>
        </div>
    );
}