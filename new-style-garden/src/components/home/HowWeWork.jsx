import { FaPhone, FaEye, FaClipboardList, FaCheckCircle, FaTools, FaSmile } from 'react-icons/fa';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
    { icon: <FaPhone />, label: 'Свързвате се с нас' },
    { icon: <FaEye />, label: 'Безплатен оглед' },
    { icon: <FaClipboardList />, label: 'Изпращаме оферта' },
    { icon: <FaCheckCircle />, label: 'Вие приемате' },
    { icon: <FaTools />, label: 'Реализираме проекта' },
    { icon: <FaSmile />, label: 'Оставате доволни' },
];

export default function HowWeWork() {
    const sectionRef = useRef();
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' }); // тригърва се когато приближи

    return (
        <section
            ref={sectionRef}
            className="py-16 px-6 bg-gray-100 relative overflow-hidden"
        >
            <h2 className="text-center text-3xl font-bold text-green-800 mb-16">Как работим</h2>
            <motion.svg
                viewBox="0 0 1200 200"
                className="w-full h-48 absolute top-[80px] left-0 z-0"
            >
                <motion.path
                    d="M0,100 Q100,0 200,100 T400,100 T600,100 T800,100 T1000,100 T1200,100"
                    fill="transparent"
                    stroke="#16a34a"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2.5, ease: 'easeOut', delay: 0.3 }}
                />
            </motion.svg>

            <div className="flex justify-between items-center relative z-10 max-w-6xl mx-auto mt-20">
                {steps.map((step, i) => {
                    const iconY = i % 2 === 0 ? '-translate-y-16.5' : 'translate-y-1';
                    return (
                        <motion.div
                            key={i}
                            className={`text-center w-28 relative flex flex-col items-center ${iconY}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full shadow-lg text-xl mb-2">
                                {step.icon}
                            </div>
                            <p className="text-sm font-medium text-gray-700">{step.label}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}