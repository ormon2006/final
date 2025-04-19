import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Batery from '../assets/Cs2.jpg';
import Cumka from '../assets/So2.jpg';
import Vector1 from '../assets/Vector1.png';
import Vector2 from '../assets/Vector2.png';

const IntroStock2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const paginationItemVariants = {
    hover: {
      borderColor: "#6F73EE",
      color: "#6F73EE",
      transition: {
        duration: 0.3
      }
    }
  };

  const promoItems = [
    {
      img: Batery,
      title: "До 01.09 выгода акции при донате GameGo CS2",
      bonuses: "+ 4 бонуса к донату"
    },
    {
      img: Cumka,
      title: "До 01.09 выгода акции при донате GameGo SO2",
      bonuses: "+ 3 бонуса к донату"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className='mt-[111px] px-[165px]'>
        {/* First Row */}
        <motion.div 
          className='flex justify-between'
          variants={containerVariants}
        >
          {promoItems.map((item, index) => (
            <motion.div 
              key={`first-${index}`}
              className='w-[540px] h-[367px] flex'
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.img 
                className='rounded-l-xl w-[275px] object-cover'
                src={item.img} 
                alt="promo game"
                whileHover={{ scale: 1.03 }}
              />
              <div className='h-[367px] w-[255px] bg-[#F4F7FB] rounded-r-xl flex flex-col justify-center pl-[30px]'>
                <p className='text-[#5D6C7B] text-[12px]'>Срок акции: 15.08 - 01.09</p>
                <motion.h2 
                  className='text-[#282739] text-[18px] font-semibold w-[199px] pt-[10px]'
                  whileHover={{ x: 3 }}
                >
                  {item.title}
                </motion.h2>
                <p>{item.bonuses}</p>
                <div className='mt-[160px]'>
                  <motion.button 
                    className='w-[195px] h-[37px] bg-[gray] border border-[gray] rounded-[5px] text-[white] text-[12px]'
                    whileHover={{ 
                      backgroundColor: "#6F73EE",
                      borderColor: "#6F73EE",
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Принять участие в акции
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div 
          className='flex justify-between mt-[30px]'
          variants={containerVariants}
        >
          {[...promoItems].reverse().map((item, index) => (
            <motion.div 
              key={`second-${index}`}
              className='w-[540px] h-[367px] flex'
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.img 
                className='rounded-l-xl w-[275px] object-cover'
                src={item.img} 
                alt="promo game"
                whileHover={{ scale: 1.03 }}
              />
              <div className='h-[367px] w-[255px] bg-[#F4F7FB] rounded-r-xl flex flex-col justify-center pl-[30px]'>
                <p className='text-[#5D6C7B] text-[12px]'>Срок акции: 15.08 - 01.09</p>
                <motion.h2 
                  className='text-[#282739] text-[18px] font-semibold w-[199px] pt-[10px]'
                  whileHover={{ x: 3 }}
                >
                  {item.title}
                </motion.h2>
                <p>{item.bonuses}</p>
                <div className='mt-[160px]'>
                  <motion.button 
                    className='w-[195px] h-[37px] bg-[gray] border border-[gray] rounded-[5px] text-[white] text-[12px]'
                    whileHover={{ 
                      backgroundColor: "#6F73EE",
                      borderColor: "#6F73EE",
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Принять участие в акции
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pagination */}
      <motion.div 
        className='flex justify-center gap-[8px] mt-[40px] mb-[90px]'
        variants={containerVariants}
      >
        {[Vector1, 1, 2, 3, 4, Vector2].map((item, index) => (
          <motion.div 
            key={`pagination-${index}`}
            className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px] flex items-center justify-center cursor-pointer'
            variants={paginationItemVariants}
            whileHover="hover"
          >
            {typeof item === 'number' ? (
              <motion.p 
                className='hover:text-[#6F73EE]'
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.p>
            ) : (
              <motion.img 
                src={item} 
                alt="pagination arrow"
                className='w-4 h-4'
                whileHover={{ scale: 1.1 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default IntroStock2;