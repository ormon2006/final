import { motion } from "framer-motion";

const Block2 = () => {
  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="px-4 md:px-[259px] mt-[50px]"

      >
        <motion.p variants={itemVariants}>
          Standoff: популярный мобильный шутер Standoff – это серия
          многопользовательских шутеров от первого лица, завоевавшая
          популярность среди мобильных геймеров. Наибольшую известность
          получила игра Standoff 2, которая во многом напоминает легендарный
          Counter-Strike.
        </motion.p>
        
        <motion.p className="pt-[20px]" variants={itemVariants}>
          🔥 Особенности игры ✅ Динамичный геймплей – быстрые перестрелки,
          требующие реакции и тактики. ✅ Разнообразие оружия – от
          пистолетов до снайперских винтовок. ✅ Карты и режимы –
          классические бои, закладка бомбы, командные сражения. ✅ Скины и
          кастомизация – возможность менять внешний вид оружия. ✅
          Онлайн-сообщество – миллионы игроков по всему миру, турниры и
          соревнования.
        </motion.p>
        
        <motion.h5 
          className="text-[#282739] text-[24px] pt-[30px] font-semibold"
          variants={itemVariants}
        >
          🎯 Почему Standoff так популярен?
        </motion.h5>
        
        <motion.p className="pt-[25px]" variants={itemVariants}>
          Standoff 2 отличается качественной графикой, удобным управлением и
          соревновательным духом. В игре можно прокачивать навыки стрельбы,
          разрабатывать тактики и сражаться с друзьями. Если ты любишь экшен и
          командные сражения, Standoff – отличная игра для тебя! 🔫🔥
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 md:px-[250px] mt-[50px]"
      >
        <motion.img
          className="rounded-[10px] w-full h-auto"
          src="https://cs.money/ru/blog/wp-content/uploads/2024/05/how-to-play-cs2_ru.png"
          alt="Counter-Strike 2 gameplay"
          variants={imageVariants}
          whileHover="hover"
        />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="px-4 md:px-[259px]"
      >
        <motion.h5 
          className="text-[#282739] text-[22px] pt-[30px] font-semibold"
          variants={itemVariants}
        >
          Как мы за 1000 евро обустроили арендную квартиру
        </motion.h5>
        
        <motion.p className="pt-[25px]" variants={itemVariants}>
          Counter-Strike 2 (CS2) – это обновлённая версия культовой Counter-Strike: Global
          Offensive (CS:GO), выпущенная в 2023 году на движке Source 2. Игра
          сохранила основу классического тактического шутера, но получила
          множество улучшений.
        </motion.p>
        
        <motion.button 
          className="w-[190px] mt-[21px] h-[53px] bg-[gray] border-2 border-[gray] text-[white] rounded-[5px] text-base font-medium hover:bg-[white] hover:text-[gray] transition"
          variants={itemVariants}
          whileHover="hover"
          variants={buttonVariants}
        >
          Перейти в каталог
        </motion.button>
        
        <motion.p className="mt-[50px]" variants={itemVariants}>
          🔥 Ключевые изменения в CS2 ✅ Графика и физика – улучшенные
          текстуры, освещение и детализированные карты. ✅ Дымовые гранаты –
          теперь динамически реагируют на окружение, изменяя геймплей. ✅ Тики
          сервера – теперь обработка команд происходит мгновенно, без
          задержек. ✅ Обновлённые карты – переработанные локации с улучшенной
          визуализацией. ✅ Система матчмейкинга – новый рейтинговый подбор
          игроков. 🎯 Почему CS2 – будущее шутеров?
        </motion.p>
        
        <motion.p className="pt-[20px]" variants={itemVariants}>
          Counter-Strike 2 продолжает наследие CS:GO, предлагая более
          современный и плавный игровой процесс. Разработчики внедрили новые
          технологии, сохранив дух соревновательной игры. CS2 – это не просто
          обновление, а новая глава в истории киберспортивных FPS! 🚀💥
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Block2;