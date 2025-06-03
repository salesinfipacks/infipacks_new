import React from "react";
import Layout from "@/components/layout/Layout";
import BannerTwo from "@/components/container/home-two/BannerTwo";
import BannerVideoTwo from "@/components/container/home-two/BannerVideoTwo";
import Intro from "@/components/container/home-two/Intro";
import AboutUsOne from "@/components/container/home/AboutUsOne";
import Marqueue from "@/components/container/home/Marqueue";
import Strategy from "@/components/container/home/Strategy";
import ServiceArea from "@/components/container/service/ServiceArea";
import Case from "@/components/container/home/Case";
import Team from "@/components/container/home/Team";
import Testimonial from "@/components/container/home/Testimonial";
import AboutCounterTwo from "@/components/container/about/AboutCounterTwo";

const Home = () => {
  return (
    <Layout
      meta="Infipacks -- Solution for business requirements"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
    <BannerTwo />
    {/**  <Intro />*/}
      <AboutUsOne />
      <ServiceArea />
      <AboutCounterTwo />
      <Marqueue />
    {/*  <Strategy />
      <Team />
      <Testimonial />*/}
    </Layout>
  );
};

export default Home;
