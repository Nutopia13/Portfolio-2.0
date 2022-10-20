import React from 'react'
import Game from './Game';
import close from '../../assets/Icons/close2.svg'
import { motion, AnimatePresence } from "framer-motion";
import {useState} from 'react'



const TicTacToe = () => {
  const [isOpenTicTacToe, setIsOpenTicTacToe] = useState(true);

    const ticVariants = {

    offscreen_bg:{
        opacity: 0,
        transition:{
          duration: 1,
        }
  
  
      },
  
      onscreen_bg:{
        opacity: 1,
        transition:{
          duration: 1,
        }
      }
    };
                
     return (
      <AnimatePresence>
      {isOpenTicTacToe && (
    <motion.div
    variants={ticVariants}
    initial="offscreen_bg"
    animate="onscreen_bg"
    exit={{opacity: 0, scale: 0}}
    viewport={{ once: true }}
    transition ={{duration: 1}} 
    className='absolute tictac z-30 mx-auto '>
       
        <motion.div 
         initial={{scale: 0}}
         animate={{scale: 1}}
         exit={{scale: 0}}
         transition ={{duration: 1}}
         
         viewport={{ once: true }} 
        className='tictac_container flex justify-end mx-auto relative rounded-t-2xl max-h-[500px] md:max-w-[600px] lg:max-w-[1000px] h-2/3'>
        <motion.img 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src={close} onClick={() => setIsOpenTicTacToe(!isOpenTicTacToe)} className='cursor-pointer max-w-[40px] mt-2 mr-6 absolute' alt=""  />
         <Game />
         </motion.div>
        
     </motion.div>

     )}
     </AnimatePresence>
     );
 }

 export default TicTacToe

