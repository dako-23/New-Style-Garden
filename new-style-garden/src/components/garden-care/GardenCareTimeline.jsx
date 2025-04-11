import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom";
import { FaBroom, FaBug, FaLeaf, FaRecycle, FaWater } from "react-icons/fa";
import useLineAnimation from "../../hooks/useLineAnimation.js";


const timeLineElements = [
    {
        title: "Редовно почистване",
        content: "Премахване на отпадъци, изсъхнали листа и плевели за поддържане на естетика и здраве на градината.",
        step: "Грижа за чистота",
        icon: <FaBroom />,
    },
    {
        title: "Косене и подрязване",
        content: "Поддържане на тревни площи, живи плетове и храсти чрез прецизно подрязване.",
        step: "Форма и структура",
        icon: <FaLeaf />,
    },
    {
        title: "Торене и подхранване",
        content: "Добавяне на органични или минерални торове за стимулиране на растежа.",
        step: "Хранене на растенията",
        icon: <FaRecycle />,
    },
    {
        title: "Борба с вредители",
        content: "Прилагане на екологични и безопасни методи за защита на растенията от болести и вредители.",
        step: "Растителна защита",
        icon: <FaBug />,
    },
    {
        title: "Проверка на поливната система",
        content: "Редовна диагностика на поливната инсталация за осигуряване на оптимална хидратация.",
        step: "Поддръжка на системите",
        icon: <FaWater />,
    },
];

export default function GardenCareTimeline() {

    const timeLineRef = useLineAnimation();

    return (
        <div className="py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
                Живот за зелените площи – професионална поддръжка
            </h2>
            <p className="text-center text-green-500 mb-10 font-semibold text-lg ">
                Професионална поддръжка, която съчетава функционалност и естетика през всеки сезон.
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