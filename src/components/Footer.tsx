import React from "react";
import { animateVariants, FooterContent } from "./const";
import { motion } from "motion/react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="max-w-screen-2xl mx-auto mt-10 px-7 py-7 bg-Grayish-Blue/15 overflow-hidden">
      <div className="grid lg:grid-cols-3 gap-10 place-content-center place-items-center">
        <motion.img
          variants={animateVariants.zoomIn}
          initial="staySmall"
          whileInView="normal"
          viewport={{ once: true, amount: 0.8 }}
          className="h-16 place-self-center"
          src={FooterContent.logo}
          alt="logo"
        />
        <div className="text-Dark-Grayish-Blue text-sm font-normal grid lg:grid-cols-3 lg:grid-rows-2 lg:place-items-start place-items-center gap-4">
          {FooterContent.navLinks.map((navlink, index) => (
            <motion.a
              initial={{ opacity: 0}}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: index * 0.2 },
              }}
              viewport={{ once: true}}
              className="hover:text-Strong-Cyan cursor-pointer transition-all duration-200"
              key={index}
              href={navlink.link}
            >
              {navlink.linkText}
            </motion.a>
          ))}
        </div>
        <div className="grid grid-flow-col gap-10 place-content-center place-items-center">
          {FooterContent.socialMedia.map((mediaLink, index) => (
            <motion.a
              initial={{ opacity: 0, scale:0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: index * 0.2 },
              }}
              viewport={{ once: true}}
              className=" cursor-pointer transition-all duration-200"
              key={index}
              href={mediaLink.link}
            >
              {mediaLink.icon} 
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
