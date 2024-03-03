import React from 'react';

import { SectionTitle,CardStyle16, CardStyle13 } from '../../../xamin';
import Link from 'next/link';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    icon: require("../../../../public/assets/images/services/6-1.png"),
                    title: "Behavioral-Analytics"
                    
                },
                {
                    icon: require("../../../../public/assets/images/services/6-2.png"),
                    title: "Stock Management"
                    
                },
                {
                    icon: require("../../../../public/assets/images/services/6-3.png"),
                    title: "Receivable &amp; Payables"
                    
                },  
                {
                    icon: require("../../../../public/assets/images/services/6-4.png"),
                    title: "Manage Bills &amp; Expenses"
                    
                }, 
                {
                    icon: require("../../../../public/assets/images/services/6-1.png"),
                    title: "SMS Reminders"
                    
                },  
            

               
            ],
            cardData1 :[
                {
                    icon: require("../../../../public/assets/images/services/6-2.png"),
                    title: "Auto Sync & Backup"
                    
                },   
                {
                    icon: require("../../../../public/assets/images/services/6-3.png"),
                    title: "Ready & Return Filing"
                    
                },   
                {
                    icon: require("../../../../public/assets/images/services/6-4.png"),
                    title: "60+ detailed reports"
                    
                },   
                {
                    icon: require("../../../../public/assets/images/services/6-1.png"),
                    title: "Product Details"
                    
                },               
                {
                    icon: require("../../../../public/assets/images/services/6-2.png"),
                    title: "Customized Rates"
                    
                },   
            ]
        }

    }

    render() {
        let { cardData , cardData1} = this.state;
        return (
            <>
              <section className="pt-0">
                <div className="container">
                     <div className="row">
                        <div className="col-md-8">
                                <SectionTitle
                                    className={"title-box wow fadeInUp  text-left"}
                                    spanclass={"title-design"}
                                    title={"Popular features that your business needs"}
                                    subTitle={"Bleeding about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"}
                                />
                        </div>
                        <div className="col-md-4   align-self-center">
                            <div className=" text-center">
                                <Link className="button button-icon" href="#"><span className="btn-effect"> Explore more features</span></Link>
                            </div>
                        </div>
                     </div>

                     <div className="row mt-5 mt-md-0">
                            { cardData.map((item, index) => (
                                <CardStyle16 
                                    key={'f1-'+index}
                                    icon ={item.icon}
                                    title ={item.title}
                                />
                            )) }
                     </div>

                     <div className="row">
                            { cardData1.map((item, index) => (
                                <CardStyle16 
                                    key={'f2-' + index}
                                    icon ={item.icon}
                                    title ={item.title}
                                />
                            )) }
                     </div>
                </div>
               </section>
            </>
        );
    }

}

export default Index;