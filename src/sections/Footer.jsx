import { footerLinks, socialMedia } from "../constans";
import { footerLogo } from "../assets/images";
import React from "react";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Select from more than <b>700</b> shoes in <b>190</b> countries.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between max-sm:justify-between max-md:justify-around gap-20 lg:gap-10 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white text-2xl font-medium font-montserrat leading-normal mb-6">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 cursor-pointer text-base leading-normal font-montserrat hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center text-white-400 mt-24 max-sm:flex-col">
        <div className="flex flex-1 items-center justify-start gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
