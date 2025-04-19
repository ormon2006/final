import { motion } from "framer-motion";
import Vector11 from '../assets/Vector11.svg';
import Vector10 from '../assets/Vector10.svg';
import Vector12 from '../assets/Vector12.svg';

const cities = [
  { name: "Москва и МО", width: "145px" },
  { name: "Санкт-Петербург и Ленобласть", width: "265px" },
  { name: "Краснодар", width: "128px" },
  { name: "Минск", width: "96px" },
  { name: "Пункты выдачи CDEK", width: "201px" }
];

const IntroContact2 = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="px-4 md:px-0">
      {/* City Buttons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="flex flex-wrap justify-center gap-3 mt-8 md:mt-[50px]"
      >
        {cities.map((city, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            className={`shadow-lg text-white border-2 border-gray-600 text-xs h-[53px] bg-gray-600 rounded-[5px] hover:bg-[#EEEEEE] hover:text-gray-600 transition`}
            style={{ width: city.width }}
            whileHover={{ y: -3 }}
          >
            {city.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-8 md:mt-[50px] flex flex-col lg:flex-row items-start justify-between px-4 md:ml-[165px] gap-8"
      >
        {/* Left Column */}
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
          className="w-full lg:w-auto"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-[#282739] text-xl md:text-[20px] font-semibold"
          >
            Адрес магазина и сервисного центра:
          </motion.h3>

          <motion.div 
            variants={itemVariants}
            className="mt-6 md:mt-[30px] flex gap-4 md:gap-[19px]"
          >
            <div className="min-w-[38px] h-[80px] rounded-[5px] bg-[#F4F7FB] flex items-center justify-center shadow-xl">
              <img className="w-[15px] h-[18px]" src={Vector11} alt="address" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                <p className="text-base md:text-[18px]">ул. Ткацкая, 5 стр. 16 (м. Семеновская)</p>
                <a className="text-[#6F73EE] text-sm md:text-[14px] hover:underline" href="#">
                  Как пройти
                </a>
              </div>
              <div className="text-[#5D6C7B] text-sm md:text-[14px] mt-2">
                <p>Пн-Вс 10:00 - 20:00 (магазин)</p>
                <p>Пн-Вс 10:00 - 20:00 (сервисный центр)</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-6 md:mt-[30px] flex gap-4 md:gap-5"
          >
            <div className="min-w-[38px] h-[55px] rounded-[5px] bg-[#F4F7FB] flex items-center justify-center shadow-xl">
              <img className="w-[15px] h-[18px]" src={Vector10} alt="phone" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div>
                <p className="text-[#5D6C7B] text-sm md:text-[14px]">Магазин</p>
                <p className="text-base md:text-[18px]">+7 (499) 406-15-79</p>
              </div>
              <div>
                <p className="text-[#5D6C7B] text-sm md:text-[14px]">Сервисный центр</p>
                <p className="text-base md:text-[18px]">+7 (499) 406-15-80</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-6 md:mt-[30px] flex gap-4 md:gap-5"
          >
            <div className="min-w-[38px] h-[210px] rounded-[5px] bg-[#F4F7FB] flex items-center justify-center shadow-xl">
              <img className="w-[15px] h-[18px]" src={Vector12} alt="info" />
            </div>
            <div className="text-sm md:text-[14px]">
              <p className="mb-4 md:mb-[25px]">
                <span className="font-medium">Бесплатный донат</span> (для бесплатного доната нужен Донат VIP)
              </p>
              <p className="mb-4 md:mb-[25px]">
                Перед бесплатным донатом, <span className="font-medium">купите Донат VIP и оформите подписку в наших соцсетях</span>.
              </p>
              <p>
                <span className="font-medium">Возьмите с собой паспорт или другой документ</span>, удостоверяющий личность – он может понадобиться для прохождения через пропускной пункт.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-auto mt-6 lg:mt-0"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d454256.8911426634!2d38.66881890202359!3d55.92067332778661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1741502580616!5m2!1sru!2skg" 
            width="100%" 
            height="483" 
            style={{ border: 0, borderRadius: '10px' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:mr-[40px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroContact2;