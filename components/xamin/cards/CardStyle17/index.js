import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Index = (props) => {

    return (
        <>
            
                <div className="fancy_service wow fadeInUp  text-center" >
                    <div className="hover-effect"></div>
                    <div className="fancy-info">
                        <Image src={props.img} alt="fancybox" />
                        <h4 className="mt-4 mb-3 title">{props.title}</h4>
                        <p className="">{props.text}</p>
                        <Link className="link-btn" href="#"><span className="btn-effect"> Read More<i className="fa fa-angle-right"></i></span></Link>
                    </div>
                </div>
            
        </>
    );
};

export default Index;
