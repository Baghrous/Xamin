import React from 'react';
import { SectionTitle } from '../../../xamin';
import Link from 'next/link';
import Image from 'next/image';

const Blog = (props) => {
    const bloglist = props.bloglist;
    return bloglist.map((blog, index) => (
                <div  key={index} className="item">
                    <div className="iq-blog-box mb-0">
                            <div className="iq-blog-image clearfix">
                                <Image alt="#" className="img-fluid center-block"  src={blog.img} />
                                <ul className="iq-blogtag">
                                    <li>
                                        <Link href="#">{blog.linkname}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="iq-blog-detail">
                                <div className="iq-blog-meta">
                                    <ul>
                                        <li className="list-inline-item">
                                            <Link href='#'>
                                                <time className="entry-date published updated" >{blog.time}</time>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className ="blog-title">
                                        <Link href="#">
                                            <h4>
                                                {blog.title}
                                            </h4>
                                        </Link>
                                </div>
                                <p>
                                    {blog.desc}
                                </p>
                                <div className="blog-button"><Link className="button-link" href="/blog-details">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link></div>
                            </div>
                        </div>
                </div>
    ));
};

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img: require("../../../../public/assets/images/about-us/04.png"),
                    linkname:  "HTML",
                    time: "September 26, 2019 ",
                    title: "Build Construction",
                    desc: "“They bring to you a host of beautifully created infographics that contain the latest digital marketing ",
                },
                {
                    img: require("../../../../public/assets/images/about-us/04.png"),
                    linkname:  "Design",
                    time: "September 26, 2019 ",
                    title: "Life Lack Meaning",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
                },
                {
                    img: require("../../../../public/assets/images/about-us/04.png"),
                    linkname:  "HTML",
                    time: "September 26, 2019 ",
                    title: "Construction industry",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing",
                },
                {
                    img: require("../../../../public/assets/images/about-us/04.png"),
                    linkname:  "CSS",
                    time: "September 26, 2019 ",
                    title: "Content Marketing",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
                },
               
            ]
        }
    }

    render() {

        return (
            <>
                <section id="blog">
                    <div className="container">
                        <div className="row layer-fly-one">
                            <div className="col-md-12">
                                <SectionTitle
                                        link="BLOG"
                                        className = "title-box wow fadeInUp text-center"
                                        title="Recent Blog"
                                        spanclass="title-design"
                                        subTitle="It is a long established fact that a reader will be distracted"
                                />
                                <div className="xamin-recentblog v1">
                                    <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true">
                                         <Blog bloglist={this.state.cardData} />
                                    </div>
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