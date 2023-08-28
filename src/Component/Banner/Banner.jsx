import React from "react";
import "./Banner.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/images/Banner/banner-1.png";
import img2 from "../../assets/images/Banner/banner-2.png";
import img3 from "../../assets/images/Banner/banner-3.png";
import img4 from "../../assets/images/Banner/banner-4.png";
import img5 from "../../assets/images/Banner/banner-5.png";
import img6 from "../../assets/images/Banner/banner-6.png";
import img7 from "../../assets/images/Banner/banner-7.png";
import img8 from "../../assets/images/Banner/banner-8.png";

const Banner = () => {
	return (
		<Carousel
			className=""
			infiniteLoop={true}
			autoPlay={true}
			interval={3000}
		>
			<div className="">
				<img className="object-cover h-[80vh] rounded-md" src={img1} />
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img2} />
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img3} />
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img4} />
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img5} />
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img6} />
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img7} />
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img8} />
			</div>
		</Carousel>
	);
};

export default Banner;
