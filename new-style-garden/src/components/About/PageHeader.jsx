
export default function PageHeader() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold text-gray-800 border-l-4 border-green-600 pl-4 mb-6">
          Свържете се с нас
        </h2>
      </div>
      <p className="text-lg text-gray-800 text-center max-w-3xl mx-auto mb-10 font-semibold">
        Изпратете ни запитване още сега, за да изготвим за вас индивидуална оферта,
        съобразена с нуждите и спецификата на проекта. Нашите специалисти ще се свържат с вас
        за уточнение на детайлите и за организиране на оглед, при необходимост.
      </p>
    </>
  );
}