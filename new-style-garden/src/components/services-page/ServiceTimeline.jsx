import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaTools, FaSeedling, FaWrench, FaTint, FaLeaf } from 'react-icons/fa';



export default function ServiceTimeline() {
    return (
        <div className="py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                Изграждане и поддръжка на поливна система
            </h2>

            <VerticalTimeline lineColor="#16a34a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#ecfdf5', color: '#065f46' }}
                    contentArrowStyle={{ borderRight: '7px solid #ecfdf5' }}
                    date="Стъпка 1"
                    iconStyle={{ background: '#16a34a', color: '#fff' }}
                    icon={<FaSeedling />}
                >
                    <h3 className="vertical-timeline-element-title font-semibold">
                        Консултация и оглед на обекта
                    </h3>
                    <p>Професионален оглед на терена и оценка на нуждите от поливна система.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#ecfdf5', color: '#065f46' }}
                    contentArrowStyle={{ borderRight: '7px solid #ecfdf5' }}
                    date="Стъпка 2"
                    iconStyle={{ background: '#16a34a', color: '#fff' }}
                    icon={<FaWrench />}
                >
                    <h3 className="vertical-timeline-element-title font-semibold">
                        Проектиране на системата
                    </h3>
                    <p>Изготвяне на индивидуален проект, съобразен с растителността и терена.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#ecfdf5', color: '#065f46' }}
                    contentArrowStyle={{ borderRight: '7px solid #ecfdf5' }}
                    date="Стъпка 3"
                    iconStyle={{ background: '#16a34a', color: '#fff' }}
                    icon={<FaTools />}
                >
                    <h3 className="vertical-timeline-element-title font-semibold">
                        Монтаж и инсталация
                    </h3>
                    <p>Професионално изграждане на поливната система с висококачествени материали.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#ecfdf5', color: '#065f46' }}
                    contentArrowStyle={{ borderRight: '7px solid #ecfdf5' }}
                    date="Стъпка 4"
                    iconStyle={{ background: '#16a34a', color: '#fff' }}
                    icon={<FaTint />}
                >
                    <h3 className="vertical-timeline-element-title font-semibold">
                        Тестване и обучение
                    </h3>
                    <p>Проверка на работата на системата и инструкции към клиента за използване.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#ecfdf5', color: '#065f46' }}
                    contentArrowStyle={{ borderRight: '7px solid #ecfdf5' }}
                    date="Стъпка 5"
                    iconStyle={{ background: '#16a34a', color: '#fff' }}
                    icon={<FaLeaf />}
                >
                    <h3 className="vertical-timeline-element-title font-semibold">
                        Абонаментна поддръжка
                    </h3>
                    <p>Редовна профилактика, почистване и настройка на системата за оптимална работа.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}