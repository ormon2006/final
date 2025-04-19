import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import Power from "../assets/power 1.png";
import Timer from "../assets/timer 1.png";
import Shop from "../assets/shop.png";
import Like from "../assets/Like.png";
import wk from "../assets/wk.jpg";

const IntroHome2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    axios
      .get("https://616f3d72066ea61b.mokky.dev/scooters3")
      .then((response) => {
        setScooters(response.data[0].scooters);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hover: {
      backgroundColor: "transparent",
      color: "#6F73EE",
      border: "2px solid #6F73EE",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="px-[165px] mt-[74px]">
        <motion.div 
          className="flex items-center justify-between"
          variants={itemVariants}
        >
          <h1 className="text-[black] font-semibold text-[35px]">
            САМАЯ ПОКУПАЕМАЯ ИГРА
          </h1>
          <div className="flex gap-[10px]">
            {["Хиты продаж", "Популярнее", "Для взрослых", "Открытый мир"].map((text, i) => (
              <motion.button
                key={i}
                className="shadow-2xl text-[#5D6C7B] font-normal text-xs h-[37px] bg-[#F4F7FB] rounded-[5px]"
                style={{ width: text === "Хиты продаж" ? '109px' : text === "Популярнее" ? '103px' : text === "Для взрослых" ? '116px' : '96px' }}
                variants={buttonVariants}
                whileHover="hover"
              >
                {text}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-[50px] flex justify-between"
          variants={containerVariants}
        >
          {scooters.map((data, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Card className="w-[255px] h-[492px]">
                <motion.img 
                  src={wk} 
                  alt="Wukong"
                  whileHover={{ scale: 1.05 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Wukong
                  </Typography>
                  <div>
                    <div className="mt-[20px]">
                      <div className="flex gap-[10px] items-center">
                        <img src={Power} alt="power" />
                        <p>0 опыта</p>
                      </div>
                      <div className="flex gap-[38px] mt-[17px]">
                        <div className="flex gap-[10px] items-center">
                          <img src={Timer} alt="timer" />
                          <p>0 часов</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[26px] mt-[27px]">
                      <p className="text-[#282739] text-[20px] font-semibold">
                        5 200 ₽
                      </p>
                      <div className="flex gap-[10px]">
                        <motion.div 
                          className="w-[40px] h-[40px] rounded-[100px] border border-[#EAEBED] cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                        >
                          <img className="m-[10px]" src={Shop} alt="shop" />
                        </motion.div>
                        <motion.div 
                          className="w-[40px] h-[40px] rounded-[100px] border border-[#EAEBED] cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                        >
                          <img className="w-[20px] h-[20px] m-[10px]" src={Like} alt="like" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroHome2;