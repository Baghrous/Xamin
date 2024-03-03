import React from "react";
import { RevSlider } from "../../../xamin";
import { initRevSlider11 } from "../../../../config/plugins";
import Image from "next/image";

import $ from "jquery";

import img from "../../../../public/assets/revslider/assets_slider11/transparent.png";
import img1 from "../../../../public/assets/revslider/assets_slider11/xamin-d11-02.png";

const Index = () => {
  React.useEffect(() => {
    if (!tpj("#rev_slider_11_1").hasClass("revslider-initialised")) {
      $("#rev_slider_11_1")
        .show()
        .revolution({
          sliderType: "hero",
          sliderLayout: "fullwidth",
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: 1600,
          gridheight: 800,
          minHeight: "",
          autoHeight: true,
          lazyType: "smart",
          spinner: "spinner0",

          editorheight: [800, 768, 960, 720],
          responsiveLevels: [1240, 1024, 778, 480],
          navigation: {
            mouseScrollNavigation: false,
            touch: {
              touchenabled: true,
            },
          },
          parallax: {
            levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            type: "mouse",
          },
          fallbacks: {
            allowHTML5AutoPlayOnAndroid: true,
          },
        });
    }
  }, []);

  return (
    <>
      <div>
        <RevSlider revId={"rev_slider_11_1"}>
          <rs-slide
            data-key="rs-4"
            data-title="Slide"
            data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
          >
            <Image
              src={img}
              data-bg="c:#f2f4fe;"
              className="rev-slidebg"
              alt="images"
              data-no-retina
            />
            <rs-layer
              id="slider-4-slide-4-layer-3"
              className="button blue-btn rev-btn"
              data-type="button"
              data-color="#ffffff"
              data-rsp_ch="on"
              data-xy="x:c;xo:263px;y:c;yo:176px;"
              data-text="w:normal;s:18;l:35;"
              data-dim="minh:0px;"
              data-padding="r:25;l:25;"
              data-border="bor:25px,25px,25px,25px;"
              data-frame_0="sX:0.9;sY:0.9;"
              data-frame_1="st:800;sp:1000;sR:800;"
              data-frame_999="o:0;st:w;sR:7200;"
              data-frame_hover="bgc:#313e5b;bor:25px,25px,25px,25px;bri:120%;"
              style={{
                zIndex: 8,
                backgroundColor: "#007aff",
                fontFamily: "Lato",
              }}
            >
              Read More
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-4"
              data-type="text"
              data-color="#394562"
              data-rsp_ch="on"
              data-xy="x:c;xo:212px;y:b;yo:50px;"
              data-text="w:normal;s:18;fw:700;"
              data-frame_1="st:1980;sR:1980;"
              data-frame_999="o:0;st:w;sR:6720;"
              style={{ zIndex: 9, fontFamily: "Lato" }}
            >
              Facebook
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-5"
              data-type="text"
              data-color="#394562"
              data-rsp_ch="on"
              data-xy="x:c;xo:338px;y:b;yo:50px;"
              data-text="w:normal;s:18;fw:700;"
              data-frame_1="st:2340;sR:2340;"
              data-frame_999="o:0;st:w;sR:6360;"
              style={{ zIndex: 9, fontFamily: "Lato" }}
            >
              Instagram
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-6"
              data-type="text"
              data-color="#394562"
              data-rsp_ch="on"
              data-xy="x:c;xo:459px;y:b;yo:50px;"
              data-text="w:normal;s:18;fw:700;"
              data-frame_1="st:2680;sR:2680;"
              data-frame_999="o:0;st:w;sR:6020;"
              style={{ zIndex: 9, fontFamily: "Lato" }}
            >
              Dribbble
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-8"
              data-type="text"
              data-color="#394562"
              data-rsp_ch="on"
              data-xy="x:6px;y:209px;"
              data-text="w:normal;s:18;fw:700;"
              data-btrans="rZ:-90;"
              data-frame_0="x:right;"
              data-frame_1="st:3270;sp:1000;"
              data-frame_999="o:0;st:w;sR:5430;"
              style={{ zIndex: 9, fontFamily: "Lato" }}
            >
              #Iqonic Design
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-10"
              data-type="text"
              data-color="#394562"
              data-rsp_ch="on"
              data-xy="x:r;xo:12px;y:b;yo:120px;"
              data-text="w:normal;s:18;fw:700;"
              data-btrans="rZ:-90;"
              data-frame_0="x:right;"
              data-frame_1="st:3270;sp:1000;"
              data-frame_999="o:0;st:w;sR:5430;"
              style={{ zIndex: 9, fontFamily: "Lato" }}
            >
              #Design Inspiration
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-13"
              data-type="image"
              data-rsp_ch="on"
              data-xy="y:-22px;"
              data-text="w:normal;"
              data-dim="w:858px;h:1219px;"
              data-frame_1="st:600;sR:600;"
              data-frame_999="o:0;st:w;sR:8100;"
              style={{ zIndex: 5, fontFamily: "Roboto" }}
            >
              <Image
                src={img1}
                width="858"
                height="1219"
                alt="images"
                data-no-retina
              />
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-14"
              data-type="text"
              data-color="#394562"
              data-rsp_ch="on"
              data-xy="x:968px;y:c;yo:-90px;"
              data-text="w:normal;s:70;l:80;fw:900;"
              data-frame_0="sX:0.9;sY:0.9;"
              data-frame_1="st:800;sp:1000;sR:800;"
              data-frame_999="o:0;st:w;sR:7200;"
              style={{
                zIndex: 6,
                fontFamily: "Lato",
                textTransform: "capitalize",
              }}
            >
              Best Marketing <br />
              Analysis
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-15"
              data-type="text"
              data-color="#394562"
              data-rsp_ch="on"
              data-xy="x:c;xo:397px;y:c;yo:65px;"
              data-text="w:normal;s:16;l:30;"
              data-frame_0="sX:0.9;sY:0.9;"
              data-frame_1="st:800;sp:1000;sR:800;"
              data-frame_999="o:0;st:w;sR:7200;"
              style={{ zIndex: 7, fontFamily: "Lato" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br /> industry.Lorem Ipsum has been the industry's standard dummy{" "}
              <br /> text ever since the 1500s,
            </rs-layer>
          </rs-slide>
        </RevSlider>
      </div>
    </>
  );
};

export default Index;
