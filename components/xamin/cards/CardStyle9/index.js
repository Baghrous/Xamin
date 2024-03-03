import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Index = (props) => {

    return (
        <>
                <li>
                    <div className={"post-img"}>
                        <Image width="150" height="150" src={props.img} alt="" />
                        <div className="post-blog">
                            <div className="blog-box">
                                <ul className="list-inline">
                                    <li className="list-inline-item  mr-3"><Link href="/blog-details"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>{props.time}</Link> </li>
                                </ul>
                                <Link href="/blog-details">
                                <span className="new-link" >
                                    <h5>{props.title}</h5>
                                </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
        </>
    );
};

export default Index;
