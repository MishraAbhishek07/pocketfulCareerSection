import React from 'react';
import Image from 'next/image';
import Fb from "@/public/facebookLogo.svg";
import Twitter from "@/public/twiterLogo.svg";
import Insta from "@/public/instagramLogo.svg";
import LinkedIn from "@/public/linkdinLogo.svg";
import PocketLogo from "@/public/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-red-50 w-full text-white py-8">
      <div className="container mx-auto md:mx-20 mt-14 px-6 sm:px-8 md:px-12 flex flex-col md:flex-row gap-8">
        {/* Footer Hero */}
        <div className="flex flex-col  md:items-start  md:text-start">
          <Image
            alt="Pocketful Logo"
            src={PocketLogo}
            loading="lazy"
            width={238}
            height={40}
          />
          <p className="mt-4 text-sm font-semibold text-black md:max-w-xs max-w-xl  ">
            Pocketful is an advanced trading platform that empowers traders with cutting-edge technology. We provide innovative tools and resources to make trading more accessible and practical.
          </p>
          <div className="flex justify-center md:justify-start gap-4 md:gap-10 lg:gap-6 mt-6">
            <Image alt="Facebook Icon" src={Fb} loading="lazy" width={32} height={32} />
            <Image alt="Twitter Icon" src={Twitter} loading="lazy" width={32} height={32} />
            <Image alt="Instagram Icon" src={Insta} loading="lazy" width={32} height={32} />
            <Image alt="LinkedIn Icon" src={LinkedIn} loading="lazy" width={32} height={32} />
          </div>
        </div>

        {/* Footer Menu */}
        <div className="grid grid-cols-2 md:mx-28 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg text-black font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li className="text-sm text-black">Open an account</li>
              <li className="text-sm text-black">Pocketful Web</li>
              <li className="text-sm text-black">Pocketful App</li>
              <li className="text-sm text-black">Investment Tool</li>
              <li className="text-sm text-black">Trading Tool</li>
              <li className="text-sm text-black">Support Portal</li>
              <li className="text-sm text-black">Compliance Links</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-black font-semibold mb-4">Pages</h3>
            <ul className="space-y-4">
              <li className="text-sm text-black">Tools</li>
              <li className="text-sm text-black">Blogs</li>
              <li className="text-sm text-black">Stocks Pages</li>
              <li className="text-sm text-black">IPOs</li>
              <li className="text-sm text-black"> Schemes</li>
              <li className="text-sm text-black">Index Heat Map</li>
              <li className="text-sm text-black">Stock Screener</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-black font-semibold mb-4">Products</h3>
            <ul className="space-y-4">
              <li className="text-sm text-black">Stocks</li>
              <li className="text-sm text-black">Commodity</li>
              <li className="text-sm text-black">Options</li>
              <li className="text-sm text-black">Currency</li>
              <li className="text-sm text-black">Futures</li>
              <li className="text-sm text-black">ETF</li>
              <li className="text-sm text-black">Mutual Funds</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-black font-semibold mb-4">Company</h3>
            <ul className="space-y-4">
              <li className="text-sm text-black">About Us</li>
              <li className="text-sm text-black">Contact Us</li>
              <li className="text-sm text-black">Terms &amp; Conditions</li>
              <li className="text-sm text-black"><span>Policies&amp;Procedures</span></li>
              <li className="text-sm text-black">Privacy Policy</li>
              <li className="text-sm text-black">Disclosure</li>
              <li className="text-sm text-black">Press &amp; Media</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Helper */}
      <div className="container mx-auto md:mx-20 px-6 sm:px-8 md:px-12 text-sm text-gray-400 mt-8">
        <p className="block mb-4">
          <b>Pocketful Fintech Capital Private Limited (CIN U65999DL2021PTC390548):</b><br />
          The SEBI Registration No. allotted to us is INZ000313732.<br />
          NSE Member Code: 90326 | BSE Member Code: 6808 | MCX Member Code: 57120<br />
          DP CDSL: 12099800<br />
          <b>Compliance Officer:</b> Mr. Randhir Kumar Chaudhari<br />
          <b>Tel no:</b> 011- 49022222 / 011-49022277<br />
          <b>Email:</b> randhir@pocketful.in
        </p>
        <p>
          <b>For complaints, email us at:</b> legal@pocketful.in
        </p>
        <div className="mt-4">
          <span className="text-blue-400">SEBI SCORES</span>
          <span className="mx-2">|</span>
          <span className="text-blue-400">Smart Online Dispute Resolution</span>
          <span className="mx-2">|</span>
          <span className="text-blue-400">Link To Circular</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
