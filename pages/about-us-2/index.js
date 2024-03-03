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
import Banner from '../../components/about-section/about-us2/banner';
import Video from '../../components/about-section/about-us2/video';
import About from '../../components/about-section/about-us2/about';
import Service from '../../components/about-section/about-us2/services';
import Testimonial from '../../components/about-section/about-us2/testimonial';
import Partner from '../../components/about-section/about-us2/partner';

import Footer from '../../components/about-section/about-us2/footer';
import Link from 'next/link';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-about','/about-us-2']
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

                <Banner />

                <div className="main-content">
                    <Video />
                    <About />
                    <Service />
                    <Testimonial />
                    <Partner />
                </div>


                <ScrollTop />
                <Footer />
                
            </>
        );
    }
}

export default Index;
