import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Index = (props) => {

    return (
        <>
                <p className="footer-logo"><Image alt="img" src={ props.sectionImage } width="160" /></p>
                <p className="footer-logo">{props.sectionText}</p>
                <ul className="info-share d-inline list-inline">
                    <li className="list-inline-item"><Link href="#"><i className="fa fa-facebook-f"></i></Link></li>
                    <li className="list-inline-item"><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                    <li className="list-inline-item"><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                </ul>
        </>
    );
};

export default Index;