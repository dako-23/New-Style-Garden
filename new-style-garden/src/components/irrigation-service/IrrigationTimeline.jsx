import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom";
import { FaTools, FaSeedling, FaWrench, FaTint, FaLeaf } from 'react-icons/fa';
import useLineAnimation from '../../hooks/useLineAnimation.js';

const timeElements = [
    { title: 'Консултация и оглед на обекта', content: 'Професионален оглед на терена и оценка на нуждите от поливна система.', step: 'Стъпка 1', icon: <FaSeedling /> },
    { title: 'Проектиране на системата', content: 'Изготвяне на индивидуален проект, съобразен с растителността и терена.', step: 'Стъпка 2', icon: <FaWrench /> },
    { title: 'Монтаж и инсталация', content: 'Професионално изграждане на поливната система с висококачествени материали.', step: 'Стъпка 3', icon: <FaTools /> },
    { title: 'Тестване и обучение', content: 'Проверка на работата на системата и инструкции към клиента за използване.', step: 'Стъпка 4', icon: <FaTint /> },
    { title: 'Абонаментна поддръжка', content: 'Редовна профилактика, почистване и настройка на системата за оптимална работа.', step: 'Стъпка 5', icon: <FaLeaf /> },
]

export default function IrrigationTimeline() {

    const timeLineRef = useLineAnimation();

    return (
        <div className="py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-sky-600 mb-12">
                Изграждане и поддръжка на поливна система
            </h2>
            <div ref={timeLineRef} className="timeline-animate relative">
                <VerticalTimeline lineColor="#0ea5e9" >
                    {timeElements.map(el =>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ecfdf5', color: '#0284c7' }}
                            contentArrowStyle={{ borderRight: '7px solid #ecfdf5' }}
                            date={el.step}
                            iconStyle={{ background: '#38bdf8', color: '#fff' }}
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
                        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition cursor-pointer"

                    >
                        Заяви оферта
                    </button>
                </Link>
            </div>
        </div>
    );
}