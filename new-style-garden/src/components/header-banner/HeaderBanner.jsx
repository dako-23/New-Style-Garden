import React from "react";

export default function HeaderBanner({ title }) {
    return (
        <div
            className="relative w-full h-80 flex items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: 'url("/page-pattern3.jpg")' }}
        >
            <div className="absolute inset-0 bg-opacity-50 z-0"></div>

            <div className="relative z-10 text-white">
                <h1 className="text-5xl font-bold mt-18">{title}</h1>
            </div>
        </div>
    );
}
