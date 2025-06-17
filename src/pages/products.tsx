import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceArea from "@/components/container/service/ServiceArea";
import antivibrationpad3 from "public/images/service/ourproducts.jpg";
import Image from "next/image";

const Products = () => {
  return (
    <Layout
      meta="Infipacks -- Solution for business requirements"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
           <div className="container">    <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="">
              <div className="">
                <Image src={antivibrationpad3} alt="img" />
              </div>
              </div>
              </div>
              </div>
              </div>

      <ServiceArea />
    </Layout>
  );
};

export default Products;
