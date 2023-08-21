import React from "react";
import NewArrivals from "../NewArrivals/NewArrivals";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import CarCategory from "../CarCategory/CarCategory";
import LatestNews from "../LatestNews/LatestNews";
import ChooseUs from "../ChooseUs/ChooseUs";
import PopularBrand from "../PopularBrand/PopularBrand";
import ClientReviews from "../ClientReviews/ClientReviews";
import MobileApp from "../MobileApp/MobileApp";
import BestDealer from "../BestDealer/BestDealer";

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

			<BestDealer></BestDealer>

			{/* Why choose us section - Emam */}
			<ChooseUs/>

			{/* Popular Brand section - Emam */}
			<PopularBrand/>

			{/* Latest News section - Arafat */}
			<ClientReviews></ClientReviews>
			<LatestNews></LatestNews>

			{/* Mobile App section - Arafat */}
			<MobileApp></MobileApp>
		</div>
	);
};

export default Home;
