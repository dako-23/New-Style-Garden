import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom";
import { FaClipboardCheck, FaRulerCombined, FaSearch, FaTools, FaHandshake } from "react-icons/fa";
import useLineAnimation from "../../hooks/useLineAnimation.js";


const timeLineElements = [
    {
        title: 'Запитване от клиента',
        content: 'Получаваме вашето запитване и се запознаваме с нуждите и очакванията ви.',
        step: 'Започваме с контакт',
        icon: <FaClipboardCheck />
    },
    {
        title: 'Безплатен оглед на обекта',
        content: 'Посещаваме мястото, за да направим оглед и да съберем нужната информация.',
        step: 'Оглеждаме обекта',
        icon: <FaSearch />
    },
    {
        title: 'Оценка на терена и мащаба',
        content: 'Вземаме предвид площта, особеностите на терена и нуждата от оборудване.',
        step: 'Анализ на мащаба',
        icon: <FaRulerCombined />
    },
    {
        title: 'Изготвяне на индивидуална оферта',
        content: 'Създаваме персонализирана оферта според конкретния проект и бюджет.',
        step: 'Предлагаме оферта',
        icon: <FaTools />
    },
    {
        title: 'Договаряне и стартиране',
        content: 'Уточняваме всички детайли, подписваме договор и започваме реализацията.',
        step: 'Стартираме съвместно',
        icon: <FaHandshake />
    }
];

export default function PricesTimeline() {

    const timeLineRef = useLineAnimation();

    return (
        <div className="py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
                Как се определят нашите цени?
            </h2>
            <p className="text-center text-green-500 mb-10 font-semibold text-lg ">
                Процесът на ценообразуване при нас е прозрачен, професионален и съобразен с конкретните нужди на клиента.
                Всяка стъпка е важна, за да гарантираме най-доброто съотношение между цена и качество.
            </p>
            <div ref={timeLineRef} className="timeline-animate relative">
                <VerticalTimeline lineColor="#16a34a" >
                    {timeLineElements.map((el, idx) =>
                        <VerticalTimelineElement
                            key={idx}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ecfdf5', color: '#16a34a' }}
                            contentArrowStyle={{ borderRight: '12px solid #16a34a' }}
                            date={el.step}
                            iconStyle={{ background: '#4ade80  ', color: '#fff' }}
                            icon={el.icon}
                        >
                            <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                                {el.title}
                            </h3>
                            <p>{el.content}</p>
                        </VerticalTimelineElement>
                    )
                    }
                </VerticalTimeline>
            </div>
            <div className="flex justify-center mt-10">
                <Link to={'/about'}>
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition cursor-pointer"

                    >
                        Заяви оферта
                    </button>
                </Link>
            </div>
        </div>
    );
}