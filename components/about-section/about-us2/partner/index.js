import Image from "next/image";
import React from "react";

import img from "../../../../public/assets/images/partners/1.png";
import img1 from "../../../../public/assets/images/partners/2.png";
import img2 from "../../../../public/assets/images/partners/3.png";
import img3 from "../../../../public/assets/images/partners/4.png";
import img4 from "../../../../public/assets/images/partners/5.png";
import img5 from "../../../../public/assets/images/partners/1.png";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [
        img,
        img1,
        img2,
        img3,
        img4,
        img5,
        // "../../../../public/assets/images/partners/1.png",
        // "../../../../public/assets/images/partners/2.png",
        // "../../../../public/assets/images/partners/3.png",
        // "../../../../public/assets/images/partners/4.png",
        // "../../../../public/assets/images/partners/5.png",
        // "../../../../public/assets/images/partners/1.png"
      ],
    };
  }

  render() {
    const { partners } = this.state;

    return (
      <>
        <div className="iq-ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 wow fadeInUp">
                <div
                  className="owl-carousel client-logo owl-loaded owl-drag"
                  data-dots="false"
                  data-nav="false"
                  data-items="6"
                  data-items-laptop="4"
                  data-items-tab="3"
                  data-items-mobile="2"
                  data-items-mobile-sm="1"
                  data-autoplay="true"
                  data-loop="true"
                  data-margin="30"
                >
                  {partners.map((item, index) => (
                    <div key={"p1" + index} className="item">
                      <div className="clients-box hover-effct">
                        <Image
                          className="img-fluid client-img"
                          src={item}
                          alt="client-image"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Index;
