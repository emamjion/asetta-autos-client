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
import Button from "../Button/Button";

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
				<div className="absolute flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#181818] to-[rgba(21,21,21,0)]">
					<div className="space-y-2 md:space-y-6 w-3/4 md:pl-[120px]">
						<h4 className="text-[#ef1721] font-medium tracking-widest text-2xl">Welcome to Asetta Auto's</h4>
						<hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
						<h1 className="text-white text-4xl md:text-7xl font-bold">Best Way To Find Your <span className="text-[#ef1721]">Dream</span> Car</h1>
						<p className="text-white">
							There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.
						</p>
						<div className="flex items-center justify-center gap-4">
							<Button button={'About More'} />
							<Button button={'Discover More'} />
						</div>
					</div>
				</div>
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img2} />
				<div className="absolute flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#181818] to-[rgba(21,21,21,0)]">
					<div className="space-y-2 md:space-y-6 w-3/4 md:pl-[120px]">
						<h4 className="text-[#ef1721] font-medium tracking-widest text-2xl">Welcome to Asetta Auto's</h4>
						<hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
						<h1 className="text-white text-4xl md:text-7xl font-bold">Best Way To Find Your <span className="text-[#ef1721]">Dream</span> Car</h1>
						<p className="text-white">
							There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.
						</p>
						<div className="flex items-center justify-center gap-4">
							<Button button={'About More'} />
							<Button button={'Discover More'} />
						</div>
					</div>
				</div>
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img3} />
				<div className="absolute flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#181818] to-[rgba(21,21,21,0)]">
					<div className="space-y-2 md:space-y-6 w-3/4 md:pl-[120px]">
						<h4 className="text-[#ef1721] font-medium tracking-widest text-2xl">Welcome to Asetta Auto's</h4>
						<hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
						<h1 className="text-white text-4xl md:text-7xl font-bold">Best Way To Find Your <span className="text-[#ef1721]">Dream</span> Car</h1>
						<p className="text-white">
							There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.
						</p>
						<div className="flex items-center justify-center gap-4">
							<Button button={'About More'} />
							<Button button={'Discover More'} />
						</div>
					</div>
				</div>
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img4} />
				<div className="absolute flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#181818] to-[rgba(21,21,21,0)]">
					<div className="space-y-2 md:space-y-6 w-3/4 md:pl-[120px]">
						<h4 className="text-[#ef1721] font-medium tracking-widest text-2xl">Welcome to Asetta Auto's</h4>
						<hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
						<h1 className="text-white text-4xl md:text-7xl font-bold">Best Way To Find Your <span className="text-[#ef1721]">Dream</span> Car</h1>
						<p className="text-white">
							There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.
						</p>
						<div className="flex items-center justify-center gap-4">
							<Button button={'About More'} />
							<Button button={'Discover More'} />
						</div>
					</div>
				</div>
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img5} />
				<div className="absolute flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#181818] to-[rgba(21,21,21,0)]">
					<div className="space-y-2 md:space-y-6 w-3/4 md:pl-[120px]">
						<h4 className="text-[#ef1721] font-medium tracking-widest text-2xl">Welcome to Asetta Auto's</h4>
						<hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
						<h1 className="text-white text-4xl md:text-7xl font-bold">Best Way To Find Your <span className="text-[#ef1721]">Dream</span> Car</h1>
						<p className="text-white">
							There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.
						</p>
						<div className="flex items-center justify-center gap-4">
							<Button button={'About More'} />
							<Button button={'Discover More'} />
						</div>
					</div>
				</div>
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img6} />
				<div className="absolute flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#181818] to-[rgba(21,21,21,0)]">
					<div className="space-y-2 md:space-y-6 w-3/4 md:pl-[120px]">
						<h4 className="text-[#ef1721] font-medium tracking-widest text-2xl">Welcome to Asetta Auto's</h4>
						<hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
						<h1 className="text-white text-4xl md:text-7xl font-bold">Best Way To Find Your <span className="text-[#ef1721]">Dream</span> Car</h1>
						<p className="text-white">
							There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.
						</p>
						<div className="flex items-center justify-center gap-4">
							<Button button={'About More'} />
							<Button button={'Discover More'} />
						</div>
					</div>
				</div>
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img7} />
				<div className="absolute flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#181818] to-[rgba(21,21,21,0)]">
					<div className="space-y-2 md:space-y-6 w-3/4 md:pl-[120px]">
						<h4 className="text-[#ef1721] font-medium tracking-widest text-2xl">Welcome to Asetta Auto's</h4>
						<hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
						<h1 className="text-white text-4xl md:text-7xl font-bold">Best Way To Find Your <span className="text-[#ef1721]">Dream</span> Car</h1>
						<p className="text-white">
							There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.
						</p>
						<div className="flex items-center justify-center gap-4">
							<Button button={'About More'} />
							<Button button={'Discover More'} />
						</div>
					</div>
				</div>
			</div>
			<div>
				<img className="object-cover h-[80vh] rounded-md" src={img8} />
				<div className="absolute flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#181818] to-[rgba(21,21,21,0)]">
					<div className="space-y-2 md:space-y-6 w-3/4 md:pl-[120px]">
						<h4 className="text-[#ef1721] font-medium tracking-widest text-2xl">Welcome to Asetta Auto's</h4>
						<hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
						<h1 className="text-white text-4xl md:text-7xl font-bold">Best Way To Find Your <span className="text-[#ef1721]">Dream</span> Car</h1>
						<p className="text-white">
							There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.
						</p>
						<div className="flex items-center justify-center gap-4">
							<Button button={'About More'} />
							<Button button={'Discover More'} />
						</div>
					</div>
				</div>
			</div>
		</Carousel>
	);
};

export default Banner;
