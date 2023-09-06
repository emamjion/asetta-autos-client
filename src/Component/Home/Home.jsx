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
import HomeSearch from "../HomeSearch/HomeSearch";
import OurPartner from "../OurPartner/OurPartner";
import LookingCar from "../LookingCar/LookingCar";
import SubmitVehicle from "../SubmitVehicle/SubmitVehicle";
import SpecialServices from "../SpecialServices/SpecialServices";

const Home = () => {
	return (
		<div>
			{/* add your component here  */}
			{/* Banner section */}
			{/*Sagor Ahmed Make Banner Section */}
			<Banner></Banner>

			{/* Home Search Section - Emam */}
			{/* <HomeSearch/> */}

			{/* About Section */}
			<AboutUs></AboutUs>

			{/* Special Services section */}
			<SpecialServices/>

			{/* New Arrivals section  - Emam */}
			<NewArrivals />

			{/* Looking for a car section - Emam */}
			<LookingCar/>

			{/* Car Body Types - Emam */}
			<CarCategory/>

			{/* Best Dealer in your city section - Arafat */}
			<BestDealer></BestDealer>

			{/* Why choose us section - Emam */}
			<ChooseUs/>

			{/* Popular Brand section - Emam */}
			<PopularBrand/>

			{/* Testimonials section - Emam */}
			<Testimonials/>

			{/* Latest News section - Emam */}
			<ClientReviews></ClientReviews>
			
			{/* Latest News section - arafat */}
			<LatestNews></LatestNews>

			{/* Our partner section - Emam */}
			<OurPartner/>

			{/* Mobile App section - Arafat */}
			<MobileApp></MobileApp>

			{/* Submit your vehicle section - Emam */}
			<SubmitVehicle/>
		</div>
	);
};

export default Home;
