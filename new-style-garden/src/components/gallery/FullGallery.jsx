import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import { useGallery } from "../../api/galleryApi.js";
import { SyncLoader } from "react-spinners";
import GallerySection from "./GallerySection.jsx";

export default function FullGallery() {
    const { gallery, isLoading } = useGallery();
    const [open, setOpen] = useState(false);

    return (
        <>
            {isLoading ? (
                <>
                    <div className="flex justify-center pt-8">
                        <SyncLoader color="#15803d" size={12} margin={6} speedMultiplier={0.9} />
                    </div>
                    <section className="py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="animate-pulse h-64 w-full bg-gray-300 rounded-xl" />
                        ))}
                    </section>
                </>
            ) : (
                <GallerySection gallery={gallery} open={open} setOpen={setOpen} />
            )}
        </>
    );
}
