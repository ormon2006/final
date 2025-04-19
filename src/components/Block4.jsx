import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Young4 from '../assets/young4.png';
import Young5 from '../assets/young5.png';
import Young6 from '../assets/young6.png';
import EG from '../assets/EGroup100.svg';
import Eva from '../assets/eva.svg';

const Block4 = () => {
  const slides = [
    { id: 1, image: Young4, title: "Как правильно заряжать электросамокат", 
      desc: "Один из первых вопросов, который волнует после покупки электросамоката.", 
      date: "01.09.2021", views: "53" },
    { id: 2, image: Young5, title: "Топ-5 аксессуаров для электросамоката", 
      desc: "Полезные гаджеты, которые сделают ваши поездки комфортнее.", 
      date: "15.09.2021", views: "78" },
    { id: 3, image: Young6, title: "Как увеличить дальность поездки", 
      desc: "Проверенные способы продлить время работы вашего самоката.", 
      date: "22.09.2021", views: "92" },
    { id: 4, image: Young4, title: "Безопасность при езде на самокате", 
      desc: "Важные правила, которые должен знать каждый райдер.", 
      date: "05.10.2021", views: "64" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-[1440px] mx-auto px-4 md:px-[165px] mt-[80px] md:mt-[100px]"
    >
      <motion.h1 
        className="text-[28px] md:text-[35px] font-semibold text-[#282739] mb-[40px] md:mb-[60px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        ВАМ ТАКЖЕ МОЖЕТ БЫТЬ ИНТЕРЕСНО
      </motion.h1>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        autoplay={{ delay: 3000 }}
        navigation
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="mb-10"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img 
                  className="w-full h-[200px] md:h-[250px] object-cover hover:scale-105 transition-transform duration-500" 
                  src={slide.image} 
                  alt={slide.title} 
                />
              </div>
              <div className="h-[181px] w-full bg-[#F4F7FB] rounded-b-xl p-[20px]">
                <h3 className="text-[#282739] text-[18px] font-medium mb-2">{slide.title}</h3>
                <p className="text-[#282739] text-[14px] mb-4">{slide.desc}</p>
                <div className="flex gap-[25px]">
                  <div className="flex gap-[11px] items-center text-[#5D6C7B]">
                    <img src={EG} alt="Дата" className="w-4 h-4" />
                    <span>{slide.date}</span>
                  </div>
                  <div className="flex gap-[11px] items-center text-[#5D6C7B]">
                    <img src={Eva} alt="Просмотры" className="w-4 h-4" />
                    <span>{slide.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Block4;