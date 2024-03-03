import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../../public/assets/images/logo.png';
// Import for custom styles...
// import '../../public/style.css';
// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop} from '../../components/xamin';


//Components
import RevolutionSlider from "../../components/home-section/landing-page3/revslider";
import ChooseUs from "../../components/home-section/landing-page3/choose-us";
import AboutUs from "../../components/home-section/landing-page3/about-us";
import Services from "../../components/home-section/landing-page3/services";
import Counter from "../../components/home-section/landing-page3/counter";
import GetStarted from "../../components/home-section/landing-page3/get-started";
import Process from "../../components/home-section/landing-page3/process";
import Testimonials from "../../components/home-section/landing-page3/testimonial";
import Blogs from "../../components/home-section/landing-page3/blog";
import Partner from "../../components/home-section/landing-page3/partner";
import Footer from "../../components/home-section/landing-page3/footer";
import Link from 'next/link';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page3']
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
                    className={"style-one"}
                    logoImg={logoImg}
                    buttonSection={(<div className="blue-btn button"> <Link href="#">Get Started</Link> </div>)}
                    activeMenu ={this.state.activeMenu}
                />

                <RevolutionSlider />

                <div className="main-content">
                    <ChooseUs />
                    <AboutUs />
                    <Services />
                    <Counter />
                    <GetStarted />
                    <Process />
                    <Testimonials />
                    <Blogs />
                    <Partner />

                </div>
                <ScrollTop />
                <Footer />

            </>
        );
    }
}

export default Index;
