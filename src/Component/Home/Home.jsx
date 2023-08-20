import React from "react";
import NewArrivals from "../NewArrivals/NewArrivals";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import CarCategory from "../CarCategory/CarCategory";
import LatestNews from "../LatestNews/LatestNews";
import PopularBrand from "../PopularBrand/PopularBrand";
import MobileApp from "../MobileApp/MobileApp";
import ClientReviews from "../ClientReviews/ClientReviews";

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

			{/* Best Dealer in your city section - Tarikul Sk */}


			{/* Why choose us section - Emam */}


			{/* Popular Brand section - Emam */}
			<PopularBrand/>

			{/* Latest News section - Arafat */}
			<ClientReviews></ClientReviews>
			<LatestNews></LatestNews>
			<MobileApp></MobileApp>
		</div>
	);
};

export default Home;
