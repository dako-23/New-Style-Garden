import Lightbox from "yet-another-react-lightbox";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { Cloudinary } from "@cloudinary/url-gen";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function GallerySection({
    gallery,
    open,
    setOpen
}) {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dgvzzts4y'
        }
    });

    return (
        <>
            <section className="py-8 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                    >
                        {gallery.map((publicId, i) => {
                            const img = cld.image(publicId)
                                .format(auto())
                                .delivery(quality("auto"))
                                .resize(fill().width(800).height(600));

                            return (
                                <motion.div key={i} variants={childVariants}>
                                    <AdvancedImage
                                        cldImg={img}
                                        onClick={() => setOpen(i)}
                                        className="rounded-xl shadow-md w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <Lightbox
                open={open !== false}
                close={() => setOpen(false)}
                index={open}
                slides={gallery.map((publicId) => ({
                    src: cld.image(publicId).toURL()
                }))}
                styles={{
                    container: {
                        backgroundColor: "rgba(0,0,0,0.85)"
                    }
                }}
            />
        </>
    );
}