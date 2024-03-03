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
import RevolutionSlider from "../../components/home-section/landing-page5/revslider";
import SectionTwo from "../../components/home-section/landing-page5/section-two";
import SectionThree from "../../components/home-section/landing-page5/section-three";
import Partner from "../../components/home-section/landing-page5/partner";
import Solution from "../../components/home-section/landing-page5/solution";
import SectionFive from "../../components/home-section/landing-page5/section-five";
import Blog from "../../components/home-section/landing-page5/blog";
import Feature from "../../components/home-section/landing-page5/feature";
import Customer from "../../components/home-section/landing-page5/customer";
import Footer from "../../components/home-section/landing-page5/footer";
import Link from 'next/link';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page5']
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
                    <SectionTwo />
                    <Partner />
                    <SectionThree />
                    <SectionFive />
                    <Feature />
                    <Solution />
                    <Customer />
                    <Blog />
                </div>
                <Footer/>
                <ScrollTop />

            </>
        );
    }
}

export default Index;
