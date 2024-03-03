import Image from 'next/image';
import React from 'react';

import img1 from "../../../../public/assets/images/fancybox/arrow-7.png"
import img2 from "../../../../public/assets/images/fancybox/bg-7-1.png"
const Index = (props) => {

    return (
        <>
                <div className={"consult-services  xamin-square wow fadeInUp  text-left" +props.mainClass} >
                { props.mainClass ? (<div className="arrow_img">
                         <Image className="arrow-img" src={img1} alt="fancybox"/>
                     </div>) : ''}
                     
                <div className="square-effect bg">
                    <Image src={props.img} alt="fancybox" />
                        <div className="arrowbg_img">
                            <Image src={img2} alt="fancybox" />
                         </div>
                </div>
                <h5 className="mb-2">{props.title}</h5>
                <p className="mb-0">{props.text}</p>
                </div>
        </>
    );
};

export default Index;
