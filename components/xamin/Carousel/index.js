import Image from 'next/image';
import React from 'react';

const Index = (props) => {

    return (
        <>
                <div  className="item">
                    <div className="clients-box">
                        <Image alt="#" className={props.imgClass} src={props.img} />
                    </div>
                </div>
        </>
    );
};

export default Index;