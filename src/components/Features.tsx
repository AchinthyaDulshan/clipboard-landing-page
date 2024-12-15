import React from "react";
import { animateVariants, FeaturesContent } from "./const";
import { motion } from "motion/react";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className="mx-auto max-w-screen-2xl my-10 px-7 overflow-hidden">
      <motion.h2
        variants={animateVariants.fromRight}
        initial="stayRight"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8 }}
      >
        {FeaturesContent.heading}
      </motion.h2>
      <motion.p
        variants={animateVariants.fromLeft}
        initial="stayLeft"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8}}
        className="subHeading"
      >
        {FeaturesContent.subheading}
      </motion.p>
      <div className="grid lg:grid-cols-3 gap-16 pt-14 lg:pt-10">
        {FeaturesContent.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{opacity:0,translateY:-50}}
            whileInView={{opacity:1,translateY:0,transition:{duration:0.5,delay:index*0.1}}}
            viewport={{once:true, amount: 0.8}}
            className="grid place-items-center lg:place-content-start"
          >
            <img className="h-7" src={feature.featureIcon} alt="icon" />
            <h3>{feature.title}</h3>
            <p className="subHeading text-xs">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
