import { motion } from "framer-motion";
import { Button } from '@mui/material';
import Img22 from '../assets/Polygon 8.png';
import skincs from '../assets/skincs.webp';

const IntroHome7 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-[100px] px-4"
    >
      <div className="relative flex justify-center">
        <motion.img
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          src={skincs} 
          alt="CS2 skins showcase"
          className="w-full max-w-[1300px] h-auto md:h-[700px] object-cover rounded-xl shadow-xl"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-xl"
        >
          <Button className="w-24 h-24 md:w-[136px] md:h-[136px]">
            <img src={Img22} alt="Play button" className="w-8 h-8 md:w-12 md:h-12" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroHome7;