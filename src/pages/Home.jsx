import React from 'react';
import Banner from '../components/Banner';
import StaticSections from '../components/StaticSection';
import LatestVehicles from '../components/LatestVehicle';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import QuickSearchBar from '../components/QuickSearchbar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <QuickSearchBar></QuickSearchBar>
            <LatestVehicles></LatestVehicles>
            <StaticSections></StaticSections>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;