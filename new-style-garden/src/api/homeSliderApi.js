import { useEffect, useState } from "react";

const API_URL = 'https://server-tgjz.onrender.com/new-style-garden-gallery';

export const useHomeSlider = () => {
    const [homeSlider, setHomeSlider] = useState([]);

    const getHomeSlider = async () => {
        try {
            const res = await fetch(`${API_URL}/home-slider`);
            const data = await res.json();

            const parsed = data.map(url => {
                const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.(jpg|jpeg|png|webp)/i);
                return match ? match[1] : null;
            }).filter(Boolean);

            setHomeSlider(parsed);

        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getHomeSlider();
    }, []);

    return { homeSlider };
}