import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../../public/assets/images/logo_white.png';
// Import for custom styles...
// import '../../public/style.css';
// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop} from '../../components/xamin';


//Components

import Services from '../../components/home-section/landing-page2/services';
import Service from '../../components/home-section/landing-page2/service';
import Blog from '../../components/home-section/landing-page2/blog';
import About from '../../components/home-section/landing-page2/about';
import Partner from '../../components/home-section/landing-page2/partner';
import AboutTwo from '../../components/home-section/landing-page2/aboutus-two';

import Counter from '../../components/home-section/landing-page2/counter';
import Video from '../../components/home-section/landing-page2/video';
import Customer from '../../components/home-section/landing-page2/customer';
import RevolutionSlider from "../../components/home-section/landing-page2/revslider";

import Footer from '../../components/home-section/landing-page2/footer';
import Link from 'next/link';
class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page2']
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 2000);

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
                    className={"style-one style-two"}
                    activeMenu ={this.state.activeMenu}
                    logoImg={logoImg}
                    buttonSection={(<div className="blue-btn button"> <Link href="#">Get Started</Link> </div>)}
                />

                <RevolutionSlider />


                <div className="main-content">
                   <Services />
                   <About />
                   <AboutTwo />
                   <Counter />
                   <Video />
                   <Customer />
                   <Service />
                   <Blog />
                   <Partner />
                </div>
                <ScrollTop />
                <Footer />
            </>
        );
    }
}

export default Index;
