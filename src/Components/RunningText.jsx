import React  from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'



const TextScroller = () => {
 const [text, count] = useTypewriter({
  words: [
    `- UI Effects -`,
    `- Animation -`,
    `- Dynamic User Experiences -`,
    ` - Software Development -`,
    `- Full Stack Developer -`
  ],
  loop: true,
  delaySpeed: 1000,
 })
  return (
    <div className='lg:hidden relative bottom-64 md:hidden flex justify-center z-20 items-center min-h-[52px] uppercase font-oswald bg-azra text-white running_text font-bold text-2xl'>
      <p>{text}</p>
      <Cursor cursorColor='#F1D624' />
    </div>
  );
};


export default TextScroller;


