import React from 'react';
import { motion } from 'framer-motion';
import Phone from '../assets/Phone.png';
import WhatsApp from '../assets/whatsapp.png';
import Gmail from '../assets/Gmail.png';

const Contact = () => {
  const contactSections = [
    {
      title: "ОТДЕЛ РЕКЛАМАЦИЙ И ПРЕТЕНЗИЙ",
      items: [
        { icon: Gmail, text: "claim@gamego.ru", desc: null },
        { icon: Phone, text: "+7 (499) 350-76-92", desc: "Ср-Вс 10:00 - 19:00" },
        { icon: WhatsApp, text: "+7 (911) 284-53-19", desc: "Ср-Вс 10:00 - 19:00" }
      ],
      extra: {
        link: "Скачать шаблон",
        button: { text: "Send message", width: "157px" }
      }
    },
    {
      title: "ОПТОВЫЙ ОТДЕЛ",
      items: [
        { icon: Gmail, text: "opt@gamego.ru", desc: null },
        { icon: Phone, text: "+7 (499) 281-64-52", desc: "Ср-Вс 10:00 - 19:00" }
      ]
    },
    {
      title: "ОТДЕЛ МАРКЕТИНГА И РЕКЛАМЫ",
      items: [
        { icon: Gmail, text: "marketing@gamego.ru", desc: null }
      ]
    },
    {
      title: "НАПИСАТЬ ДИРЕКТОРУ",
      description: "Если у вас возникли предложения или пожелания, которые помогут улучшить работу нашей компании, вы можете написать через специальную форму напрямую руководителю компании.",
      link: "специальную форму"
    }
  ];

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
      className="py-10 md:py-[44px] px-4 md:px-[135px] my-16 md:my-[100px] bg-[#F4F7FB] rounded-[10px] w-full max-w-[1400px] mx-auto"
    >
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[100px]"
      >
        {contactSections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col"
          >
            <h3 className='text-lg md:text-[18px] font-semibold text-[#282739] mb-4 md:mb-6'>
              {section.title}
            </h3>

            {section.description ? (
              <p className='text-sm md:text-base mt-4 md:mt-[58px]'>
                {section.description.split(section.link)[0]}
                <a href="#" className='text-[#6F73EE] hover:underline'>
                  {section.link}
                </a>
                {section.description.split(section.link)[1]}
              </p>
            ) : (
              <>
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 mt-4 md:mt-5">
                    <img src={item.icon} alt="" className="w-5 h-5 mt-1" />
                    <div>
                      <p className="text-base md:text-lg">{item.text}</p>
                      {item.desc && (
                        <p className='text-[#5D6C7B] text-sm md:text-base'>
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {section.extra && (
                  <>
                    <a href="#" className='text-[#6F73EE] hover:underline mt-3 md:mt-[12px] text-sm md:text-base'>
                      {section.extra.link}
                    </a>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`mt-3 text-white font-semibold text-xs md:text-[15px] py-2 border-2 border-gray-600 bg-gray-600 rounded-[5px] hover:bg-[#EEEEEE] hover:text-gray-600 transition w-full max-w-[${section.extra.button.width}]`}
                    >
                      {section.extra.button.text}
                    </motion.button>
                  </>
                )}
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;