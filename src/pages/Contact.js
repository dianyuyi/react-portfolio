import React from "react";
import { motion } from "framer-motion";
import { Title, SubmitForm, WaterDraw } from "../components";

const Contact = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title heading={"contact_title"} home={false} />
      <SubmitForm />
      {/* <WaterDraw /> */}
    </motion.div>
  );
};

export default Contact;
