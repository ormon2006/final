import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VK from "../assets/012-vk 1.png";
import Insta from "../assets/013-instagram 1.svg";
import Youtube from "../assets/018-youtube 1.svg";
import TG from "../assets/003-telegram 2.png";
import Vector from "../assets/Vector.png";

const IntroBlog1 = () => {
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

  const categories = [
    { name: "Все", width: "59px" },
    { name: "Видео", width: "74px" },
    { name: "Советы", width: "78px" },
    { name: "Сравнения", width: "99px" },
    { name: "Топ", width: "58px" }
  ];

  const socialIcons = [
    { icon: VK, alt: "VK" },
    { icon: Insta, alt: "Instagram" },
    { icon: Youtube, alt: "YouTube" },
    { icon: TG, alt: "Telegram" }
  ];

  const galleryImages = [
    {
      url: "https://skinvault.gg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-banner.7b821cda.png&w=3840&q=75",
      alt: "CS2 Banner"
    },
    {
      url: "https://www.psu.com/wp/wp-content/uploads/2023/02/For-PSU-Article-1.jpg",
      alt: "Standoff 2"
    },
    {
      url: "https://skinsmonkey.com/og_image.png",
      alt: "CS2 Skins"
    },
    {
      url: "https://i.ytimg.com/vi/88fjxxcvmR8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNAds7MGUPCiCy6ehSRZTf3YRpSA",
      alt: "Gameplay"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Breadcrumbs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="px-4 md:px-[165px] mt-[22px] flex gap-2 items-center"
      >
        <motion.img 
          variants={itemVariants}
          className="w-[19px] h-[17px]" 
          src={Vector} 
          alt="home" 
        />
        <motion.div 
          variants={itemVariants}
          className="flex gap-2"
        >
          <Link className="text-[#5D6C7B] hover:text-[#6F73EE] transition" to="/">
            Главная
          </Link>
          <p className="text-[#5D6C7B]"> / Донат</p>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-6 px-4 md:px-[100px] relative"
      >
        <div className="relative rounded-2xl overflow-hidden">
          <img
            className="w-full h-[400px] md:h-[500px] object-cover"
            src="https://pibig.info/uploads/posts/2022-12/1670016281_7-pibig-info-p-cherno-oranzhevii-fon-oboi-7.png"
            alt="GameGo Blog"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
            <motion.h1 
              className="text-white text-4xl md:text-7xl lg:text-[140px] font-bold text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              БЛОГ GAMEGO
            </motion.h1>
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                className="w-full h-[180px] md:h-[200px] object-cover"
                src={image.url}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Filter Bar */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mt-8 md:mt-12 px-4 md:px-[165px] flex flex-col md:flex-row justify-between gap-4"
      >
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-2"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              className={`shadow-lg text-[#5D6C7B] text-xs h-[37px] bg-[#F4F7FB] rounded-md hover:border-2 hover:border-[#6F73EE] hover:text-[#6F73EE] transition`}
              style={{ width: category.width }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex gap-2"
        >
          {socialIcons.map((social, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-2 shadow-lg bg-[#F4F7FB] rounded-md hover:border-2 hover:border-[#6F73EE] cursor-pointer"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img className="w-5 h-5" src={social.icon} alt={social.alt} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroBlog1;