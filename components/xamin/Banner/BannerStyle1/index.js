import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Index = (props) => {
    let items=props.breadcrumb;
    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title">{props.title}</h2>
                                <ol className="breadcrumb main-bg">
                                    { items.map((item,index) => (
                                        <li key={index} className={"breadcrumb-item "+(item.active ? "active" : '')}><Link  href={item.href}>{item.title}</Link></li>
                                    )) }
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight">
                            <Image alt="banner"
                                 className="img-fluid float-right"
                                 src={props.image} 
                                 width={600} // Set the width to the actual width of your image
                                 height={400}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;