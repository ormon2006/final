import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Google from '../assets/path13556.png';
import AppStore from '../assets/Group.png';
import Group from '../assets/_Group_.svg';
import VK from '../assets/012-vk 1.png';
import Insta from '../assets/013-instagram 1.svg';
import Youtube from '../assets/018-youtube 1.svg';
import TG from '../assets/003-telegram 2.png';
import GooglePay from '../assets/GooglePay.png';
import ApplePay from '../assets/ApplePay.png';
import Visa from '../assets/visa-logo.png';
import MasterCard from '../assets/Mastercard.png';
import Maestro from '../assets/Maestro.png';
import WebM from '../assets/Webmoney.png';
import Qiwi from '../assets/Qiwi.png';
import Img1 from '../assets/viber 1.png';
import Img2 from '../assets/003-whatsapp 1.png';
import Img3 from '../assets/003-telegram 1.png';

const Footer = () => {
  const paymentMethods = [
    { icon: GooglePay, alt: "Google Pay" },
    { icon: ApplePay, alt: "Apple Pay" },
    { icon: Visa, alt: "Visa" },
    { icon: MasterCard, alt: "MasterCard" },
    { icon: Maestro, alt: "Maestro" },
    { icon: WebM, alt: "WebMoney" },
    { icon: Qiwi, alt: "Qiwi" }
  ];

  const socialLinks = [
    { icon: VK, name: "Вконтакте", count: "3 300" },
    { icon: Insta, name: "Instagram", count: "10 602" },
    { icon: Youtube, name: "YouTube", count: "3 603" },
    { icon: TG, name: "Telegram", count: "432" }
  ];

  const chatIcons = [
    { icon: Img1, alt: "Viber" },
    { icon: Img2, alt: "WhatsApp" },
    { icon: Img3, alt: "Telegram" }
  ];

  const contacts = [
    { 
      title: "Call-центр", 
      phone: "+7 (800) 505-54-61", 
      hours: "Пн-Вс 10:00 - 20:00" 
    },
    { 
      title: "Сервисный центр", 
      phone: "+7 (499) 350-76-92", 
      hours: "Пн-Вс 10:00 - 20:00" 
    }
  ];

  const locations = [
    { 
      city: "Москва", 
      address: "ул. Ткацкая, 5 стр. 16", 
      phone: "+7 (499) 406 15 87" 
    },
    { 
      city: "Санкт-Петербург", 
      address: "ул. Фрунзе, 2", 
      phone: "+7 (499) 406 15 87" 
    },
    { 
      city: "Краснодар", 
      address: "ул. Восточно-Кругликовская, 86", 
      phone: "+7 (800) 505 54 61" 
    }
  ];

  return (
    <footer className="mt-12 bg-white">
      {/* Email Subscription */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-600 py-6 px-4 md:px-[165px]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.h2 
            className="text-white text-lg md:text-xl font-semibold max-w-md"
            whileHover={{ scale: 1.02 }}
          >
            ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl">
            <motion.input
              type="email"
              placeholder="Введите Ваш email"
              className="flex-1 h-14 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                variant="contained" 
                className="w-full md:w-48 h-14 bg-white text-gray-800 hover:bg-gray-100"
              >
                Подписаться
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="bg-gray-50 px-4 md:px-[165px] py-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between gap-8"
        >
          {/* Contacts */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Контакты</h3>
              <motion.a 
                href="#"
                className="text-gray-500 text-sm hover:text-gray-700"
                whileHover={{ x: 2 }}
              >
                Заказать звонок
              </motion.a>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              {contacts.map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col gap-1"
                  whileHover={{ x: 5 }}
                >
                  <p className="text-xs text-gray-500">{contact.title}</p>
                  <p className="text-lg font-semibold text-gray-800">{contact.phone}</p>
                  <p className="text-sm text-gray-500">{contact.hours}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {locations.map((location, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col gap-1"
                  whileHover={{ x: 5 }}
                >
                  <p className="text-sm font-medium text-gray-800">
                    <span className="font-semibold">{location.city}</span> {location.address}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">{location.phone}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-300 my-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* App Download and Social Media */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.h1 
              className="text-2xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              GAMEGO
            </motion.h1>
            
            <div className="flex gap-3">
              <motion.div 
                className="w-36 h-12 bg-white rounded-lg shadow-md flex items-center gap-2 px-2"
                whileHover={{ y: -3 }}
              >
                <img 
                  className="w-8 h-8" 
                  src="https://cdn.pixabay.com/photo/2016/08/31/00/49/google-1632434_640.png" 
                  alt="Google Play" 
                />
                <div>
                  <p className="text-xs text-gray-500">Доступно на</p>
                  <img src={Google} alt="Google Play" className="h-3" />
                </div>
              </motion.div>
              
              <motion.div 
                className="w-36 h-12 bg-white rounded-lg shadow-md flex items-center gap-2 px-2"
                whileHover={{ y: -3 }}
              >
                <img className="w-8 h-8" src={Group} alt="App Store" />
                <div>
                  <p className="text-xs text-gray-500">Загрузите в</p>
                  <img src={AppStore} alt="App Store" className="h-3" />
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.div 
                key={index}
                className="w-28 h-12 bg-white rounded-lg shadow-md flex items-center gap-3 px-3"
                whileHover={{ y: -3 }}
              >
                <img className="w-5 h-5" src={social.icon} alt={social.name} />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{social.name}</p>
                  <p className="text-xs text-gray-500">{social.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-300 my-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Bottom Footer */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex gap-6 text-xs text-gray-500">
            <motion.a href="#" whileHover={{ scale: 1.05 }}>Реквизиты</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.05 }}>Политика конфиденциальности</motion.a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-1">
              {paymentMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  className="w-8 h-6 bg-white rounded shadow flex items-center justify-center p-1"
                  whileHover={{ y: -3 }}
                >
                  <img src={method.icon} alt={method.alt} className="max-h-full max-w-full" />
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-800">Online чат:</p>
              <div className="flex gap-3">
                {chatIcons.map((icon, index) => (
                  <motion.img 
                    key={index}
                    src={icon.icon} 
                    alt={icon.alt}
                    className="w-5 h-5 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;