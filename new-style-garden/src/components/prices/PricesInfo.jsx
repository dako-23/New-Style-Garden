import { Link } from "react-router-dom";
import PricesTimeline from "./PricesTimeline.jsx";




export default function PricesInfo() {
    return (
        <>
            <section className="py-20 px-6 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="/hero-slider2.jpg"
                            alt="Озеленяване от New Style Garden"
                            className="rounded-xl object-cover w-full h-164 shadow-lg"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
                            КАЧЕСТВО НА ДОСТЪПНА ЦЕНА
                        </h2>

                        <div className="space-y-6 text-gray-700 text-xl font-semibold py-10 leading-relaxed">
                            <p>
                                В <strong>New Style Garden</strong> се стремим да предоставим изключително качество на услуги, съобразено с нуждите и възможностите на всеки клиент. Работим с професионална техника, опитен екип и персонализиран подход – всичко това на <span className="text-green-700 font-semibold">конкурентни цени</span>.
                            </p>
                            <p>
                                Независимо дали става въпрос за малък двор или мащабен проект, нашият ангажимент към перфектен резултат остава един и същ – внимателна грижа, прецизност и дългосрочни решения.
                            </p>
                            <p className="font-semibold text-gray-800 text-xl">
                                Доверете ни се – природата ще ви благодари.
                            </p>
                        </div>

                        <div className="flex justify-start mt-8">
                            <Link to="/about">
                                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition cursor-pointer">
                                    Изпрати запитване
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <PricesTimeline />
        </>
    );
}