import HeaderBanner from "../header-banner/HeaderBanner.jsx";
import OurServices from "./OurServices.jsx";


export default function Services() {
    return (
        <div className="bg-main">
            <HeaderBanner title={'Услуги'} />
            <OurServices />
        </div>
    );
}