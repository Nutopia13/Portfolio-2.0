import React from 'react'
import Game from './Game';
import close from '../../assets/Icons/close2.svg'
import { motion, AnimatePresence } from "framer-motion";
import {useState} from 'react'



const TicTacToe = () => {
  const [isOpenTicTacToe, setIsOpenTicTacToe] = useState(true);

    const ticVariants = {

    offscreen_bg:{
        opacity: 0
  
  
      },
  
      onscreen_bg:{
        opacity: 1
      }
    };
                
     return (
      <AnimatePresence>
      {isOpenTicTacToe && (
    <motion.div
    variants={ticVariants}
    initial="offscreen_bg"
    whileInView="onscreen_bg"
    viewport={{ once: true }} 
    className='absolute tictac z-30 mx-auto '>
       
        <div className='tictac_container flex justify-end mx-auto relative rounded-t-2xl max-h-[500px] md:max-w-[600px] lg:max-w-[1000px] h-2/3'>
        <motion.img 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src={close} onClick={() => setIsOpenTicTacToe(!setIsOpenTicTacToe)} className='cursor-pointer max-w-[40px] mt-2 mr-6 absolute' alt=""  />
         <Game />
         </div>
        
     </motion.div>

     )}
     </AnimatePresence>
     );
 }

 export default TicTacToe

