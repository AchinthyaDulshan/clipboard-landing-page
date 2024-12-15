import { animateVariants, HeroContent } from "./const";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-dvh w-screen max-w-screen-2xl flex justify-center items-center flex-col bg-cover bg-no-repeat bg-center px-7 mx-auto overflow-hidden"
    >
      <motion.img
        variants={animateVariants.zoomIn}
        initial="staySmall"
        whileInView="normal"
        viewport={{once:true}}
        src={HeroContent.logo}
        className="py-5"
        alt="Logo"
      />
      <motion.h1
        variants={animateVariants.fromLeft}
        initial="stayLeft"
        whileInView="normal"
        viewport={{once:true}}
      >
        {HeroContent.heading}
      </motion.h1>
      <motion.p
        variants={animateVariants.fromRight}
        initial="stayRight"
        whileInView="normal"
        viewport={{once:true}}
        className="subHeading lg:text-lg"
      >
        {HeroContent.subHeading}
      </motion.p>
      <div className="grid md:grid-cols-2 gap-5 pt-10">
        <motion.a
          variants={animateVariants.fromTop}
          initial="stayTop"
          whileInView="normal"
          viewport={{once:true}}
          href={HeroContent.btn_1.link}
          className="btnDownload bg-Strong-Cyan border-b-cyan-700 shadow-Strong-Cyan/80"
          target="_blank"
        >
          {HeroContent.btn_1.text}
        </motion.a>
        <motion.a
          variants={animateVariants.fromTop}
          initial="stayTop"
          whileInView="normal"
          viewport={{once:true}}
          href={HeroContent.btn_2.link}
          className="btnDownload bg-Light-Blue border-b-blue-700 shadow-Light-Blue/80"
          target="_blank"
        >
          {HeroContent.btn_2.text}
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
