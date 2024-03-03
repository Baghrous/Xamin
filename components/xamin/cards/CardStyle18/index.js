import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import img from "../../../../public/assets/images/fancybox/bg-7-2.png"
const Index = (props) => {

    return (
        <>
            
            <div className="fancy_service style2 wow fadeInUp  text-left">
                    <div className="bg_img"> 
                        <Image className="bg_img-img" src={img} alt="fancybox" />
                    </div>
                    <div className="fancy_block">
                        <div className="fancy-info">
                            <h4 className="mt-4 mb-3 title">{props.title}</h4>
                            <p className="text-dark">{props.text}</p>
                            <Link className="button blue-btn" href="#"><span className="btn-effect"> Find Out More</span></Link>
                        </div>
                        <div className="fancy_img">
                            <Image src={props.fancy_img} alt="fancybox" />
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export default Index;
