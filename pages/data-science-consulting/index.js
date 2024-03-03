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
import Banner from '../../components/service-section/data-science-consulting/banner';
import LeftPanel from '../../components/service-section/data-science-consulting/left-panel';
import RightPanel from '../../components/service-section/data-science-consulting/right-panel';

import Footer from '../../components/service-section/data-science-consulting/footer';
import Link from 'next/link';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['/services','/data-science-consulting'],
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
                    activeMenu ={this.state.activeMenu}
                    logoImg={logoImg}
                    buttonSection={(<Link className={"button bt-black pull-right"} href="#">Download</Link>)}
                />

                <Banner />

                <div className="main-content">
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 sidebar-service-left">
                                    <LeftPanel />
                                </div>
                                <div className="col-lg-8 col-sm-12">
                                    <RightPanel />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <ScrollTop />
                <Footer />
                
            </>
        );
    }
}

export default Index;
