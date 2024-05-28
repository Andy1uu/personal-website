import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
import SocialLink from "@/components/SocialLink";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a base site for Andy to create his websites.",
};

const iconSize = 48;

const socialLinks = [
  {
    keyProp: "github",
    link: "https://github.com/andy1uu",
    icon: <FaGithub size={iconSize} />,
  },
  {
    keyProp: "linkedin",
    link: "https://github.com/andy1uu",
    icon: <FaLinkedin size={iconSize} />,
  },
  {
    keyProp: "instagram",
    link: "https://github.com/andy1uu",
    icon: <FaInstagram size={iconSize} />,
  },
  {
    keyProp: "facebook",
    link: "https://github.com/andy1uu",
    icon: <FaFacebook size={iconSize} />,
  },
  {
    keyProp: "gmail",
    link: "https://github.com/andy1uu",
    icon: <FaEnvelope size={iconSize} />,
  },
];

const Home = () => {
  return (
    <section className="Homepage flex w-full flex-col bg-light p-8 text-primary dark:bg-dark xl:flex-row-reverse">
      <Image
        src="/Profile_Luu_Andy_Square.jpg"
        width={2048}
        height={2048}
        alt="Picture of Andy Luu"
        className="Homepage-image mx-auto my-4 mb-4 w-3/4 rounded-full lg:h-[512px] lg:w-[512px] xl:my-auto 2xl:h-[720px] 2xl:w-[720px]"
      />
      <div className="Homepage-textAndSocial flex flex-col justify-center 2xl:w-1/2">
        <div className="Homepage-begin mb-4 text-dark dark:text-light lg:text-xl">
          Hello World! I'm
        </div>
        <h1 className="Homepage-name mb-3 text-5xl font-bold lg:text-7xl">
          <a>Andy Luu!</a>
        </h1>
        <div className="Homepage-title mb-2 text-2xl font-medium lg:text-4xl">
          I am a Software Engineer and Graduate Researcher!
        </div>
        <div className="Homepage-description mb-2 text-dark dark:text-light lg:text-xl">
          I design digital interfaces for all different types of software while
          researching novel HCI solutions.
        </div>
        <div className="Homepage-social">
          <div className="Homepage-socialTitle mb-2 text-2xl font-medium lg:text-4xl">
            Lets Connect!
          </div>
          <div className="Homepage-socialLinks flex flex-wrap gap-4">
            {socialLinks.map((socialLink) => {
              return (
                <SocialLink
                  key={socialLink.keyProp}
                  link={socialLink.link}
                  icon={socialLink.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
