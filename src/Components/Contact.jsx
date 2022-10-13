import React from 'react'

const Contact = () => {


  return (
    <div className='pt-8 bg-blue1'>
      <div className='m-auto lg:px-0 px-5 max-w-[340px] lg:max-w-[1200px]'>
       
        <h3 className='contact_title max-w-[1000px] text-bright_yellow'> Would you like to discuss <span className='text-white'>the project ?</span></h3>

        <form name="contact" method="POST" data-netlify="true" className='flex mt-14 flex-col space-y-5 w-fit'>
        <div className='first_input'>
          <input required className='Contact_Input' name='fullName' type="text" />
        </div>

        <div className='second_input'>
          <input required className='Contact_Input' name='email' type="email" />
        </div>

        <div className='third_input'>
          <textarea required className='Contact_Input' name="description" type='text'></textarea>
        </div>

    
        <button  type='submit' className='btn3 hover:shadow-none ease-in  lg:max-w-[220px] max-w-[170px] duration-75  uppercase font-extrabold text-sm lg:text-lg bg-bright_yellow py-2.5 px-6 lg:py-4 lg:px-9'>Contact Me</button>

      </form>
      </div>

      <h3 className='contact_foot lg:hidden lg:mt-20 mt-10 bg-pink text-white py-2 font-bold text-center uppercase'>- Let's Work Together - </h3>
      <h3 className='contact_foot--lg text-white py-4 font-bold bg-pink text-center uppercase mt-20 hidden lg:block'>Let's Work Together - Let's Work Together - Let's Work Together </h3>

     
    </div>
  )
}

export default Contact