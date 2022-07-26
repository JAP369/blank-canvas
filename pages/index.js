/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Layout from "layouts/Layout.js";
import Hero from "components/Hero";
// import Counter from "components/Counter";
import Featured from "components/Featured";
import Services from "components/Services";
import Section from "components/Section";
import Strategy from "components/Strategy";
import Planning from "components/Planning";
import Planning2 from "components/Planning2";
import Contact from "components/Contact";
import Team from "components/Team";
import Build from "components/Build";
// import Starter from "components/Starter";

export default function Index() {
  return (
    <>
      <Layout>
        <Hero />
        <Featured />
        <Services />

        {/* <Counter /> */}
        <Planning />
        <Planning2 />
        <Strategy />
        {/* <Section /> */}
        <Team />
        <Build />
        <Contact />

        {/* <Starter /> */}
      </Layout>
    </>
  );
}
