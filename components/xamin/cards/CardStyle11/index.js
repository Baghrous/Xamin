import Link from 'next/link';
import React from 'react';

const Index = (props) => {

    return (
        <>
               <ul>
                    <li className={props.liClass}>
                        <Link href="#">{props.link}</Link>
                        <span className={props.spanClass}> {props.count} </span>
                    </li>
               </ul>
        </>
    );
};

export default Index;
