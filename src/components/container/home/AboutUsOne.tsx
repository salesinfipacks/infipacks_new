import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import one from "public/images/service/whoweare.jpg";
import two from "public/images/service/whowe.jpg";
import three from "public/images/service/A2-3-Anti-Vibration-Mounts.jpg";
import four from "public/images/about/20.png";

import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

const AboutUsOne = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <div id="about-area" className="about-area pd-top-90">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-9 "
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="about-thumb-area pe-0 pb-0">
                <Image className="about-img-1 mb-3" src={one} alt="img" />
                
                
              </div>
            </div>
            <div
              className="col-lg-6 align-self-center "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">Who We Are</h6>
                <h2 className="title mb-4">
                 We at Infipacks, pride ourselves on our ability to provide expertise and superior solutions to customers business requirement.
                </h2>
                
                <p className="content">
                 We being manufacturer and supplier of high quality industrial materials and makes us unique by 
designing the product based on customer requirement with cost competitive &quot;
                </p>
                <p className="content">
                 We closely work with project teams to understand the requirements and leverage our knowledge and 
experience to arrive at innovative and effective solutions. Our main objective is to continuously exceed our 
customer’s expectations by providing them with high-performance product solutions, on-time delivery and 
exceptional customer service. &quot;
                </p>
                <div className="btn-wrap">
                  <Link className="btn btn-border-base" href="/about">
                    More About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsOne;
