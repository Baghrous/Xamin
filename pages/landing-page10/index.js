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
import RevolutionSlider from "../../components/home-section/landing-page10/revslider";
import Counter from "../../components/home-section/landing-page10/counter";
import VisualAnalytics from "../../components/home-section/landing-page10/visual-analytics";
import Services from "../../components/home-section/landing-page10/services";
import Sources from "../../components/home-section/landing-page10/sources";
import Sales from "../../components/home-section/landing-page10/sales";
import Data from "../../components/home-section/landing-page10/data";
import Blogs from "../../components/home-section/landing-page10/blog";
import Client from "../../components/home-section/landing-page10/client";
import Business from "../../components/home-section/landing-page10/business";
import Footer from "../../components/home-section/landing-page10/footer";
import Link from 'next/link';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page10']
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
                    <Counter />
                    <VisualAnalytics />
                    <Services />
                    <Sources />
                    <Sales />
                    <Data />
                    <Client />
                    <Blogs />
                    <Business />
                </div>
              
            <ScrollTop />
            <Footer />
            </>
        );
    }
}

export default Index;
