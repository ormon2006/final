import { motion } from "framer-motion";
import Star from "../assets/Star 11.svg";
import img10 from "../assets/Rectangle 161.svg";
import gg from "../assets/gg.png";

const IntroHome1 = () => {
  const features = [
    { title: "АКЦИИ", desc: "на все скины" },
    { title: "ПОЛУЧЕНИЕ", desc: "Моментальное" },
    { title: "ПРОМОКОДЫ", desc: "и бонусы к покупкам" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mt-8 px-4 md:px-[100px]"
      >
        <img
          className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
          src={img10}
          alt="GameGo banner"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute top-8 md:top-[39px] left-4 md:left-[135px] text-white"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border-2 border-white px-3 py-1 bg-transparent rounded hover:bg-white hover:text-[#6F73EE] transition"
          >
            Новинка
          </motion.button>
          <h1 className="text-2xl md:text-[35px] font-semibold mt-4 md:mt-[36px] max-w-[300px] md:max-w-[615px]">
            ДОБРО ПОЖАЛОВАТЬ В МАГАЗИН GAMEGO
          </h1>
          <p className="mt-2 text-sm md:text-xl">
            с комиссией со всех банков 1%
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white px-6 py-3 mt-4 md:mt-[25px] rounded hover:bg-white hover:text-[#6F73EE] transition"
          >
            Перейти в магазин
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-4 md:px-[165px] mt-8 md:mt-[40px]"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-[78px]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-[#282739]"
              >
                <h3 className="text-xl md:text-[25px] font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-[16px]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-2 border-[#5D6C7B1A] rounded p-2 flex items-center gap-3"
          >
            <div className="bg-black w-14 h-14 rounded flex items-center justify-center text-white text-xl">
              GG
            </div>
            <div>
              <p className="text-[#5D6C7B] text-sm">GG отзывы</p>
              <div className="flex items-center gap-2">
                <img src={Star} alt="rating" className="w-5 h-5" />
                <p className="text-[#282739] font-semibold">4,9</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroHome1;
