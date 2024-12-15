import { animateVariants, BottomDownloadContent } from "./const";
import { motion } from "motion/react";

const Download = () => {
  return (
    <section id="download" className="my-5 px-7 py-16 max-w-screen-2xl mx-auto overflow-hidden">
      <motion.h2
        variants={animateVariants.fromRight}
        initial="stayRight"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8 }}
      >
        {BottomDownloadContent.heading}
      </motion.h2>
      <motion.p
        variants={animateVariants.fromLeft}
        initial="stayLeft"
        whileInView="normal"
        viewport={{ once: true, amount: 0.8 }}
        className="subHeading"
      >
        {BottomDownloadContent.subheading}
      </motion.p>
      <div className="grid md:grid-flow-col gap-5 pt-10 place-content-center">
        <motion.a
          variants={animateVariants.fromTop}
          initial="stayTop"
          whileInView="normal"
          viewport={{ once: true, amount: 0.8 }}
          href={BottomDownloadContent.btn_1.link}
          className="btnDownload bg-Strong-Cyan border-b-cyan-700 shadow-Strong-Cyan/80"
          target="_blank"
        >
          {BottomDownloadContent.btn_1.text}
        </motion.a>
        <motion.a
          variants={animateVariants.fromTop}
          initial="stayTop"
          whileInView="normal"
          viewport={{ once: true, amount: 0.8 }}
          href={BottomDownloadContent.btn_2.link}
          className="btnDownload bg-Light-Blue border-b-blue-700 shadow-Light-Blue/80"
          target="_blank"
        >
          {BottomDownloadContent.btn_2.text}
        </motion.a>
      </div>
    </section>
  );
};

export default Download;
