import React from "react";
import NewArrivals from "../NewArrivals/NewArrivals";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import CarCategory from "../CarCategory/CarCategory";

const Home = () => {
	return (
		<div>
			{/* add your component here  */}
			{/* Banner section */}
			{/*Sagor Ahmed Make Banner Section */}
			<Banner></Banner>

			{/* About Section */}
			<AboutUs></AboutUs>

			{/* New Arrivals section  - Emam */}
			<NewArrivals />

			{/* Car Body Types - Emam */}
			<CarCategory/>

		</div>
	);
};

export default Home;
