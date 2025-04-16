import React from "react";
import { FadeLoader } from "react-spinners";

export default function FadeSpinner() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white gap-12 z-50">
            <img
                src="https://res.cloudinary.com/dgvzzts4y/image/upload/v1744713337/main-logo_b5sax8.svg"
                alt="New Style Garden"
                className="w-60"
            />

            <FadeLoader
                color="#15803d"
                height={18}
                width={4}
                radius={2}
                margin={4}
                speedMultiplier={1.1}
            />

            <p className="text-gray-600 mt-2 text-xl font-medium">
                Зареждаме вашата градина...
            </p>
        </div>
    );
}
