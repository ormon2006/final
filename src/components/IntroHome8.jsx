import { motion } from "framer-motion";
import Dastanbai5 from '../assets/Mask Group24.svg';
import Star from '../assets/Star 11.svg';
import monesy from '../assets/monesy.jpg';
import simple from '../assets/simple.jpg';
import xant from '../assets/xant.webp';
import sb from '../assets/sb.webp';
import sh from '../assets/sh.jpg';
import donk from '../assets/donk.png';

const IntroHome8 = () => {
  const testimonials = [
    { img: monesy, name: "monesy", team: "G2 Esports" },
    { img: sh, name: "sh1ro", team: "Team Spirit" },
    { 
      img: simple, 
      name: "s1mple", 
      team: "Navi",
      review: "Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, так что всем рекомендую!",
      rating: 5,
      date: "09 сентября 2023"
    },
    { img: donk, name: "donk", team: "Team Spirit" }
  ];

  const secondRow = [
    { img: simple, name: "s1mple" },
    { img: sb, name: "b1t" },
    { img: xant, name: "XANTARES" },
    { img: monesy, name: "monesy" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-[100px] px-4"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-[35px] font-semibold text-[#282739]"
        >
          ОТЗЫВЫ РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ
        </motion.h1>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#"
          className="inline-flex items-center gap-2 text-black mt-2 hover:underline"
        >
          Читать отзывы на GAMEGO
        </motion.a>
      </div>

      <div className="mt-8 md:mt-[57px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index}
              isFeatured={index === 2}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {secondRow.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="relative group"
            >
              <img 
                src={testimonial.img} 
                alt={testimonial.name} 
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <p className="text-white font-semibold">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial, index, isFeatured = false }) => {
  if (!isFeatured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative group"
      >
        <img 
          src={testimonial.img} 
          alt={testimonial.name} 
          className="w-full h-[300px] object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
          <p className="text-white font-semibold">{testimonial.name}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      <img 
        src={testimonial.img} 
        alt={testimonial.name} 
        className="w-full h-[300px] object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-black/50 rounded-xl p-6">
        <div className="flex items-center gap-4">
          <img src={Dastanbai5} alt="avatar" className="w-12 h-12 rounded-full" />
          <div className="text-white">
            <p className="font-semibold">Саша {testimonial.name}</p>
            <p className="text-sm opacity-80">{testimonial.team}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <img key={i} src={Star} alt="star" className="w-4 h-4" />
              ))}
            </div>
            <p className="text-sm opacity-80">{testimonial.date}</p>
          </div>
          <p className="text-white mt-2 text-sm">{testimonial.review}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroHome8;