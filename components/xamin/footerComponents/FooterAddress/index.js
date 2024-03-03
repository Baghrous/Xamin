import Link from 'next/link';
import React from 'react';

const List = (props) => {

    const list = props.list;
    const listing = list.map((item, index) => (
        <li key={index} >
             <Link href="tel:+0123456789"><i className={ item.iconClass }></i><span>{ item.text }</span></Link>
        </li>
    ));
    return (
        <ul className={props.addressClass + ' iq-contact'}> { listing } </ul>
    );
};

const Index = (props) => {
    return (
        <>
            <div className="contact-bg">
                <h4 className="footer-title iq-rmt-30">{ props.addressTitle }</h4>
                <List addressClass={ props.addressClass } list={ props.addressContent } />
            </div>

        </>
    );
};

export default Index;