
// import MapComponent from "./MapComponent.jsx";
import { useState } from "react";
import ContactForm from "./ContactForm.jsx";
import HeaderBanner from "../header-banner/HeaderBanner.jsx";

export default function About() {

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSuccess = (msg) => {
        setSuccess(msg);
    };

    const handleError = (msg) => {
        setError(msg);
    };

    return (
        <>
            <HeaderBanner title={'Контакти'} />
            <div className="max-w-6xl mx-auto py-16 px-6">

                <h2 className="text-3xl font-extrabold text-gray-700 text-center mb-4">
                    <span className="text-gray-700">Свържете се с нас</span>
                </h2>
                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 font-semibold">
                    Изпратете ни запитване още сега, за да изготвим за вас индивидуална оферта,
                    съобразена с нуждите и спецификата на проекта. Нашите специалисти ще се свържат с вас
                    за уточнение на детайлите и за организиране на оглед, при необходимост.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ContactForm onSuccess={handleSuccess} onError={handleError} />
                    <div className="relative w-full h-[300px] rounded-xl shadow-lg overflow-hidden">
                        {/* <MapComponent /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
