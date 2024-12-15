import React from "react";
import { animateVariants, FeaturingProductContent } from "./const";
import { motion } from "motion/react";

type Props = {};

const Featuring = (props: Props) => {
  return (
    <section className="px-7 mx-auto my-10 py-5 overflow-hidden">
      <motion.h2
        variants={animateVariants.fromLeft}
        initial="stayLeft"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8 }}
      >
        {FeaturingProductContent.heading}
      </motion.h2>
      <motion.p
        variants={animateVariants.fromRight}
        initial="stayRight"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8 }}
        className="subHeading"
      >
        {FeaturingProductContent.subheading}
      </motion.p>
      <motion.img
        variants={animateVariants.zoomIn}
        initial="staySmall"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8 }}
        className="mx-auto pt-16"
        src={FeaturingProductContent.image}
        alt="Devices"
      />
    </section>
  );
};

export default Featuring;
