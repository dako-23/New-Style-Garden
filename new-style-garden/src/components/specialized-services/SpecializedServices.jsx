import { FaLeaf, FaWater, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Поддръжка на градини',
        description:
            'Предлагаме регулярна грижа за вашата градина – косене, подрязване, почистване, подхранване и сезонна профилактика.',
        icon: <FaTools className="text-4xl text-green-800 mb-4" />,
        link: '/services/garden-care',
    },
    {
        title: 'Озеленяване и ландшафт',
        description:
            'Професионално изграждане на зелени площи, включително засаждане на дървета, храсти, тревни площи и декоративни растения.',
        icon: <FaLeaf className="text-4xl text-green-800 mb-4" />,
        link: '/services/landscaping',
    },
    {
        title: 'Поливни системи',
        description:
            'Монтаж и поддръжка на автоматизирани поливни системи, съобразени с нуждите на терена и растителността.',
        icon: <FaWater className="text-4xl text-green-800 mb-4" />,
        link: '/services/irrigation',
    },
];

export default function SpecializedServices() {
    return (
        <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Нашите специализирани услуги
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                    Изберете професионализъм и индивидуален подход за всеки проект. Ето как можем да сме ви полезни:
                </p>

                <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition flex flex-col items-center justify-between"
                        >
                            <div className="text-center">
                                {service.icon}
                                <h3 className="text-xl font-semibold text-green-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                            </div>
                            <Link
                                to={service.link}
                                className="mt-auto inline-block bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition"
                            >
                                Виж повече
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
