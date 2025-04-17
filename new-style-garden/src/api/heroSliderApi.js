import { useEffect, useState } from "react";

const API_URL = 'https://server-tgjz.onrender.com/new-style-garden-gallery';

export const useHeroSliderImages = () => {
    const [heroSliderImages, setHeroSliderImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getHerSliderImages = async () => {
        try {
            const res = await fetch(`${API_URL}/carousel`);
            const data = await res.json();

            const parsed = data.map(url => {
                const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.(jpg|jpeg|png|webp)/i);
                return match ? match[1] : null;
            }).filter(Boolean);

            setHeroSliderImages(parsed);

        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getHerSliderImages();
    }, []);

    return { heroSliderImages, isLoading };
}