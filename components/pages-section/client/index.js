import React from 'react';

import { AboutStyle, SectionTitle} from '../../xamin';
import Link from 'next/link';
import Image from 'next/image';

const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
                <div key ={index} className="col-lg-2 col-md-3 col-sm-6 text-center "> 
                   <Link className="clients-block wow fadeIn" data-wow-delay="0.6s" href="#"> 
                        <Image className="img-fluid" src={card.img} alt="image0" />
                   </Link>
                </div>
    ));
};
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:  require("../../../public/assets/images/partners/1.png"),
                    
                    
                },
                {
                    img:  require("../../../public/assets/images/partners/2.png"),
                   
                    
                },
                {
                    img:  require("../../../public/assets/images/partners/4.png"),
                    
                    
                },
                {
                    img:  require("../../../public/assets/images/partners/5.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/1.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/2.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/3.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/4.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/5.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/1.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/3.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/2.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/4.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/1.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/2.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/3.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/5.png"),
                    
                    
                }, {
                    img:  require("../../../public/assets/images/partners/4.png"),
                    
                    
                },
            ]
        }
    }

    render() {
     
        return (
            <>
             <section>
                <div className="container">
                    <div className="row xamin-bg">
                        <div className="col-sm-12">
                        <SectionTitle
                            link ="OUR CLIENTS"
                            title="All Our Great Clients"
                            className = "title-box wow fadeInUp text-center"
                            spanclassName="title-design"
                        />
                        </div>
                        <div className="col-sm-12 ">
                             <div className="row fancy-clients  wow fadeIn">
                                <Cards cardList={this.state.cardData} />
                            </div>
                        </div>
                    </div>
                </div>
                  
             </section>
              
            </>
        );
    }
}

export default Index;
