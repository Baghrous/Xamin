import React from 'react';
import $ from 'jquery';
import Link from 'next/link';

const scrollTop = () => {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
};
const Index = () => {

    return (
        <>
            <div id="back-to-top" style={{ display: 'none' }}>
                <Link className="top" id="top" href="#" onClick={scrollTop}> <i className="fa fa-chevron-up" /> </Link>
            </div>
        </>
    );
};

export default Index;