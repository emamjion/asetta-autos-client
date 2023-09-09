// import {
// 	AiOutlineCar,
// 	AiOutlineCheckCircle,
// 	AiOutlineArrowRight,
// 	AiFillCar,
// 	AiFillSetting,
// } from "react-icons/Ai";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
// import aboutImg from '../../assets/images/about/about-img.png'
// TODO: comment kore rakha icon gulo te react icon bosbe - avoid ai icons
const AboutUs = () => {
	return (
		// responsive - mohosin
		<div className="md:w-9/12 px-4 m-auto mt-20">
			<div className=" bg-base-100 grid gap-10 border p-5 md:p-20 border-red-100 md:grid-cols-2">
				<div>
					<div className="md:w-64 auto p-5 flex bg-black text-white rounded-xl absolute left-40 ">
						{" "}
						<span className="text-red-600 md:text-3xl me-5">
							{/* <AiFillSetting /> <AiFillCar /> */}
						</span>{" "}
						<h6 className="text-xs md:text-xl w-9/12"> 30 Years Of Quality Service</h6>{" "}
					</div>
					<img src="https://i.ibb.co/bgXGT5N/cars.png" alt="" />
					{/* <img src={aboutImg} /> */}
				</div>
				<div>
					<h4 className="text-red-600 text-lg md:text-2xl font-bold flex">
						{" "}
						{/* <span className="mt-2 me-3">
							<AiOutlineCar />
						</span>{" "} */}
						About Us
					</h4>
					<h1 className="text-2xl md:text-5xl font-bold mb-4 mt-2">
						World Largest <span className="text-red-600">Car Dealer</span>{" "}
						Marketplace.
					</h1>
					<h6 className="text-sm my-3">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour.
					</h6>
					<div className="mt-2">
						<h6 className="flex">
							{" "}
							{/* <span className="text-red-600 mt-2 me-3">
								<AiOutlineCheckCircle />
							</span>{" "} */}
							At vero eos et accusamus et iusto odio.
						</h6>
						<h6 className="flex">
							{" "}
							{/* <span className="text-red-600 mt-2 me-3">
								<AiOutlineCheckCircle />
							</span>{" "} */}
							Established fact that a reader will be distracted.
						</h6>
						<h6 className="flex">
							{" "}
							{/* <span className="text-red-600 mt-2 me-3">
								<AiOutlineCheckCircle />
							</span>{" "} */}
							Sed ut perspiciatis unde omnis iste natus sit.
						</h6>
					</div>
					{/* <button className="btn btn-sm md:btn-md mt-5 bg-red-600  flex justify-center items-center  text-white  hover:bg-black">
						Discover More <AiOutlineArrowRight />{" "}
					</button> */}
					<div className="mt-6">
						<Link to='/about'>
							<Button 
								button={'About More'} 
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
