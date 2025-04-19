import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingCart, Heart, User, Search as SearchIcon } from "react-feather";
import Img1 from "../assets/viber 1.png";
import Img2 from "../assets/003-whatsapp 1.png";
import Img3 from "../assets/003-telegram 1.png";
import Img from "../assets/Group 1659.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock data - in a real app you would fetch this
  useEffect(() => {
    setCartItems(3);
    setWishlistItems(5);
  }, []);

  const navLinks = [
    { name: "Донат", path: "./blog", color: "hover:text-green-500" },
    { name: "Контакты", path: "./contact", color: "hover:text-blue-500" },
    { name: "Акции", path: "./stock", color: "hover:text-yellow-500" },
  ];

  const games = [
    { value: "", label: "Донат" },
    { value: "roblox", label: "Roblox" },
    { value: "csgo", label: "CS:GO" },
    { value: "cs2", label: "CS 2" },
    { value: "standoff2", label: "StandOff 2" },
    { value: "minecraft", label: "Minecraft" },
  ];

  const socialIcons = [
    { icon: Img1, alt: "Viber" },
    { icon: Img2, alt: "WhatsApp" },
    { icon: Img3, alt: "Telegram" },
  ];

  const topLinks = [
    { name: "Сервис", path: "#" },
    { name: "Сотрудничество", path: "#" },
    { name: "Донат", path: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 bg-white shadow-sm ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 px-4 md:px-[165px] bg-gray-50">
        <div className="flex items-center gap-4">
          <nav className="flex gap-4 md:gap-8 text-sm text-gray-600">
            {topLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.path}
                whileHover={{ scale: 1.05 }}
                className="hover:text-gray-900 transition"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          <div className="flex gap-2 ml-4">
            {socialIcons.map((social, index) => (
              <motion.img
                key={index}
                src={social.icon}
                alt={social.alt}
                className="w-4 h-4 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
        <motion.div
          className="flex items-center gap-2 text-sm"
          whileHover={{ scale: 1.05 }}
        >
          <span>+7 (800) 505-54-61</span>
          <img src={Img} alt="phone" className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Main Header */}
      <div className="px-4 md:px-[165px] py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-900"
          whileHover={{ scale: 1.03 }}
        >
          GAMEGO
        </motion.h1>

        <div className="flex items-center gap-4 w-full max-w-3xl">
          <motion.button
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-white hover:text-gray-600 border-2 border-gray-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Каталог
          </motion.button>

          <motion.div
            className="flex-1 flex border-2 border-gray-600 rounded-md overflow-hidden"
            whileHover={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
          >
            <select
              className="bg-gray-100 px-2 outline-none text-sm"
              name="city"
              id="city-select"
            >
              {games.map((game, index) => (
                <option key={index} value={game.value}>
                  {game.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Искать игру в GAMEGO"
              className="flex-1 px-4 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-gray-600 px-4 flex items-center justify-center">
              <SearchIcon className="text-white" />
            </button>
          </motion.div>
        </div>

        <div className="flex items-center gap-6">
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <User className="text-gray-700" size={20} />
          </motion.div>

          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="text-gray-700" size={20} />
            {wishlistItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistItems}
              </span>
            )}
          </motion.div>

          <motion.div
            className="relative cursor-pointer flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart className="text-gray-700" size={20} />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
            <span className="ml-2 text-gray-700 font-medium hidden md:inline">
              Корзина
            </span>
          </motion.div>
        </div>
      </div>

      {/* Navigation Bar */}
      <motion.div
        className="bg-gray-100 py-2 px-4 md:px-[165px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <nav className="flex gap-4 md:gap-12 text-sm font-medium">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.path}
              className={`text-gray-800 ${link.color} transition`}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
