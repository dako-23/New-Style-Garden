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
    const isInView = useInView(sectionRef, { once: true, margin: '-200px' }); // тригърва се когато приближи

    return (
        <div>
            <div className="flex justify-center">
                <h2 className="text-center text-3xl font-bold text-gray-800 border-l-4 border-green-600 pl-4 mb-10">Как работим</h2>
            </div>
            <section
                ref={sectionRef}
                className="py-16 px-6 bg-gray-50 rounded-xl shadow-md relative overflow-hidden"
            >
                <div className="overflow-x-auto md:overflow-visible">

                <motion.svg
                    viewBox="0 0 1200 200"
                    className="hidden md:flex w-full h-62 absolute top-[30px] left-0 z-0"
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
                        transition={{ duration: 2.5, ease: 'easeOut', }}
                    />
                </motion.svg>

                <div className="hidden md:flex justify-between items-center relative z-10 max-w-6xl mx-auto mt-20">
                    {steps.map((step, i) => {
                        const iconY = i % 2 === 0 ? '-translate-y-19' : 'translate-y-12';
                        return (
                            <motion.div
                                key={i}
                                className={`text-center -mx-20 w-12 relative flex flex-col items-center ${iconY}`}
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
                <div className="flex flex-col gap-10 md:hidden max-w-md mx-auto z-10  relative mt-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center border-l-4 border-green-600 pl-4 gap-4"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full shadow-lg text-xl">
                                {step.icon}
                            </div>
                            <p className="text-base font-medium text-gray-700">{step.label}</p>
                        </motion.div>
                    ))}
                </div>
                </div>
            </section>
        </div>
    );
}