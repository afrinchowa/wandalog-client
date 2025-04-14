import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/banner1.jpg";
import img2 from "../../../assets/banner2.jpg";

const Banner = () => {
    return (
        <div className="w-full h-[70vh] flex justify-center">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                stopOnHover={true}
                className="w-full"
            >
                {/* Slide 1 */}
                <div className="relative h-[70vh] flex justify-center items-center">
                    <img src={img1} alt="Banner 1" className="w-auto h-full object-cover rounded-lg" />
                    <div className="absolute bg-black bg-opacity-50 text-white p-6 rounded-lg text-center">
                        <h2 className="text-3xl font-bold">Welcome to Our Blog</h2>
                        <p className="mt-2 text-lg">Explore stories, insights, and tips from our community.</p>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="relative h-[70vh] flex justify-center items-center">
                    <img src={img2} alt="Banner 2" className="w-auto h-full object-cover rounded-lg" />
                    <div className="absolute bg-black bg-opacity-50 text-white p-6 rounded-lg text-center">
                        <h2 className="text-3xl font-bold">Discover Inspiring Journeys</h2>
                        <p className="mt-2 text-lg">Read about amazing experiences and lessons from bloggers.</p>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="relative h-[70vh] flex justify-center items-center">
                    <img src={img1} alt="Banner 3" className="w-auto h-full object-cover rounded-lg" />
                    <div className="absolute bg-black bg-opacity-50 text-white p-6 rounded-lg text-center">
                        <h2 className="text-3xl font-bold">Join Our Writing Community</h2>
                        <p className="mt-2 text-lg">Share your thoughts, ideas, and stories with the world.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
