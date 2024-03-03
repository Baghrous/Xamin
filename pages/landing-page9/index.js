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
import RevolutionSlider from "../../components/home-section/landing-page9/revslider";
import Footer from "../../components/home-section/landing-page9/footer";
import About from "../../components/home-section/landing-page9/about";
import Speciality from "../../components/home-section/landing-page9/Speciality";
import SectionFour from "../../components/home-section/landing-page9/section-four";
import Education from "../../components/home-section/landing-page9/education";
import Experenice from "../../components/home-section/landing-page9/experience";
import Skill from "../../components/home-section/landing-page9/skill";
import Testimonial from "../../components/home-section/landing-page9/testimonial";
import Case from "../../components/home-section/landing-page9/casestudies-section";
import Link from 'next/link';
class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page9']
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 3000);

    }

    render() {
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>Xamin - Data Science & Analytics HTML5 Template</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Xamin - Data Science & Analytics HTML5 Template" />
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
                    < Speciality/>
                    <SectionFour />
                    <Education />
                    <Experenice/>
                    <Skill />
                    <Case />
                    <Testimonial />
                </div>
              
            <ScrollTop />
            <Footer />
            </>
        );
    }
}

export default Index;
