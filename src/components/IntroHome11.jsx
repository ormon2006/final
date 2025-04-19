import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const IntroHome11 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const faqs = [
    {
      question: "Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?",
      answer: "Да, у нас имеются отзывы и мы гарантируем о безопасности и правильности заказа"
    },
    {
      question: "В Steam все дешевле. Почему?",
      answer: "Незнаем с чего вы вдруг так решили но у нашего сервиса самые дешевые скины снг"
    },
    {
      question: "Как осуществляется сервисное обслуживание ? Где гарантия, что меня обслужат?",
      answer: "В каждой точке мира сервисное обслуживание одинаково , мы даем 100% гарантию что обслужим каждого покупателя"
    },
    {
      question: "Имеются ли какие то бонусы при покупке?",
      answer: "Конечно мы выдаем бонусы в виде 3% кэшбэка при 2-ой покупке у нашего магазина"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div>
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <h1 className="text-[35px] mt-[100px]  w-[456px] font-semibold text-center text-[#282739]">
            ОТВЕЧАЕМ НА ВОПРОСЫ ПОКУПАТЕЛЕЙ
          </h1>
        </motion.div>
        
        <motion.div 
          className="px-[350px] mt-[60px] text-[#282739]"
          variants={itemVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography component="span">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {faq.answer}
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroHome11;