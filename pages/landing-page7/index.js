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
import RevolutionSlider from "../../components/home-section/landing-page7/revslider";
import Footer from "../../components/home-section/landing-page7/footer";
import About from "../../components/home-section/landing-page7/about";
import Price from "../../components/home-section/landing-page7/price";
import Testimonial from "../../components/home-section/landing-page7/testimonial";
import Blog from "../../components/home-section/landing-page7/blog";
import ContactUs from "../../components/home-section/landing-page7/contactus";
import QuestionSection from "../../components/home-section/landing-page7/question-section";
import Benefit from "../../components/home-section/landing-page7/benefit-section";
import Work from "../../components/home-section/landing-page7/howworks";
import Type from "../../components/home-section/landing-page7/type-section";
import Link from 'next/link';




class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page7']
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
                    <About />
                    <Type />
                    < Work/>
                    <Benefit />
                    <Price />
                    <QuestionSection />
                    <Testimonial/>
                    <Blog />
                    < ContactUs />
                </div>
                <Footer />
                <ScrollTop />

            </>
        );
    }
}

export default Index;
