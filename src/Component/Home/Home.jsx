import React from 'react';
import NewArrivals from '../NewArrivals/NewArrivals';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            {/* add your component here  */}
            {/* Banner section */}
                {/*Sagor Ahmed Make Banner Section */}
                <Banner></Banner>
            {/* About Section */}


            {/* New Arrivals section */}
            <NewArrivals/>
        </div>
    );
};

export default Home;