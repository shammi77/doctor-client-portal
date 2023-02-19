import React from 'react';
import Banner from './Banner';

import Footer from '../Shared/Footer';
import Contact from './Contact';
import MakeAppointment from './MakeAppointment';

import Testimonials from './Testimonials';
import Faq from './Faq';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            {/* <Info></Info> */}
            <Contact></Contact>
            <Faq></Faq>
            
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;