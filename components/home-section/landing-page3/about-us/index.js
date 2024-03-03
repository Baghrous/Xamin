import React from 'react';

import { SectionLeftImage } from '../../../xamin';
import Link from 'next/link';

import img from "../../../../public/assets/images/about-us/07.png"
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
               <SectionLeftImage
                   sectionClass="pt-0"
                   image={img}
                   title="About us"
                   subTitle="Focused on Actionable Insights"
                   description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
               >
                   <div className="text-left">
                       <Link className="button button-icon" href="#">
                           <span className="btn-effect"> Read More</span>
                       </Link>
                   </div>
               </SectionLeftImage>
            </>
        );
    }
}

export default Index;
