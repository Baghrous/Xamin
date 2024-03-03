import Image from 'next/image';
import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="col-lg col-md-6 ">
                <div className="fancybox-userbehavior wow fadeInUp  text-left">
                    <h6 className="mb-2">{props.title}</h6>
                    <div className="analytics-icon"> <Image aria-hidden="true" src={props.icon}></Image> </div>
                </div>
            </div>
</>
    );
};

export default Index;
