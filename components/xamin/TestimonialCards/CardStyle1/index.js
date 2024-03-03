import React from "react";
import Link from "next/link";
import Image from "next/image";

const Index = (props) => {
  return (
    <>
      <div className="iq-team">
        <div className="iq-team-img">
          <Image src={props.image} className="img-fluid" alt="#1" />
        </div>
        <div className="iq-share">
          <div className="slideouticons">
            <label className="mainlabel">
              <i className="fa fa-share-alt"></i>
            </label>
            <div className="iconswrapper">
              <ul>
                {props.share.map((item, index) => (
                  <li key={index + props.title}>
                    <Link href={item.link}>
                      <span>
                        <i className={item.className}></i>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="iq-team-info text-center">
          <Link href="#">
            {" "}
            <h5>{props.title}</h5>{" "}
          </Link>
          <span>{props.subtitle}</span>
        </div>
      </div>
    </>
  );
};
export default Index;
