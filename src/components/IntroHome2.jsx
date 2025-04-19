import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Power from '../assets/power 1.png';
import Timer from '../assets/timer 1.png';
import Shop from '../assets/shop.png';
import Like from '../assets/Like.png';
import cs from '../assets/cs.png';
import vl from '../assets/vl.png';

const   IntroHome2 = () => {
  const [games, setGames] = useState([]);
  const filters = ["Опыт в игре", "Проведенное время", "Цена игры"];

  useEffect(() => {
    axios.get("https://616f3d72066ea61b.mokky.dev/scooters3")
      .then(response => {
        setGames([
          { id: 1, title: "Counter-Strike2", exp: "1500 опыта", hours: "995 часов", price: "Бесплатная", img: cs },
          { id: 2, title: "Valorant", exp: "982 опыта", hours: "643 часов", price: "Бесплатная", img: vl },
          { id: 1, title: "Counter-Strike2", exp: "1500 опыта", hours: "995 часов", price: "Бесплатная", img: cs },
          { id: 2, title: "Valorant", exp: "982 опыта", hours: "643 часов", price: "Бесплатная", img: vl },
          { id: 1, title: "Counter-Strike2", exp: "1500 опыта", hours: "995 часов", price: "Бесплатная", img: cs },
          { id: 2, title: "Valorant", exp: "982 опыта", hours: "643 часов", price: "Бесплатная", img: vl },
          { id: 1, title: "Counter-Strike2", exp: "1500 опыта", hours: "995 часов", price: "Бесплатная", img: cs },
          { id: 2, title: "Valorant", exp: "982 опыта", hours: "643 часов", price: "Бесплатная", img: vl },
        
        ]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="px-4 md:px-[165px] mt-16 md:mt-[74px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl md:text-[35px] font-semibold">ВАША БИБЛИОТЕКА</h1>
        <div className="flex gap-2">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs md:text-sm bg-[#F4F7FB] px-3 py-2 rounded hover:border-2 hover:border-[#6F73EE] hover:text-[#6F73EE] transition"
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map(game => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={game.img} alt={game.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{game.title}</h3>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <img src={Power} alt="experience" className="w-5 h-5" />
                  <p>{game.exp}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img src={Timer} alt="hours" className="w-5 h-5" />
                  <p>{game.hours}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="font-semibold">{game.price}</p>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border flex items-center justify-center">
                    <img src={Shop} alt="shop" className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full border flex items-center justify-center">
                    <img src={Like} alt="like" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default IntroHome2;