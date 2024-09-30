import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLetterbox from '../components/NewLetterbox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p> Welcome to ShopEase, your one-stop online store for the latest fashion trends for women, men, and kids. Our mission is to offer you the most stylish and affordable clothing, ensuring you look your best for every occasion.</p>
        <p> We pride ourselves on delivering exceptional quality and customer service. At ShopEase, we believe that fashion should be accessible to everyone, and we strive to bring you the latest collections with convenience, reliability, and speed.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p> At ShopEase, our mission is to inspire confidence through style. We aim to make fashion affordable and accessible for everyone, regardless of age, size, or location. By staying ahead of the latest trends and working with trusted designers and brands, we bring you quality fashion that fits your lifestyle. We are committed to providing a seamless shopping experience, from selecting your favorite pieces to a smooth checkout and reliable delivery.</p>
        </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>At ShopEase, quality is at the heart of everything we do. Each product undergoes a thorough inspection process to ensure it meets our high standards of durability, comfort, and style. We partner with trusted manufacturers and use premium materials to ensure that every piece in our collection is built to last and provides maximum satisfaction.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>At ShopEase, quality is at the heart of everything we do. Each product undergoes a thorough inspection process to ensure it meets our high standards of durability, comfort, and style. We partner with trusted manufacturers and use premium materials to ensure that every piece in our collection is built to last and provides maximum satisfaction.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>At ShopEase, we believe that great customer service is key to a great shopping experience. Our dedicated support team is always here to assist you with any questions or concerns. Whether you need help with product selection, order tracking, or returns, we’re committed to providing prompt and personalized service. Your satisfaction is our priority, and we go the extra mile to ensure that every interaction leaves you feeling valued.</p>
        </div>
      </div>
      <NewLetterbox />
    </div>
  )
}

export default About
