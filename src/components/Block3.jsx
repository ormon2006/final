import { motion } from "framer-motion";
import VK2 from "../assets/012-vk 2.png";
import Insta2 from "../assets/013-instagram 1.png";
import Youtube2 from "../assets/018-youtube 1.png";
import TG2 from "../assets/003-telegram 3.png";

const Block3 = () => {
  // Анимации
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="max-w-[1440px] mx-auto px-4 md:px-[165px] mt-[80px] md:mt-[134px]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div variants={itemVariants}>
          <h1 className="text-[#282739] font-semibold text-[22px] md:text-[25px] max-w-[500px] leading-tight">
            ПОДПИСЫВАЙТЕСЬ И ПЕРВЫМИ УЗНАВАЙТЕ О НОВЫХ СКИДКАХ, АКЦИЯХ И РОЗЫГРЫШАХ ПОДАРКОВ
          </h1>
          <p className="pt-[15px] text-[#5D6C7B]">Станьте частью сообщества GameGo</p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-[355px] h-[270px] bg-[#F4F7FB] rounded-[10px] shadow-md"
        >
          <div className="flex flex-col gap-[10px] px-4 md:px-[33px] py-[30px]">
            <motion.button 
              className="w-full h-[45px] bg-[#4B729F] flex items-center rounded-[5px] justify-between px-[17px] text-white"
              variants={buttonVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-[15px] md:gap-[21px]">
                <img src={VK2} alt="VK" className="w-5 h-5" />
                <span>Вконтакте</span>
              </div>
              <span>3 300</span>
            </motion.button>

            <motion.button 
              className="w-full h-[45px] bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center rounded-[5px] justify-between px-[17px] text-white"
              variants={buttonVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-[15px] md:gap-[21px]">
                <img src={Insta2} alt="Instagram" className="w-5 h-5" />
                <span>Instagram</span>
              </div>
              <span>10 602</span>
            </motion.button>

            <motion.button 
              className="w-full h-[45px] bg-[#E53935] flex items-center rounded-[5px] justify-between px-[17px] text-white"
              variants={buttonVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-[15px] md:gap-[21px]">
                <img src={Youtube2} alt="YouTube" className="w-5 h-5" />
                <span>YouTube</span>
              </div>
              <span>3 603</span>
            </motion.button>

            <motion.button 
              className="w-full h-[45px] bg-[#039BE5] flex items-center rounded-[5px] justify-between px-[17px] text-white"
              variants={buttonVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-[15px] md:gap-[21px]">
                <img src={TG2} alt="Telegram" className="w-5 h-5" />
                <span>Telegram</span>
              </div>
              <span>432</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Block3;