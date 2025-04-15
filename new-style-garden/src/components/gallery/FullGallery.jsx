import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gallery from '../../images/gallery.json'

export default function FullGallery() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="bg-gray-100 py-12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {gallery.map((src, i) => (
                        <img
                            key={i}
                            onClick={() => setOpen(i)}
                            src={src}
                            alt={`gallery ${i}`}
                            className="rounded-xl shadow-md w-full h-128 object-cover hover:scale-96 transition duration-300 cursor-zoom-in"
                        />
                    ))}
                </div>
            </section>
            <Lightbox
                open={open !== false}
                close={() => setOpen(false)}
                index={open}
                slides={gallery.map((src) => ({ src }))}
                styles={{
                    container: {
                        backgroundColor: "rgba(0,0,0,0.85)"
                    }
                }}
            />
        </>
    );
}
