import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import GardenCareTimeline from "./GardenCareTimeline.jsx";



export default function GardenCareServices() {

    return (
        <div className="bg-main">
            <HeaderBanner title={'Поддръжка'} />
            <GardenCareTimeline />
        </div>
    );
}