import Banner from "./Banner";
import WhyChooseUs from "./WhyChooseUs";



const Home = () => {
    return (
        <div className="mx-4 md:mx-20 lg:mx-32 mb-20">
            <Banner></Banner>
            <div className="mb-40">
                <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP_tests/HP_asset_white_bg.png" alt="" />
            </div>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;