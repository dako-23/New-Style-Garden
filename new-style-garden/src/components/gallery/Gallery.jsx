import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import SEO from "../seo/SEO.JSX";
import FullGallery from "./FullGallery.jsx";

export default function Gallery() {
    return (
        <>
            <SEO
                title="New Style Garden | Галерия"
                description="Професионално озеленяване и поддръжка, изграждане на поливни системи, затревяване с чим и семена. Доверете се на New Style Garden – естетика, природа и спокойствие в градината ви."
                url="https://newstylegarden.com/"
                image="https://res.cloudinary.com/dgvzzts4y/image/upload/v1744802263/gallery/hero-slider1_hiurqf_xcibzq.jpg"
            />
            <HeaderBanner title={'Галерия'} />
            <FullGallery />
        </>
    );
}