import React from "react";

export default function FacebookWidget() {
    return (
        <div className="w-full md:w-[340px] h-[500px] overflow-hidden rounded-xl shadow-lg border border-gray-300">
            <iframe
                title="New Style Garden OOD"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNewStylegarden&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="340"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
        </div>
    );
}
