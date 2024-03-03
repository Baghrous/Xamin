import React from 'react'
import Head from 'next/head';

import Link from 'next/link';
// Import asset...../
import logoImg from '../public/assets/images/logo.png';
// Import for custom styles...
// import '../public/style.css';
// Import for the custom plugins...
import { index } from '../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop,RevSlider} from '../components/xamin';


//Components
import RevolutionSlider from '../components/home-section/landing-page1/revslider';
import About from '../components/home-section/landing-page1/about';
import AboutWorks from '../components/home-section/landing-page1/aboutworks';
import HowWorks from '../components/home-section/landing-page1/howworks';
import Services from '../components/home-section/landing-page1/services';
import Projects from '../components/home-section/landing-page1/projects';
import Customers from '../components/home-section/landing-page1/customers';


import Service from '../components/home-section/landing-page1/service';
import Awards from '../components/home-section/landing-page1/awards';
import Blog from '../components/home-section/landing-page1/blog';

import Footer from '../components/home-section/landing-page1/footer';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page1']
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>Xamin - Data Science &amp; Analytics ReactJs Template</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Xamin - Data Science &amp; Analytics HTML5 Template" />
                    <meta name="author" content="http://iqonic.design/" />

                    <link rel="shortcut icon" href="./assets/images/favicon.ico" />
                </Head>

                {/* Loader section */}
                <Loader />

                {/* header section*/}
                <HeaderStyle
                    className={"style-one"}
                    activeMenu ={this.state.activeMenu}
                    logoImg={logoImg}
                    buttonSection={(<Link className={"button bt-black pull-right"} href="#">Download</Link>)}
                />

                <RevolutionSlider />


                <div className="main-content">
                    <About />
                    <AboutWorks/>
                    <HowWorks />
                    <Services />
                    <Customers />
                    <Projects />

                    <Service/>
                    <Awards/>
                    <Blog />
                </div>
                <ScrollTop />
                <Footer />
                
            </>
        );
    }
}

export default Index;
