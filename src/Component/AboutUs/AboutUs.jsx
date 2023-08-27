import {
	AiOutlineCar,
	AiOutlineCheckCircle,
	AiOutlineArrowRight,
	AiFillCar,
	AiFillSetting,
} from "react-icons/Ai";
const AboutUs = () => {
	return (
		// responsive - mohosin
		<div className="md:w-9/12 px-4 m-auto mt-20">
			<div className=" bg-base-100 grid gap-10 border p-5 md:p-20 border-red-100 md:grid-cols-2">
				<div>
					<div className="md:w-64 auto p-5 flex bg-black text-white rounded-xl absolute left-40 ">
						{" "}
						<span className="text-red-600 md:text-3xl me-5">
							<AiFillSetting /> <AiFillCar />
						</span>{" "}
						<h6 className="text-xs md:text-xl w-9/12"> 30 Years Of Quality Service</h6>{" "}
					</div>
					<img src="https://i.ibb.co/bgXGT5N/cars.png" alt="" />
				</div>
				<div>
					<h4 className="text-red-600 text-lg md:text-2xl font-bold flex">
						{" "}
						<span className="mt-1 me-3">
							<AiOutlineCar />
						</span>{" "}
						About Us
					</h4>
					<h1 className="text-2xl md:text-5xl font-bold mb-4 mt-2">
						World Largest <span className="text-red-600">Car Dealer</span>{" "}
						Marketplace.
					</h1>
					<h6 className="text-sm">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour.
					</h6>
					<div className="mt-1">
						<h6 className="flex">
							{" "}
							<span className="text-red-600  mt-1 me-3">
								<AiOutlineCheckCircle />
							</span>{" "}
							At vero eos et accusamus et iusto odio.
						</h6>
						<h6 className="flex">
							{" "}
							<span className="text-red-600 mt-1 me-3">
								<AiOutlineCheckCircle />
							</span>{" "}
							Established fact that a reader will be distracted.
						</h6>
						<h6 className="flex">
							{" "}
							<span className="text-red-600 mt-1 me-3">
								<AiOutlineCheckCircle />
							</span>{" "}
							Sed ut perspiciatis unde omnis iste natus sit.
						</h6>
					</div>
					<button className="btn btn-sm md:btn-md mt-5 bg-red-600  flex justify-center items-center  text-white  hover:bg-black">
						Discover More <AiOutlineArrowRight />{" "}
					</button>
				</div>
			</div>
			{/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
		</div>
	);
};

export default AboutUs;
