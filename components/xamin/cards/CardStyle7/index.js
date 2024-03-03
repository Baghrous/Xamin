import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Index = (props) => {

    return (
        <>
                <div className={props.colClass}>
                    <div className={props.mainclass}>
                            <div className={"iq-blog-box "+props.blogBoxClass}>
                                <div className="iq-blog-image">
                                        <Image alt="#"  src={props.img} />
                                        <ul className="iq-blogtag"><li><Link href="#">{props.linkname}</Link></li></ul>
                                </div>
                                <div className="iq-blog-detail">
                                    <div className="iq-blog-meta">
                                        <ul><li className="list-inline-item"> <Link href='#'><time className="entry-date published updated" >{props.time}</time></Link></li></ul>
                                    </div>
                                    <div className ="blog-title"><Link href="#"><h4 className="entry-title">{props.title}</h4></Link></div>
                                    <div className="blog-content"> 
                                        <p>{props.desc}</p>
                                        {props.children}
                                    </div>
                                    <div className="blog-button"><Link href="/blog-details"><span className="button-link" >Read More<i className="fa fa-angle-right" aria-hidden="true"></i></span></Link></div>

                                </div>
                            </div>
                    </div>
            </div>
        </>
    );
};

export default Index;