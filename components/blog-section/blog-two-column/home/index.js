import React from 'react';
import { BannerStyle1 } from '../../../xamin';

import img from '../../../../public/assets/images/about-us/04.png'
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumb:[
                {
                    title:'Home',
                    href:'/landing-page1',
                    active:false
                },
                {
                    title:'Two Column Blog',
                    href:'#',
                    active:true
                }
            ]
        }
    }
    render() {
        return (
            <>
                <BannerStyle1
                    title={"Two Column Blog"}
                    breadcrumb={this.state.breadcrumb}
                    image={img}
                />
            </>
        );
    }
}

export default Index;