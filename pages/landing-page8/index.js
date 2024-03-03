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
import RevolutionSlider from "../../components/home-section/landing-page8/revslider";
import Blog from "../../components/home-section/landing-page8/blog";
import Customer from "../../components/home-section/landing-page8/customer";
import Price from "../../components/home-section/landing-page8/price";
import Work from "../../components/home-section/landing-page8/howworks";
import Services from "../../components/home-section/landing-page8/services";
import Feature from "../../components/home-section/landing-page8/feature";
import Partner from "../../components/home-section/landing-page8/partner";
import Usage from "../../components/home-section/landing-page8/usage";
import Footer from "../../components/home-section/landing-page8/footer";
import Link from 'next/link';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page8']
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
                    <Partner />
                    <Usage />
                    <Feature />
                    <Services />
                    <Work />
                    <Price />
                    <Customer />
                    <Blog />
                </div>
              
            <ScrollTop />
            <Footer />
            </>
        );
    }
}

export default Index;
