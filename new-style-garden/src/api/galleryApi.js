import { useEffect, useState } from "react";

const API_URL = 'https://server-tgjz.onrender.com/new-style-garden-gallery';

export const useGallery = () => {
    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAll = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            const parsed = data.map(url => {
                const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.(jpg|jpeg|png|webp)/i);
                return match ? match[1] : null;
            }).filter(Boolean);

            setGallery(parsed);

        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAll();
    }, []);

    return { gallery, isLoading };
}

