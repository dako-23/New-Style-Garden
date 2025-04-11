import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom";
import { FaDrawPolygon, FaTree, FaSeedling, FaMountain, FaPaintBrush } from "react-icons/fa";
import useLineAnimation from "../../hooks/useLineAnimation.js";

const timeLineElements = [{
    title: "Оглед и анализ на терена",
    content: "Извършване на прецизна оценка на терена и неговите възможности за озеленяване.",
    step: "Стъпка 1",
    icon: <FaDrawPolygon />,
},
{
    title: "Планиране на дизайн",
    content: "Разработване на концепция и 3D визуализация, съобразена с желанията на клиента.",
    step: "Стъпка 2",
    icon: <FaPaintBrush />,
},
{
    title: "Избор на растителност",
    content: "Селектиране на подходящи видове дървета, храсти и цветя според терена и климата.",
    step: "Стъпка 3",
    icon: <FaTree />,
},
{
    title: "Подготовка на терена",
    content: "Изравняване, почистване и обогатяване на почвата за оптимални условия.",
    step: "Стъпка 4",
    icon: <FaMountain />,
},
{
    title: "Засаждане и аранжиране",
    content: "Изпълнение на проекта чрез прецизно засаждане и декоративно оформление.",
    step: "Стъпка 5",
    icon: <FaSeedling />,
},]


export default function LandscapingTimeline() {

    const timeLineRef = useLineAnimation();

    return (
        <div className="py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">
            Естетика и живот във всяко зелено пространство
            </h2>
            <p className="text-center text-amber-600 mb-10 font-semibold text-lg ">
            Озеленяването не е просто работа – това е изкуство. Ние превръщаме идеите Ви в реалност чрез прецизен ландшафтен дизайн и грижа за всяко растение.
            </p>
            <div ref={timeLineRef} className="timeline-animate relative">
                <VerticalTimeline lineColor="#d97706" >
                    {timeLineElements.map((el, idx) =>
                        <VerticalTimelineElement
                            key={idx}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ecfdf5', color: '#d97706' }}
                            contentArrowStyle={{ borderRight: '12px solid #d97706' }}
                            date={el.step}
                            iconStyle={{ background: '#f59e0b  ', color: '#fff' }}
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
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition cursor-pointer"

                    >
                        Заяви оферта
                    </button>
                </Link>
            </div>
        </div>
    );
}