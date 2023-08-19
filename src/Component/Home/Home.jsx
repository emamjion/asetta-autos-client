import React from "react";
import NewArrivals from "../NewArrivals/NewArrivals";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Tittle from "../Shared/Tittle/Tittle";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
	return (
		<div>
			{/* add your component here  */}
			{/* Banner section */}
			{/*Sagor Ahmed Make Banner Section */}
			<Banner></Banner>

			{/* About Section */}
			<AboutUs></AboutUs>

			{/* New Arrivals section */}
			<NewArrivals />
			<LatestNews></LatestNews>
		</div>
	);
};

export default Home;
