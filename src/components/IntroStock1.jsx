import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import Valve from "../assets/aq.jpg";
import Vector from "../assets/Vector.png";

const   IntroStock1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const bannerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const games = [
    "Counter Strike 2", "StandOff 2", "Call of Duty", "Valorant", 
    "Dota 2", "Minecraft", "Roblox", "Mobile Legends", 
    "Pubg", "Free Fire", "Fortnite", "Undawn", "CS GO"
  ];

  const bonuses = [
    "акция на 15%", "акция на 10%", "акция на 20%", "акция на 5%",
    "акция на 10%", "акция на 15%", "акция на 10%", "акция на 5%",
    "акция на 25%", "акция на 20%", "акция на 10%", "акция на 5%",
    "акция на 15%"
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Breadcrumbs */}
      <motion.div 
        className="px-[165px] mt-[22px] flex gap-[5px] items-center"
        variants={itemVariants}
      >
        <img className="w-[19px] h-[17px]" src={Vector} alt="home icon" />
        <div className="flex gap-[5px]">
          <Link className="text-[#5D6C7B] hover:text-[#6F73EE] transition-colors" to="/">
            Главная
          </Link>
          <p> / Акции</p>
        </div>
      </motion.div>

      {/* Main Banner */}
      <motion.div 
        className="flex mt-[20px] px-[100px] relative"
        variants={bannerVariants}
      >
        <motion.img
          className="relative w-[1400px] rounded-[15px]"
          src={Valve}
          alt="promo banner"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        />
        <motion.div 
          className="absolute pl-[135px] pt-[33px]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div 
            className="flex gap-[10px]"
            variants={itemVariants}
          >
            <motion.button 
              className="w-[75px] h-[25px] bg-[#EE685F] text-[white] text-[14px] rounded-[5px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              До 01.09
            </motion.button>
            <motion.button 
              className="w-[93px] h-[25px] bg-[#75D14A] text-[white] text-[14px] rounded-[5px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              + 2 подарка
            </motion.button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-[#FFFFFF] w-[600px] text-[35px] font-semibold pt-[11px]"
              whileHover={{ x: 5 }}
            >
              АКЦИИ ДЛЯ ДОНАТА В ИГРАХ
            </motion.h1>
            
            <motion.div 
              className="flex"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-[#FFFFFF] w-[600px] text-[25px] font-semibold pt-[11px]">
                  АКЦИИ ДЛЯ ИГР:
                </h1>
                <div className="flex flex-col gap-[3px]">
                  {games.map((game, index) => (
                    <motion.p 
                      key={index}
                      className="text-[gray] text-[20px]"
                      custom={index}
                      variants={itemVariants}
                    >
                      {game}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="border border-[gray] mr-[200px] ml-[-200px]"
                variants={itemVariants}
              />
              
              <motion.div variants={itemVariants}>
                <h1 className="text-[#FFFFFF] w-[600px] text-[25px] font-semibold pt-[11px]">
                  БОНУС ПРИ ДОНАТЕ:
                </h1>
                <div className="flex flex-col gap-[3px]">
                  {bonuses.map((bonus, index) => (
                    <motion.p 
                      key={index}
                      className="text-[lime] text-[20px]"
                      custom={index}
                      variants={itemVariants}
                    >
                      {bonus}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntroStock1;