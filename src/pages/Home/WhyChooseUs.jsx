import { Link } from "react-router-dom";


const WhyChooseUs = () => {
    return (
        <div className="space-y-16">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/support_globe.png" className="max-w-md w-full rounded-lg " />
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold text-gray-700">Stay on track to
                            reach your goals, faster</h1>
                        <p className="py-6">Get a high-level overview of your organization with customizable dashboards. Make confident decisions and easily scale workflows for your evolving needs.</p>
                        <Link to={'/login'}>
                    <button className="btn hover:bg-[#515fdd] bg-[#4f65e0] text-white rounded-full px-8 py-2">Let's Explore</button>
                    </Link>
                    </div>
                </div>
            </div>



            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <img src="https://th.bing.com/th/id/OIG.u0uaiYXQpoEixMCVQdAQ?pid=ImgGn" className="max-w-sm w-full rounded-2xl " />
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold text-gray-700">Everything you need for any workflow</h1>
                        <p className="py-6">Easily build your ideal workflow with monday.com building blocks.</p>
                        <Link to={'/login'}>
                    <button className="btn hover:bg-[#515fdd] bg-[#4f65e0] text-white rounded-full px-8 py-2">Let's Explore</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;