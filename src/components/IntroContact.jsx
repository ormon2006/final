import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Vector from '../assets/Vector.png';
import Mask2 from '../assets/Go.jpg';

const IntroContact = () => {
  return (
    <div className="overflow-hidden">
      {/* Breadcrumbs */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-4 md:px-[165px] mt-[22px] flex gap-2 items-center"
      >
        <img className="w-[19px] h-[17px]" src={Vector} alt="home" />
        <div className="flex gap-2">
          <Link className="text-[#5D6C7B] hover:text-[#6F73EE] transition" to="/">
            Главная
          </Link>
          <p className="text-[#5D6C7B]"> / Контакты</p>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-5 px-4 md:px-[100px] relative"
      >
        <div className="relative rounded-2xl overflow-hidden">
          <img
            className="w-full h-[200px] md:h-[300px] object-cover"
            src={Mask2}
            alt="GameGo Contacts"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[350px] p-4">
            <motion.h1 
              className="text-white text-2xl md:text-[35px] font-semibold text-center"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              КОНТАКТЫ И АДРЕСА
            </motion.h1>
            <motion.h1 
              className="text-white text-2xl md:text-[35px] font-semibold text-center"
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              GAMEGO НОМЕР
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroContact;