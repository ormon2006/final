import { motion } from "framer-motion";
import VK2 from '../assets/012-vk 2.png';
import Insta2 from '../assets/013-instagram 1.png';
import Youtube2 from '../assets/018-youtube 1.png';
import TG2 from '../assets/003-telegram 3.png';

const socialButtons = [
  {
    id: 1,
    icon: VK2,
    name: "Вконтакте",
    count: "3 300",
    bgColor: "bg-[#4B729F]",
    hoverColor: "hover:bg-[#3a5a80]"
  },
  {
    id: 2,
    icon: Insta2,
    name: "Instagram",
    count: "10 602",
    bgColor: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
    hoverColor: "hover:opacity-90"
  },
  {
    id: 3,
    icon: Youtube2,
    name: "YouTube",
    count: "3 603",
    bgColor: "bg-[#E53935]",
    hoverColor: "hover:bg-[#c62828]"
  },
  {
    id: 4,
    icon: TG2,
    name: "Telegram",
    count: "432",
    bgColor: "bg-[#039BE5]",
    hoverColor: "hover:bg-[#0288D1]"
  }
];

const IntroContact3 = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="px-4 md:px-[165px] mt-16 md:mt-[134px]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[500px]"
        >
          <h1 className="text-[#282739] font-semibold text-2xl md:text-[25px]">
            ПОДПИСЫВАЙТЕСЬ И ПЕРВЫМИ УЗНАВАЙТЕ О НОВЫХ СКИДКАХ, АКЦИЯХ И РОЗЫГРЫШАХ ПОДАРКОВ
          </h1>
          <p className="pt-3 md:pt-[15px] text-[#5D6C7B]">
            Станьте частью сообщества GameGo
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-[355px] h-[270px] bg-[#F4F7FB] rounded-[10px] shadow-lg"
        >
          <div className="flex flex-col gap-3 p-6">
            {socialButtons.map((button) => (
              <motion.button
                key={button.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full h-[45px] ${button.bgColor} ${button.hoverColor} flex items-center rounded-[5px] justify-between px-4 text-white transition`}
              >
                <div className="flex items-center gap-4">
                  <img src={button.icon} alt={button.name} className="w-5 h-5" />
                  <span>{button.name}</span>
                </div>
                <span>{button.count}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroContact3;