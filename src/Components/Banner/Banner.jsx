import banner from '../../../album/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-3xl mx-auto" style={{ backgroundImage: 'url(../../../album/banner.png)' }}>

            <div className="hero-content text-center text-neutral-content">
                <div className=" w-full lg:w-3/4">
                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>

                    <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='space-x-8'>
                        <button className="btn bg-[#0BE58A] rounded-full border-none text-black">Explore Now</button>
                        <button className="btn bg-transparent border-2 border-white rounded-full text-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;