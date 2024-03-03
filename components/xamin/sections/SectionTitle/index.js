import Image from 'next/image';
import React from 'react';

const Index = (props) => {
    return (
        <>
            <div className={props.className} >
                { props.link  ? (<span className={props.spanclass}>{props.link}</span>) : ''}
                <h2>{ props.title }</h2>
                {props.subTitle ? (<p>{ props.subTitle }</p>) : ''}
                {props.img ?
                     (<Image src={props.img} width="600" height="360" /> ) :''}
                     
            </div>
        </>
    );
}

export default Index;
