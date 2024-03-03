import React from 'react';

import { SectionTitle} from '../../../xamin';
import Link from 'next/link';
import Image from 'next/image'

const Cards = (props) => {
    const cardList = props.cardList;
    return (
        <ul className="iq-client column-5">
            {
                cardList.map((card,index)=>(
                    <li key={index} className="iq-client-list ">
                        <Link className="clients-block wow fadeIn" data-wow-delay="0.6s" href={'#'}>
                            <Image className="img-fluid" src={card.img} alt="image0" />
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img: require("../../../../public/assets/images/partners/1.png"),
                },
                {
                    img: require("../../../../public/assets/images/partners/2.png"),
                },
                {
                    img: require("../../../../public/assets/images/partners/4.png"),
                },
                {
                    img: require("../../../../public/assets/images/partners/5.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/1.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/2.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/3.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/4.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/5.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/1.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/3.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/2.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/4.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/1.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/2.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/3.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/5.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/4.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/1.png"),
                }, {
                    img: require("../../../../public/assets/images/partners/3.png"),
                }
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
                            title="Trusted by the world's largest brands."
                            className = "title-box wow fadeInUp text-center"
                            spanclassName="title-design"
                        />
                        </div>
                        <div className="col-sm-12 ">
                             <div className="container-visualization  wow fadeIn">
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
