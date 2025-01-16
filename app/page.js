import React from "react";
import MainNav from "@/components/MainNav";
import ValuesCard from "@/components/Valuecard/ValuesCard";
import { valuecard, culture } from "../assets/assets";
import Perkcards from "@/components/perkcard/Perkcards";
import Ourwork from "@/components/Work/Ourwork";
import Simplecard from "@/components/Simplecard/Simplecard";
import Footer from "@/components/Footer/Footer";
import Faqs from "@/components/Faqs/Faqs";
import Herosection from "@/components/Hero/Herosection";
//
const page = () => {
  return (
    <>
      <div className={` scrollbar-hide`}>
        <MainNav />
        <Herosection />
        <ValuesCard valuecard={valuecard} />
        <Simplecard />
        <Perkcards culture={culture} />
        <Ourwork />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};
export default page;
