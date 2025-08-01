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
import AntiVibrationRubberPads from "public/images/service/A1-Anti-Vibration-Rubber-Pads.jpg";
import A2AntiVibrationMounts from "public/images/service/A2-1-Anti-Vibration-Mounts.jpg";
import A22AntiVibrationMounts from "public/images/service/A2-2 Anti-Vibration-Mounts.jpg";
import A23AntiVibrationMounts from "public/images/service/A2-3-Anti-Vibration-Mounts.jpg";
import antivibrationpad3 from "public/images/service/anti-vibration-pad-3.jpg";
import F1EVAFoam from "public/images/service/F1EVA-Foam.png";
import F3EPDMFoam from "public/images/service/F3-EPDM-Foam.png";
import F4XLPEfoam from "public/images/service/F4-XLPE-foam.jpg";
import F5PUfoam from "public/images/service/F5-PU-foam.jpg";
import F6FoamGasketTape from "public/images/service/F6-Foam-Gasket-Tape.jpg";
import R1NeopreneRubbersheet from "public/images/service/R1-Neoprene-Rubber-sheet.jpg";
import R2EPDMRubberSheet from "public/images/service/R2-EPDM-Rubber-Sheet.jpg";
import R3SiliconRubbersheet from "public/images/service/R3-Silicon-Rubber-sheet.jpg";
import R4FoodGradeRubberSheets from "public/images/service/R4-Food-GradeRubber-Sheets.jpg";
import R5NaturalRubberSBRSheets from "public/images/service/R5-Natural-Rubber-SBR-Sheets.jpg";
import R6NitrileRubberSheet from "public/images/service/R6-Nitrile-Rubber-Sheet.jpg";
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
              <h6 className="sub-title"></h6>
              <h2 className="title"> Our Products</h2>
            </div>
          </div>
        </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title mb-0">
                <h2 className="sub-title text-left">Foams</h2>
                
              </div>
            </div>
          </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={antivibrationpad3} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">EVA Foam</Link>
                </h4>
                <p>
                  EVA (Ethylene Vinyl Acetate) Foam is engineered for performance and reliability across a wide range of applications. Available in various thicknesses and hardness levels, it features a closed-cell structure that ensures excellent moisture resistance, long-term durability, Chemical Resistance, Antibacterial & Non-Toxic.
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
                <Image src={F1EVAFoam} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/">Silicone foam</Link>
                </h4>
                <p>
                Silicone Foam is engineered for high-performance applications where durability, flexibility, and thermal stability are essential. Available in various thicknesses, it features a low specific gravity and delivers excellent sealing and cushioning performance. With high flame retardancy and a wide temperature resistance range from -60°C to 230°C, it is ideal for demanding environments.
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={F3EPDMFoam} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">EPDM Foam</Link>
                </h4>
                <p>
                  EPDM Foam offers excellent resistance to aging and weathering, including prolonged exposure to light, heat, and oxygen. It also provides outstanding ozone resistance, ensuring long-term durability in harsh environments. With a wide operating temperature range from -40°C to 150°C.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={F4XLPEfoam} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">XLPE Foam</Link>
                </h4>
                <p>
                XLPE Foam is a high-performance, closed-cell material produced through electron radiation crosslinking, offering enhanced durability and thermal stability. Available in a variety of thicknesses, it is widely used in building insulation, HVAC systems, and premium packaging applications.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={F5PUfoam} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">PU Foam</Link>
                </h4>
                <p>
                 PU Foam is a multi-functional material known for its excellent thermal insulation, sound absorption, and shock resistance. It also offers flame retardant, antistatic, and breathable properties, making it suitable for a wide range of industrial and commercial applications.
                </p>
               
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title mb-0">
                <h2 className="sub-title text-left">Rubber sheets</h2>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={F6FoamGasketTape} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">Foam Tapes</Link>
                </h4>
                <p>
                 Foam Tapes are versatile adhesive solutions designed for sealing, cushioning, insulating, and vibration dampening across a wide range of applications. Made from high-quality materials such as EPDM, PU, PE, or PVC foam, these tapes offer excellent conformability, adhesion, and resistance to moisture, dust, and temperature variations.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={R1NeopreneRubbersheet} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">Neoprene Rubber sheet</Link>
                </h4>
                <p>
                Neoprene Rubber Sheets are engineered for high-performance applications across industrial, marine, automotive, and construction sectors. Known for their exceptional resistance to oils, chemicals, and mild acids, these sheets maintain flexibility and strength under mechanical stress and across a wide temperature range. Available in Flame Retardant UL94 V0 grade.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={R5NaturalRubberSBRSheets} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">Natural Rubber / SBR Sheets</Link>
                </h4>
                <p>
                 Natural Rubber and SBR (Styrene-Butadiene Rubber) Sheets are known for their outstanding physical and mechanical properties, making them ideal for a wide range of industrial and commercial applications. These sheets offer a perfect balance of durability, flexibility, and affordability.
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={R2EPDMRubberSheet} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#"> EPDM Rubber Sheet </Link>
                </h4>
                <p>
                EPDM Rubber Sheets are engineered for superior performance in extreme environmental conditions. Known for their outstanding resistance to UV rays, ozone, steam, heat, and weathering, these sheets are ideal for both indoor and outdoor applications. They maintain flexibility even at temperatures as low as -50°C, ensuring reliable performance in a wide range of climates. Available in Flame Retardant UL94 V0 grade.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={R3SiliconRubbersheet} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">Silicon Rubber sheet</Link>
                </h4>
                <p>
                Silicone Rubber Sheets are engineered to perform reliably in the most demanding environments. With a wide temperature tolerance from -60°C to +230°C, they retain their physical and mechanical properties even under extreme thermal stress. These sheets are safe for use in ovens, microwaves, and freezers, making them ideal for both industrial and food-grade applications.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={R4FoodGradeRubberSheets} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">Food Grade Rubber Sheets</Link>
                </h4>
                <p>
                  Food Grade Rubber Sheets are specially formulated for applications requiring the highest standards of cleanliness, safety, and performance. Designed with a smooth, visually appealing finish, they offer enhanced durability and resistance to environmental and chemical exposure—making them ideal for food processing, packaging, and pharmaceutical industries.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={R6NitrileRubberSheet} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">Nitrile Rubber Sheet</Link>
                </h4>
                <p>
                  Nitrile Rubber Sheets are specifically designed for applications requiring excellent resistance to oils, fuels, water, and non-polar solvents. Known for their durability and flexibility, these sheets are ideal for use in automotive, industrial, and sealing applications.
                </p>
               
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title mb-0">
                <h2 className="sub-title text-left">Anti-vibration</h2>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={AntiVibrationRubberPads} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">Anti-Vibration Rubber Pads</Link>
                </h4>
                <p>
                 Anti-Vibration Rubber Pads, also known as vibration isolation pads, are designed to absorb and dissipate vibrational energy, preventing it from transferring to surrounding equipment or structures. These pads play a crucial role in reducing noise, minimizing wear and tear, and extending the lifespan of machinery.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={A2AntiVibrationMounts} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/#">Anti Vibration Mounts</Link>
                </h4>
                <p>
                 Anti-Vibration Mounts are specifically designed to absorb and isolate vibrations, shocks, and noise generated by industrial and commercial machinery. Constructed from high-quality rubber and durable metal components, these mounts offer exceptional load-bearing capacity and long-lasting performance, even in the most demanding operational environments.
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
