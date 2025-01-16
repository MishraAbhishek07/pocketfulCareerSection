import React from "react";
import MainNav from "@/Components/MainNav";
import ValuesCard from "@/Components/Valuecard/ValuesCard";
import { valuecard, culture } from "./assets/assets";
import Perkcards from "@/Components/perkcard/Perkcards";
import Ourwork from "@/Components/Work/Ourwork";
import Simplecard from "@/Components/Simplecard/Simplecard";
import Footer from "@/Components/Footer/Footer";
import Faqs from "@/Components/Faqs/Faqs";
import Herosection from "@/Components/Hero/Herosection";
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
