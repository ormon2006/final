import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Like from "../assets/Like.png";
import Shop from "../assets/Shop.png";
import Vesy from "../assets/Vesy.png";
import wk from "../assets/wk.jpg";

const WatchPage = () => {
  const products = [
    {
      id: 1,
      title: "Защитная экипировка «Черепаха»",
      description: "100% дышащая ткань",
      price: "5 900 ₽",
      image: wk,
      badge: Vesy
    },
    {
      id: 2,
      title: "Игровой контроллер Pro",
      description: "Беспроводной, сенсорный",
      price: "3 200 ₽",
      image: wk,
      badge: Vesy
    },
    {
      id: 3,
      title: "Геймерская гарнитура Elite",
      description: "7.1 surround sound",
      price: "6 500 ₽",
      image: wk,
      badge: Vesy
    },
    {
      id: 4,
      title: "Механическая клавиатура X9",
      description: "RGB подсветка",
      price: "4 800 ₽",
      image: wk,
      badge: Vesy
    },
    {
      id: 5,
      title: "Игровая мышь Lightning",
      description: "16000 DPI",
      price: "2 900 ₽",
      image: wk,
      badge: Vesy
    },
    {
      id: 6,
      title: "Коврик для мыши XXL",
      description: "Противоскользящий",
      price: "1 500 ₽",
      image: wk,
      badge: Vesy
    }
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="px-4 md:ml-[165px] mt-[90px]"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-[35px] font-semibold text-[#282739] mb-8 md:mb-[60px]"
      >
        ВЫ СМОТРЕЛИ
      </motion.h4>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          className="!pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[190px] object-cover"
                  />
                  {product.badge && (
                    <motion.img
                      src={product.badge}
                      alt="Badge"
                      className="absolute top-2 left-2 w-12 h-12"
                      whileHover={{ scale: 1.1 }}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-[#282739]">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#282739] mt-1">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-medium">{product.price}</p>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full border border-[#EAEBED] flex items-center justify-center"
                      >
                        <img src={Shop} alt="Add to cart" className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full border border-[#EAEBED] flex items-center justify-center"
                      >
                        <img src={Like} alt="Add to wishlist" className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 py-2 bg-gray-600 text-white rounded-md text-sm"
                  >
                    Купить в 1 клик
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default WatchPage;