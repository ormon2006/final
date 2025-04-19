import { motion } from "framer-motion";
import Avatar from '../assets/Avatar.svg';
import Cs2 from '../assets/cs.png';
import standoff from '../assets/standoff.png';
import minecraft from '../assets/minecraft.png';
import roblox from '../assets/roblox.png';
import frrn from '../assets/frrn.png';
import cod from '../assets/cod.webp';
import pg from '../assets/pg.webp';
import vl from '../assets/vl.png';

const IntroHome4 = () => {
  const games = [
    { img: Cs2, name: "Counter-Strike2", price: "от 1000 ₽" },
    { img: standoff, name: "Standoff2", price: "от 1000 ₽" },
    { img: minecraft, name: "MineCraft", price: "от 1000 ₽" },
    { img: roblox, name: "Roblox", price: "от 500 ₽" },
    { img: frrn, name: "Fortnite", price: "от 1500 ₽" },
    { img: cod, name: "Call Of Duty", price: "от 1000 ₽" },
    { img: pg, name: "Pubg", price: "от 2000 ₽" },
    { img: vl, name: "Valorant", price: "от 1000 ₽" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-[100px] px-4 md:px-[165px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-2xl md:text-[35px] font-semibold">ЦЕНЫ НА ДОНАТ</h1>
        
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#F4F7FB] rounded-lg p-4 flex items-center gap-4 shadow-lg"
        >
          <img src={Avatar} alt="Manager" className="w-12 h-12" />
          <div>
            <p className="text-sm md:text-[12px] font-semibold">Менеджер ответит на любой ваш вопрос</p>
            <a href="#" className="text-gray-500 text-sm hover:underline">Задать вопрос</a>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 md:mt-[68px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {games.slice(0, 4).map((game, index) => (
            <GameCard key={index} game={game} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-[30px]">
          {games.slice(4, 8).map((game, index) => (
            <GameCard key={index + 4} game={game} index={index + 4} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 md:mt-[50px]"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4F7FB] px-6 py-3 rounded hover:border-2 hover:border-[#6F73EE] hover:text-[#6F73EE] transition"
          >
            Смотреть все
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const GameCard = ({ game, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative rounded-lg overflow-hidden"
  >
    <img 
      src={game.img} 
      alt={game.name} 
      className="w-full h-[200px] md:h-[255px] object-cover" 
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3 text-white">
      <p>{game.name}</p>
      <p>{game.price}</p>
    </div>
  </motion.div>
);

export default IntroHome4;