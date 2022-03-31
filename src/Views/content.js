// @flow
import * as React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import imgLink from "../Image/Picture3.png";
import imgLink1 from "../Image/Picture4.png";
import imgLink2 from "../Image/Picture5.png";
import imgLink3 from "../Image/Picture11.png";
import { AboutUs } from "./Component/auboutUs";
export const Content = () => {
  const slideImages = [
    {
      url: imgLink1,
      caption: "YUHICHY",
    },
    {
      url: imgLink2,
      caption: "YUHICHY",
    },
    {
      url: imgLink3,
      caption: "YUHICHY",
    },
    {
      url: imgLink,
      caption: "YUHICHY",
    },
  ];
  return (
    <div className="content">
      <div className="slide-container" easing="ease">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                className="bannerImge"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="main_conten">
        {/* <h3>Ahihi</h3> */}
        <AboutUs />
      </div>
    </div>
  );
};
