import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.png";
import EG from "../assets/EGroup100.svg";
import Eva from "../assets/eva.svg";

const Block1 = () => {
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
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.01,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Хлебные крошки */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="px-4 md:px-[165px] mt-[22px] flex gap-2 items-center"
      >
        <motion.img 
          className="w-[19px] h-[17px]" 
          src={Vector} 
          alt="Иконка дома"
          variants={itemVariants}
        />
        <motion.div className="flex gap-2 flex-wrap" variants={itemVariants}>
          <Link className="text-[#5D6C7B] hover:text-[#3a4553] transition-colors" to="/">
            Главная
          </Link>
          <Link className="text-[#5D6C7B] hover:text-[#3a4553] transition-colors" to="/blog">
            / Донат
          </Link>
          <p className="text-[#282739]"> / Как играть в CS2 и Standoff 2</p>
        </motion.div>
      </motion.div>

      {/* Основное изображение */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 md:px-[250px] mt-[20px]"
      >
        <motion.img
          className="rounded-[15px] w-full h-auto shadow-lg"
          src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66765aa095ff83700f20f51f_671737de00457a06ef919278/smart_crop_516x290"
          alt="CS2 и Standoff 2 gameplay"
          variants={imageVariants}
          whileHover="hover"
        />
      </motion.div>
    </div>
  );
};

export default Block1;