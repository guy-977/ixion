import React from 'react';
import {motion} from "framer-motion"

interface CardProps {
  url: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ url, text }) => {
  return (
    <motion.a 
        href={url} whileHover={{scale: 1.1,transition: { duration: 1 }}} className="flex flex-col items-center justify-center bg-[#080808] min-w-[20vw] min-h-[20vh] text-center rounded-3xl card-shadow"
        target='_blank'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
            <h2 className='text-2xl'>{text}</h2>
          </motion.a>
  );
};

export default Card;
