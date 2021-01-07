import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleWork = () => {
  const { workProjects, lng } = useGlobalContext();
  const [displayWork, setDisplayWork] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const workById = workProjects.filter((item) => item.id == id);
    setDisplayWork(workById);
  }, [id]);

  console.log(displayWork);
  return (
    <motion.div exit={{ opacity: 0 }}>
      {/* <p>test</p>
      <p>{id}</p> */}
      {displayWork.map((item, index) => {
        const {
          id,
          name_tw,
          name_en,
          image,
          tag,
          date,
          description_tw,
          description_en,
        } = item;
        return (
          <div key={id}>
            <img src={image} alt={name_en} />
            <h2>{`${lng === "en" ? name_en : name_tw}`}</h2>
            <ul>
              {tag.map((value) => {
                return <li>{value}</li>;
              })}
            </ul>
            <p>{date}</p>
            <p>{`${lng === "en" ? description_en : description_tw}`}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default SingleWork;
