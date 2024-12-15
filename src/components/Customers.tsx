import { CustomersContent } from "./const";
import { motion } from "motion/react";

const Customers = () => {
  return (
    <section
      id="customers"
      className="max-w-screen-2xl mx-auto my-10 py-10 px-7 grid lg:grid-flow-col gap-10 place-content-center place-items-center overflow-hidden"
    >
      {CustomersContent.map((customer, index) => (
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: index * 0.2 },
          }}
          viewport={{once:true,amount:0.8}}
          key={index}
          src={customer.image}
          alt="logoCustomer"
        />
      ))}
    </section>
  );
};

export default Customers;
