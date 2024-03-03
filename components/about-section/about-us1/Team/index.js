import React from "react";

import { SectionTitle, TestimonialStyle1 } from "../../../xamin";
import Image from "next/image";

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
      cards: [
        {
          image: require("../../../../public/assets/images/team/1.jpg"),
          title: "Anna Mull",
          subtitle: "COO",
          share: [
            {
              className: "fa fa-facebook-f",
              link: "#",
            },
            {
              className: "fa fa-twitter",
              link: "#",
            },
            {
              className: "fa fa-instagram",
              link: "#",
            },
          ],
        },
        {
          image: require("../../../../public/assets/images/team/2.jpg"),
          title: "Petey Cruiser",
          subtitle: "Project Manager",
          share: [
            {
              className: "fa fa-facebook-f",
              link: "#",
            },
            {
              className: "fa fa-twitter",
              link: "#",
            },
            {
              className: "fa fa-instagram",
              link: "#",
            },
          ],
        },
        {
          image: require("../../../../public/assets/images/team/3.jpg"),
          title: "Greta Life",
          subtitle: "Greta Life",
          share: [
            {
              className: "fa fa-facebook-f",
              link: "#",
            },
            {
              className: "fa fa-twitter",
              link: "#",
            },
            {
              className: "fa fa-instagram",
              link: "#",
            },
          ],
        },
        {
          image: require("../../../../public/assets/images/team/4.jpg"),
          title: "Marcash Dane",
          subtitle: "Project Manager",
          share: [
            {
              className: "fa fa-facebook-f",
              link: "#",
            },
            {
              className: "fa fa-twitter",
              link: "#",
            },
            {
              className: "fa fa-instagram",
              link: "#",
            },
          ],
        },
        {
          image: require("../../../../public/assets/images/team/5.jpg"),
          title: "Handry White",
          subtitle: "Project Manager",
          share: [
            {
              className: "fa fa-facebook-f",
              link: "#",
            },
            {
              className: "fa fa-twitter",
              link: "#",
            },
            {
              className: "fa fa-instagram",
              link: "#",
            },
          ],
        },
      ],
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
    const { cards, partners } = this.state;

    return (
      <>
        <section className="pt-0">
          <div className="container">
            <div className="row xamin-bg">
              <div className="col-sm-12">
                <SectionTitle
                  className={"title-box wow fadeInUp text-center"}
                  spanclass={"title-design"}
                  link={"Team"}
                  title={"Management Team"}
                />
              </div>
              <div className={"col-sm-12 wow fadeInUp"}>
                <div
                  className={"owl-carousel owl-loaded owl-drag"}
                  data-dots="false"
                  data-nav="false"
                  data-items="4"
                  data-items-laptop="4"
                  data-items-tab="3"
                  data-items-mobile="1"
                  data-items-mobile-sm="1"
                  data-autoplay="true"
                  data-loop="true"
                  data-margin="30"
                >
                  {cards.map((item, index) => (
                    <div className="item text-left" key={"c1-" + index}>
                      <TestimonialStyle1
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        share={item.share}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 wow fadeInUp">
                <div
                  className="owl-carousel mt-4 client-logo owl-loaded owl-drag"
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
                    <div key={"c2-" + index} className="item">
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
        </section>
      </>
    );
  }
}

export default Index;
