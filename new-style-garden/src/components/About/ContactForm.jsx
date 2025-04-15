import { FaEnvelope, FaUser, FaCommentDots, FaPhone } from 'react-icons/fa';
import Spinner from '../loading-spinner/Spinner.jsx';
import { Link } from 'react-router-dom';
import useContactForm from '../../hooks/useContactForm.js';

export default function ContactForm() {

    const { values, contactAction, isPending } = useContactForm()

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
                                placeholder="Вашето име*"
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
                                placeholder="Вашето запитване...*"
                                className="w-full bg-transparent outline-none resize-none h-24"
                                defaultValue={values.message}
                            />
                        </div>

                        <div className="flex items-center p-3 rounded-lg bg-gray-100">
                            <FaPhone className="text-gray-500 mr-2" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Телефон*"
                                className="w-full bg-transparent outline-none"
                                defaultValue={values.phone}
                            />
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                            <input
                                type="checkbox"
                                name="agree"
                                id="agreePrivacy"
                                className="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                            />
                            <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                                Съгласен съм с <Link to="/terms-and-conditions" className="text-green-700 font-semibold underline">политиката за поверителност*</Link>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-md shadow cursor-pointer"
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
