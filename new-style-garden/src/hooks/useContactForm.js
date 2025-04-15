import { useNavigate } from "react-router-dom";
import { useToast } from "./useToast.js";
import emailjs from '@emailjs/browser';
import { useActionState } from "react";

export default function useContactForm() {

    const navigate = useNavigate();
    const { error, info } = useToast();

    const handleSubmitContact = async (prevState, formData) => {
        const values = Object.fromEntries(formData);

        if (!values.name.trim()) {
            info("Моля, въведете име.");
            return values;
        }

        if (!values.message.trim()) {
            info("Моля, въведете съобщение.");
            return values;
        }

        if (!values.phone.trim()) {
            info("Моля, въведете валиден телефонен номер.");
            return values;
        }

        if (!values.agree) {
            info("Трябва да приемете политиката за поверителност.");
            return values;
        }

        try {
            await emailjs.send(
                'service_finuo7b',
                'template_9s5cp6p',
                {
                    title: 'New Style Garden | Ново запитване',
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    phone: values.phone
                },
                'zhdhBPBbfAsc09QO1'
            );

            navigate('/thank-you');

            return {
                name: '',
                email: '',
                message: '',
                phone: '',
                agree: false
            };
        } catch (err) {
            error('Възникна грешка. Опитайте отново по-късно.');
        }

        return values;
    };

    const [values, contactAction, isPending] = useActionState(handleSubmitContact, {
        name: '',
        email: '',
        message: '',
        phone: '',
        agree: false
    });

    return {
        isPending,
        contactAction,
        values
    }
}