import React from 'react';
import { MasonryItem } from '../../../constants/masonry-items';
import Link from 'next/link';
import Image from 'next/image';

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items : MasonryItem
        }
    }

    render() {
        let items = this.state.items;
        items=items.filter((item)=>{
            if(this.props.filterdata=='all'){
                return true;
            }
            return item.filterClass.includes(this.props.filterdata);
        });
        return(
            <>

                { items.map((itemData,index) => (
                    <div key={index} className={"iq-masonry-item item "+itemData.filterClass}>
                        <div className="iq-portfolio">
                            <Link href={itemData.link}    className="iq-portfolio-img">
                                    <Image width="1260" height="954"  src={itemData.image}     className="attachment-post-thumbnail size-post-thumbnail wp-post-image"   alt="" />
                            </Link>
                            <div className="iq-portfolio-content  text-center">
                                <div className="details-box clearfix">
                                    <div className="consult-details">
                                        <Link href={itemData.link}>
                                                <h5 className="text-hover">{itemData.title}</h5>
                                        </Link>
                                        <p className="mb-0">{itemData.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </>
        )
    }
}
export default Index;
