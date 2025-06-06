import React from "react";
import Layout from "@/components/layout/Layout";
import ContactBanner from "@/components/container/contact/ContactBanner";
import ContactForm from "@/components/container/contact/ContactForm";
import ContactClient from "@/components/container/contact/ContactClient";
import ContactInstagram from "@/components/container/contact/ContactInstagram";

const Contact = () => {
  return (
    <Layout
      meta="Infipacks -- Solution for business requirements"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <ContactBanner />
      <ContactForm />

    </Layout>
  );
};

export default Contact;
