import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Young4 from '../assets/young4.png'
import Young5 from '../assets/young5.png'
import Young6 from '../assets/young6.png'
import itt from '../assets/itt.jpg'
import ro from '../assets/ro.jpg'
import EG from '../assets/EGroup100.svg'
import Eva from '../assets/eva.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import Img22 from '../assets/Polygon 8.png'
import { Button } from "@mui/material"
import 'swiper/css';

const IntroHome10 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const games = [
    { img: itt, title: "IT TAKES TWO", desc: "It Takes Two — кооперативная приключенческая игра (2021), созданная для совместного прохождения вдвоем.", date: "29.03.2025", views: "20к" },
    { img: ro, title: "R.E.P.O.", desc: "R.E.P.O. — кооп-хоррор на 6 игроков с заданиями и физикой объектов. Вышла в раннем доступе", date: "09.04.2025", views: "32к" }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="mt-[100px] ml-[165px]">
        <motion.h1 
          className="text-[35px] font-semibold w-[923px] text-[#282739]"
          variants={itemVariants}
        >
          НОВЫЕ ИГРЫ
        </motion.h1>
        
        <motion.div 
          className="mt-[60px]"
          variants={itemVariants}
        >
          <Swiper
            spaceBetween={-25}
            slidesPerView={3}
          >
            {[...games, ...games, ...games].map((game, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="mb-10"
                >
                  <div>
                    <div className="flex w-[350px]">
                      <motion.img 
                        className="relative rounded-t-xl" 
                        src={game.img} 
                        alt="game" 
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                        <Button className="w-[68px] h-[68px]">
                          <img className="w-[16px] h-[20px]" src={Img22} alt="play" />
                        </Button>
                      </div>
                    </div>
                    <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                      <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">{game.title}</p>
                      <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">{game.desc}</p>
                      <div className="flex gap-[25px] mt-[18px]">
                        <div className="flex gap-[11px] items-center">
                          <div><img src={EG} alt="date" /></div>
                          <p>{game.date}</p>
                        </div>
                        <div className="flex gap-[11px] items-center">
                          <div><img src={Eva} alt="views" /></div>
                          <p>{game.views}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default IntroHome10