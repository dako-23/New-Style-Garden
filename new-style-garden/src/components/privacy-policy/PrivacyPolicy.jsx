import HeaderBanner from "../header-banner/HeaderBanner.jsx";


export default function PrivacyPolicy() {
    return (
        <>
            <HeaderBanner title={'Политика за поверителност'} />
            <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">Политика за поверителност</h1>

                <p className="mb-4">
                    Настоящата политика за поверителност цели да Ви информира как New Style Garden ("ние") обработва, съхранява и защитава Вашите лични данни във връзка с използването на нашия уебсайт и услугите, които предоставяме.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Обща информация</h2>
                <p className="mb-4">
                    Ние обработваме лични данни съгласно Общия регламент за защита на личните данни (GDPR) и Закона за защита на личните данни.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Кой обработва личните Ви данни:</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Наименование: New Style Garden</li>
                    <li>ЕИК/БУЛСТАТ: BG205083920</li>
                    <li>Седалище и адрес: БЪЛГАРИЯ, гр. София, р-н Кремиковци, 58, 3А</li>
                    <li>E-mail: newstylegardenn@gmail.com</li>
                    <li>Уебсайт: www.newstylegarden.com</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Какви данни събираме:</h2>
                <p className="mb-4">
                    Събираме и обработваме само необходимите данни, предоставени от Вас чрез контактна форма, запитвания, поръчки или бюлетин. Това включва:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Име</li>
                    <li>Имейл</li>
                    <li>Телефон</li>
                    <li>Съобщения/запитвания</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Цели на обработката:</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Отговаряне на запитвания</li>
                    <li>Изготвяне на оферти</li>
                    <li>Изпращане на маркетинг бюлетини (при дадено съгласие)</li>
                    <li>Анализ и подобрение на нашите услуги</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Период на съхранение:</h2>
                <p className="mb-4">
                    Данните се съхраняват до 5 години или до оттегляне на съгласието Ви, освен ако не се изисква по закон по-дълъг срок.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Вашите права:</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Право на достъп</li>
                    <li>Право на коригиране</li>
                    <li>Право "да бъдете забравени"</li>
                    <li>Право на ограничаване на обработката</li>
                    <li>Право на преносимост</li>
                    <li>Право на възражение</li>
                </ul>

                <p className="mb-4">
                    За да упражните тези права, моля свържете се с нас на посочения имейл.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Контакти на надзорния орган:</h2>
                <p className="mb-4">
                    Комисия за защита на личните данни <br />
                    гр. София 1592, бул. „Проф. Цветан Лазаров” № 2 <br />
                    Телефон: 02 915 3 518 <br />
                    Уебсайт: <a href="https://www.cpdp.bg" className="text-blue-600 underline">www.cpdp.bg</a>
                </p>
            </section>
        </>
    );
}