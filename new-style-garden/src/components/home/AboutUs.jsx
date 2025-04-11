import { FaLeaf, FaHandsHelping, FaSeedling } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AboutUs() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <img
                        src="/car.jpg"
                        alt="Екипът на New Style Garden"
                        className="rounded-xl shadow-xl w-full object-cover max-h-[450px]"
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-green-700 mb-6">
                        За New Style Garden
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Вярваме, че всяко зелено пространство заслужава индивидуално внимание и естетика. Създаваме не просто градини, а живи късчета природа, които вдъхновяват.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <FaLeaf className="text-green-600 text-2xl mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Екологичен подход</h4>
                                <p className="text-gray-600 text-sm">Работим с природосъобразни методи, без компромис с качеството и резултата.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaSeedling className="text-green-600 text-2xl mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Индивидуални решения</h4>
                                <p className="text-gray-600 text-sm">Всяко озеленяване е съобразено с желанието на клиента и особеностите на терена.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaHandsHelping className="text-green-600 text-2xl mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Професионален екип</h4>
                                <p className="text-gray-600 text-sm">Нашите специалисти имат дългогодишен опит в поддръжката и изграждането на зелени площи.</p>
                            </div>
                        </div>
                    </div>
                    <Link to='/about'>
                        <button className="mt-8 bg-green-700 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md shadow cursor-pointer">
                            Свържете се с нас
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}