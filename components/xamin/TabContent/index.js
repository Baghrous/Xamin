import Link from 'next/link';
import React from 'react';

const Index = (props) => {
    return (
        <>
                <p>{props.text}</p>
                <div className=" text-left  ">
                    <Link className="button button-icon" href="#">
                        <span className="btn-effect"> {props.buttonname}</span>
                    </Link>
                </div>
        </>
    );
}

export default Index;
