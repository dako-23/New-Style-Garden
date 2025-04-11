import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import IrrigationTimeline from "./IrrigationTimeline.jsx";

export default function IrrigationServices() {
    return (
        <div className="bg-main-blue">
            <HeaderBanner title={'Поливни системи'} />
            <IrrigationTimeline />
        </div>
    );
}