/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Image from "next/image";
import Link from "next/link";

import One from "public/images/about/4.png";
import Two from "public/images/service/VHBTapes.png";
import Three from "public/images/service/insulator.png";
import Four from "public/images/service/thermalpads.png";
import Five from "public/images/service/foamtape.png";
import Six from "public/images/service/1.png";

const ServiceArea = () => {
  return (
    <div
      id="service-area"
      className="service-area bg-sky pd-top-110 bg-relative"
    >
      <Image
        className="left_image_bounce position-top-right"
        src={One}
        alt="img"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h6 className="sub-title">Our Products</h6>
              <h2 className="title"> Solution for business requirements</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details"> VHB Tapes</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                {/*<Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link> */ }
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Three} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">FR4 Insulators</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Four} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Foam Tapes</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Five} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Eproxy Insulators</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Six} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Thermal Pads</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">GP03 Insulators</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Insulators & Tapes</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Rubber sheets</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details"> Nomex</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Thermal Transfer Printing Ribbons</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Formex</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Die cuts</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
