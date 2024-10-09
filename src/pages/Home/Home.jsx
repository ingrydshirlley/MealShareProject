import React from "react";
import MainSection from "./components/main_section/MainSection";
import Section_2 from "./components/section_2/Section_2";
import Section_3 from "./components/section_3/Section_3";
import Section_4 from "./components/section_4/Section_4";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <MainSection/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Footer/>
    </>
  )
}

export default Home;
