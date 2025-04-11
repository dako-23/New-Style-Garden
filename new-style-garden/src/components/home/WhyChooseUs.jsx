import { FaCheckCircle, FaClipboardList, FaShieldAlt, FaSmile, FaTools, FaUserTie } from "react-icons/fa";

export default function WhyChooseUs() {

    const benefits = [
        {
            icon: <FaCheckCircle className="text-green-600 text-3xl mb-2" />, title: 'Дългогодишен опит',
            text: 'Опит в сферата на озеленяването и поддръжката, натрупан с години практика.'
        },
        {
            icon: <FaUserTie className="text-green-600 text-3xl mb-2" />, title: 'Професионален екип',
            text: 'Сплотен екип от професионалисти, преминали обучение и с отношение към работата.'
        },
        {
            icon: <FaShieldAlt className="text-green-600 text-3xl mb-2" />, title: 'Надеждност и сигурност',
            text: 'Работим с договор и ясни условия – за вашето спокойствие.'
        },
        {
            icon: <FaSmile className="text-green-600 text-3xl mb-2" />, title: 'Доволни клиенти',
            text: 'Над 500 доволни клиенти – нашата работа говори сама за себе си.'
        },
        {
            icon: <FaTools className="text-green-600 text-3xl mb-2" />, title: 'Модерно оборудване',
            text: 'Използваме техника и препарати от най-висок клас за качествени резултати.'
        },
        {
            icon: <FaClipboardList className="text-green-600 text-3xl mb-2" />, title: 'Индивидуален подход',
            text: 'Всяка градина и клиент са различни – подходът ни също.'
        },
    ];

    return (
        <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
            <h2 className="text-center text-3xl font-bold text-green-800 mb-12">Защо да изберете нас?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {benefits.map((b, i) => (
                    <div key={i} className="text-center px-4">
                        {b.icon}
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{b.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{b.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}