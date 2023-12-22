import { Link } from "react-router-dom";

const Banner = () => {
    return (
        // ----------------------------------------------------banner section ----
        <div className="hero w-full  h-[80vh]   "
        // style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIG.wXPK9eL7sV1fxJJ3OASr?w=1024&h=1024&rs=1&pid=ImgDetMain)' }}
        >

            <div className=" text-center text-neutral-content ">
                <div className="max-w-3xl space-y-12   ">
                    {/*-------------------------------------- ---- heading-----  */}
                    <h1 className="mb-5 text-3xl md:text-5xl lg:text-6xl font-bold mx-4 text-gray-700 ">A platform built for a
                        new way of working</h1>
                    {/* --------------------------------------------------------subheading------------ */}
                    <h2 className="text-black text-base md:text-xl">What would you like to manage with TODOish.com Work OS?
                    </h2>
                  <button>
                  <Link to={'/login'}>
                    <button className="btn hover:bg-[#515fdd] bg-[#4f65e0] text-white rounded-full px-8 py-2">Let's Explore</button>
                    </Link>
                  </button>
                    <br />
                    <br />
                    <small className="text-gray-700">No credit card needed   ✦   Unlimited time on Free plan</small>
                </div>
            </div>
        </div>
    );
};

export default Banner;
