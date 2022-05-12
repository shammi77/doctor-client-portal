import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;