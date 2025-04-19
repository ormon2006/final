import { motion } from "framer-motion";
import Shop from '../assets/shopping-cart 2.svg';
import Ok from '../assets/Okey.png';
import Billford from '../assets/billfold 1.png';
import Delivery from '../assets/delivery12x.png';
import Discount from '../assets/percentage-discount 1.png';
import Dastanbai3 from '../assets/Mask Group3.svg';

const IntroHome6 = () => {
  const features = [
    {
      icon: Shop,
      title: "Х товаров в каталоге",
      desc: "Выбирайте товар, который подходит по цене и характеристикам."
    },
    {
      icon: Billford,
      title: "4 способов оплаты",
      desc: "Вы можете оплатить покупку картой, онлайн на сайте, через интернет-банкинг или в кредит."
    },
    {
      icon: Ok,
      title: "Полный возврат в случае ошибки",
      desc: "При покупке вам выдается товарный чек этот чек служит вам полным обслуживанием."
    },
    {
      icon: Delivery,
      title: "Моментальное получение покупки",
      desc: "Отправляем покупки по всему снг получайте свои покупки моментально без задержек."
    },
    {
      icon: Discount,
      title: "Донаты без переплат",
      desc: "В нашем магазине можно приобрести любой товар из любой видеоигры.",
      extra: "Подробнее про условия рассрочки"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-[100px] px-4"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-[35px] font-semibold text-[#282739]"
        >
          ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ НА ПРОДУКТЫ GAMEGO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#282739] text-lg mt-2"
        >
          и заботимся об удобстве покупателей
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-8 md:mt-[51px]"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4F7FB] px-6 py-3 rounded hover:border-2 hover:border-[#6F73EE] hover:text-[#6F73EE] transition"
          >
            Интернет-магазин
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4F7FB] px-6 py-3 rounded hover:border-2 hover:border-[#6F73EE] hover:text-[#6F73EE] transition"
          >
            Сервисный центр
          </motion.button>
        </motion.div>
      </div>

      <div className="mt-8 md:mt-[58px] px-4 md:px-[165px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard 
              key={index + 3} 
              feature={feature} 
              index={index + 3} 
              isLastRow={true}
            />
          ))}
          <MoreCard />
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ feature, index, isLastRow = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`bg-white border border-[#EAEBED] rounded-xl shadow-xl p-6 ${isLastRow ? 'h-[185px]' : 'h-[225px]'}`}
    whileHover={{ y: -5 }}
  >
    <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
    <h3 className="text-[#282739] text-lg font-semibold mt-4">{feature.title}</h3>
    <p className="text-[#282739] text-sm mt-2">{feature.desc}</p>
    {feature.extra && (
      <p className="text-gray-500 text-sm mt-2">{feature.extra}</p>
    )}
  </motion.div>
);

const MoreCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 }}
    className="relative bg-[#F0F0F0] rounded-xl overflow-hidden"
    whileHover={{ scale: 1.02 }}
  >
    <img src={Dastanbai3} alt="More in store" className="w-full h-full object-cover" />
    <div className="absolute inset-0 p-6">
      <p className="text-[#282739] font-semibold">Больше в магазине</p>
      <div className="flex items-center gap-2 mt-1">
        <a href="#" className="text-gray-500 hover:underline">Перейти</a>
      </div>
    </div>
  </motion.div>
);

export default IntroHome6;