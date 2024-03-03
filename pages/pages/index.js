import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../../public/assets/images/logo.png';
import img from '../../public/assets/images/about-us/04.png'
import img1 from "../../public/assets/images/about-us/04.png"
// Import for custom styles...
// import '../../public/style.css';
// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop,BannerStyle1} from '../../components/xamin';

import Team from '../../components/pages-section/team';
import Client from '../../components/pages-section/client';
import Footer from '../../components/pages-section/footer';
import Link from 'next/link';
import Image from 'next/image';


//Components

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#contact','/pages'],
            breadcrumb:[
                {
                    title:'Home',
                    href:'/landing-page1',
                    active:false
                },
                {
                    title:'team',
                    href:'#',
                    active:true
                }
            ]
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
                    buttonSection={(<div className="blue-btn button"> <Link href="#">Get Started</Link> </div>)}
                />

               
                <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                    <div className="container">
                        <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-8 text-left align-self-center">
                                    <BannerStyle1
                                        title={"Our Team"}
                                        breadcrumb={this.state.breadcrumb}
                                        image={img}
                                    />
                                       
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight start_animation animated">
                                        <Image src={img1} className="img-fluid float-right" alt="banner" />
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                   <Team />
                </div>
                <Footer />
            </>
        );
    }
}

export default Index;
