import React from 'react'
import spiral_contact from '../assets/Spiral_Contact.svg'
import email from '../assets/email.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1564fb77-bdc9-44e7-a14d-7f30f86df76b");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='pt-8 lg:pt-16  bg-blue1 overflow-hidden relative'>
      <img src={spiral_contact} loading="lazy" alt="" className='hidden lg:block md:block md:max-w-[80%]  absolute z-10 right-0' />
      <div className='m-auto md:ml-8 lg:ml-32 lg:px-0 px-5 max-w-[340px] md:max-w-[700px] lg:max-w-[1200px]'>
       
        <h3 className='contact_title max-w-[1000px]  text-bright_yellow'> Would you like to discuss <span className='text-white'>the project ?</span></h3>

        <form name="contact" onSubmit={onSubmit} action="https://api.web3forms.com/submit" method="POST" className='flex mt-14 flex-col space-y-5 w-fit'>
        <input type="hidden" name="access_key" value="1564fb77-bdc9-44e7-a14d-7f30f86df76b" />
          <div className='flex flex-wrap gap-4 md:gap-8'>
        <div className='first_input relative z-20'>
          <label for = 'name'>Full Name</label>
          <input required className='Contact_Input' name='fullName' id='name' type="text" />
        </div>

        <div className='second_input relative z-20'>
          <label className='flex items-center gap-4' for='email'>Email <img className='max-w-[25px] lg:max-w-[30px] relative' src={email} alt="" /></label>
          <input required className='Contact_Input' id='email' name='email' type="email" />
        </div>
        </div>

        <div className='third_input relative z-20'>
          <label for='description'>Describe your project</label>
          <textarea required  id='description' className='Contact_Input' name="description" type='text'></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>

    
        <button type='submit' className='btn3 relative z-20 hover:shadow-none ease-in  lg:max-w-[220px] max-w-[170px] duration-75  uppercase font-extrabold text-sm lg:text-lg bg-bright_yellow py-2.5 px-6 lg:py-4 lg:px-9'>Submit</button>

      </form>
      <div className='pt-2 md:pt-6'>
      <span className='font-oswald lg:text-xl text-[#13CE66]'>{result}</span>
      </div>
      </div>

      <h3 className='contact_foot lg:hidden md:hidden mt-16 bg-pink text-white py-2 font-bold text-center uppercase'>- Let's Work Together - </h3>
      <h3 className='contact_foot--lg text-white py-4 relative z-20 font-bold bg-pink text-center uppercase mt-16 hidden md:hidden lg:block'>Let's Work Together - Let's Work Together - Let's Work Together </h3>
      <h3 className='contact_foot--md lg:hidden text-white py-2 relative z-20 font-bold bg-pink text-center uppercase mt-28 hidden md:block'>Let's Work Together - Let's Work Together - Let's Work Together </h3>

     
    </div>
  )
}

export default Contact