import { motion } from "framer-motion";
import gpro from '../assets/gpro.jpg';
import Polygon from '../assets/Polygon 3.svg';

const IntroHome5 = () => {
  const reviews = [
    "Gamego – лучший сайт для покупок в играх! Все быстро и никаких проблем",
    "Покупал здесь несколько раз – всё быстро, честно и без проблем!",
    "Быстро, удобно и без обмана. Покупка прошла мгновенно!",
    "Давно тут беру внутриигровые товары, всегда без проблем",
    "Супер сервис! Быстро, надежно и без лишних заморочек."
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="px-4 md:px-[70px] mt-16 md:mt-[100px]"
    >
      <div className="w-full bg-[#F4F7FB] rounded-xl shadow-xl flex flex-col lg:flex-row justify-between items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2"
        >
          <img 
            src={gpro} 
            alt="GameGo promotion" 
            className="w-full h-auto object-cover"
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-black/30 w-[90%] md:w-[233px] p-4 rounded-lg text-white"
          >
            <h5 className="text-center text-lg">GameGo</h5>
            <p className="text-sm text-center mt-1">Оцените все преимущества донатов по доступным ценам</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black py-2 rounded-lg mt-3"
            >
              Оценить
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-0 md:pr-[135px] w-full lg:w-1/2"
        >
          <h1 className="text-2xl md:text-[35px] font-semibold text-[#282739]">
            GameGo - ПЕРВЫЙ ОФИЦИАЛЬНЫЙ ДИЛЕР STEAM GAMES В СНГ
          </h1>
          <p className="text-[#282739] mt-4 md:mt-[18px]">
            Наша цель предоставить полный ассортимент современной продукции GameGo, которая улучшает и упрощает пополнения. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.
          </p>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-xl p-4 mt-6 md:mt-[40px]"
          >
            <p className="text-[#282739] font-semibold text-center">Специализируемся исключительно на отзывах от покупателей:</p>
            <div className="mt-3 space-y-2">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <img src={Polygon} alt="bullet" className="w-4 h-4 mt-1" />
                  <p className="text-sm text-[#282739]">{review}</p>
                </motion.div>
              ))}
            </div>
            <a href="#" className="text-gray-500 text-xs mt-3 inline-block hover:underline">
              Смотреть отзывы
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroHome5;