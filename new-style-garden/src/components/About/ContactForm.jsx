import { useActionState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaUser, FaCommentDots, FaPhone } from 'react-icons/fa';
import Spinner from '../loading-spinner/Spinner.jsx';

export default function ContactForm({ onSuccess, onError }) {

    const handleSubmitContact = async (prevState, formData) => {
        const values = Object.fromEntries(formData);

        try {
            await emailjs.send(
                'service_finuo7b',
                'template_9s5cp6p',
                {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                },
                'zhdhBPBbfAsc09QO1'
            );
            values.title = '',
                values.name = '',
                values.email = '',
                values.message = '',
                values.phone = '',

                onSuccess('Email sent successfully!');

        } catch (err) {
            onError('Error sending email.');
        }

        return values;
    };

    const [values, contactAction, isPending] = useActionState(handleSubmitContact, {
        name: '',
        email: '',
        message: '',
        phone: '',
    });

    return (
        <>
            {isPending
                ?
                <Spinner />
                :
                    <form
                        action={contactAction}
                        className="bg-white p-6 shadow-lg rounded-xl border border-gray-200"
                    >
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                            <FaEnvelope className="text-gray-700" /> Изпрати запитване
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center  p-3 rounded-lg bg-gray-100">
                                <FaUser className="text-gray-500 mr-2" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Вашето име"
                                    className="w-full bg-transparent outline-none"
                                    defaultValue={values.name}
                                />
                            </div>

                            <div className="flex items-center  p-3 rounded-lg bg-gray-100">
                                <FaEnvelope className="text-gray-500 mr-2" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Имейл"
                                    className="w-full bg-transparent outline-none"
                                    defaultValue={values.email}
                                />
                            </div>

                            <div className="flex items-start  p-3 rounded-lg bg-gray-100">
                                <FaCommentDots className="text-gray-500 mr-2 mt-1" />
                                <textarea
                                    name="message"
                                    placeholder="Вашето запитване..."
                                    className="w-full bg-transparent outline-none resize-none h-24"
                                    defaultValue={values.message}
                                />
                            </div>

                            <div className="flex items-center p-3 rounded-lg bg-gray-100">
                                <FaPhone className="text-gray-500 mr-2" />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Телефон"
                                    className="w-full bg-transparent outline-none"
                                    defaultValue={values.phone}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition cursor-pointer"
                                disabled={isPending}
                            >
                                Изпрати запитване
                            </button>
                        </div>
                    </form>
            }

        </>
    );

}
