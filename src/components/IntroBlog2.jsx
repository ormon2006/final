import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EG from "../assets/EGroup100.svg";
import Eva from "../assets/Eva.svg";

const blogPosts = [
  {
    id: 1,
    title: "Как научиться играть в Standoff 2",
    image:
      "https://cdn-www.bluestacks.com/bs-images/3079_Standoff-2_%D0%A1%D0%9E%D0%92%D0%95%D0%A2%D0%AB-%D0%9F%D0%9E-%D0%98%D0%93%D0%A0%D0%95.jpg",
    description: "Один из первых вопросов, который волнует после Доната.",
    date: "01.09.2021",
    views: "53",
  },
  {
    id: 2,
    title: "Как научиться играть в CS2",
    image: "https://i.ytimg.com/vi/NtvJxwgwYtw/maxresdefault.jpg",
    description: "Один из первых вопросов, который волнует после Доната.",
    date: "01.09.2021",
    views: "53",
  },
  {
    id: 3,
    title: "Топ-5 карт в CS2",
    image: "https://i.ytimg.com/vi/NtvJxwgwYtw/maxresdefault.jpg",
    description: "Лучшие карты для новичков и профессионалов.",
    date: "05.09.2021",
    views: "78",
  },
  {
    id: 4,
    title: "Гайд по Standoff 2",
    image:
      "https://cdn-www.bluestacks.com/bs-images/3079_Standoff-2_%D0%A1%D0%9E%D0%92%D0%95%D0%A2%D0%AB-%D0%9F%D0%9E-%D0%98%D0%93%D0%A0%D0%95.jpg",
    description: "Полное руководство по игре для новичков.",
    date: "10.09.2021",
    views: "92",
  },
  {
    id: 5,
    title: "Как улучшить свой скилл в CS2",
    image: "https://i.ytimg.com/vi/NtvJxwgwYtw/maxresdefault.jpg",
    description: "Советы от профессиональных игроков.",
    date: "15.09.2021",
    views: "64",
  },
  {
    id: 6,
    title: "Лучшее оружие в Standoff 2",
    image:
      "https://cdn-www.bluestacks.com/bs-images/3079_Standoff-2_%D0%A1%D0%9E%D0%92%D0%95%D0%A2%D0%AB-%D0%9F%D0%9E-%D0%98%D0%93%D0%A0%D0%95.jpg",
    description: "Рейтинг самого эффективного оружия.",
    date: "20.09.2021",
    views: "87",
  },
];

const IntroBlog2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mt-8 md:mt-12 px-4 md:px-[165px]"
    >
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogPosts.map((post, index) => (
          <Link to="/blogtwo" key={post.id}>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  className="w-full h-full object-cover"
                  src={post.image}
                  alt={post.title}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="bg-[#F4F7FB] p-4">
                <motion.h3
                  className="text-lg font-medium text-[#282739] hover:text-[#6F73EE] transition"
                  whileHover={{ x: 3 }}
                >
                  {post.title}
                </motion.h3>
                <p className="text-sm text-[#282739] mt-2">
                  {post.description}
                </p>
                <div className="flex justify-between mt-4 text-sm text-[#5D6C7B]">
                  <div className="flex items-center gap-2">
                    <img src={EG} alt="Date" className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Eva} alt="Views" className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-8"
      >
        <motion.button
          className="px-6 py-2 bg-[#6F73EE] text-white rounded-md hover:bg-[#5a5fc7] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Показать еще
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default IntroBlog2;
