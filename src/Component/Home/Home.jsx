import React from "react";
import NewArrivals from "../NewArrivals/NewArrivals";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import CarCategory from "../CarCategory/CarCategory";
import LatestNews from "../LatestNews/LatestNews";
import ChooseUs from "../ChooseUs/ChooseUs";
import Testimonials from "../Testimonials/Testimonials";
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
			{/* todo - mohosin */}
			{/* <Banner></Banner> */}

			{/* About Section */}
			<AboutUs></AboutUs>

			{/* New Arrivals section  - Emam */}
			<NewArrivals />

			{/* Car Body Types - Emam */}
			<CarCategory/>

			{/* Best Dealer in your city section - Arafat */}

			<BestDealer></BestDealer>

			{/* Why choose us section - Emam */}
			<ChooseUs/>

			{/* Popular Brand section - Emam */}
			<PopularBrand/>

			{/* Testimonials section  */}
			<Testimonials/>

			{/* Latest News section - Arafat */}
			<ClientReviews></ClientReviews>
			<LatestNews></LatestNews>

			{/* Mobile App section - Arafat */}
			<MobileApp></MobileApp>
		</div>
	);
};

export default Home;
