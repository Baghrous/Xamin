import Link from 'next/link';
import React from 'react';

const Index = (props) => {

    return (
        <>
                <li className={props.class}>
                    <Link href={'#'}>
                        <i className= {props.icon}></i>
                        <span className="header"> {props.heading}</span>
                        <span className="content">:{props.text}</span>
                    </Link>
                </li>
        </>
    );
};

export default Index;