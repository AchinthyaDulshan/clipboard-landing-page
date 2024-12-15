import React from "react";
import { animateVariants, ServicesContent } from "./const";
import { motion } from "motion/react";

type Props = {};

const Services = (props: Props) => {
  return (
    <section
      id="services"
      className="my-10 pb-5 px-7 max-w-screen-2xl mx-auto "
    >
      <motion.h2
        variants={animateVariants.fromRight}
        initial="stayRight"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8 }}
      >
        {ServicesContent.heading}
      </motion.h2>
      <motion.p
        variants={animateVariants.fromLeft}
        initial="stayLeft"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8 }}
        className="subHeading lg:text-base"
      >
        {ServicesContent.subheading}
      </motion.p>
      <div className="flex md:flex-row justify-center flex-col gap-5 pt-10">
        <div className="flex items-center md:justify-start justify-center">
          <motion.img
            variants={animateVariants.zoomIn}
            initial="staySmall"
            whileInView="normal"
            viewport={{ once: true, amount: 0.8 }}
            className="w-11/12"
            src={ServicesContent.image}
            alt="Computer"
          />
        </div>
        <div className="px-5 flex flex-col justify-center items-start">
          {ServicesContent.services.map((service, index) => (
            <motion.div
              className="lg:w-2/3 w-full text-center md:text-left"
              key={index}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: index * 0.2 },
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <h3 className="pb-2">{service.tile}</h3>
              <p className="text-Grayish-Blue text-sm">{service.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
