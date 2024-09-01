import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, adipisci? Quae tempora, impedit corporis voluptatem praesentium, harum sit consequatur maiores eligendi numquam similique doloremque, nihil corrupti repellendus quidem! Distinctio, sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut pariatur cum laudantium mollitia ducimus, dicta perspiciatis, molestias recusandae minima suscipit eum ut magnam quo, maxime facere enim eos natus aperiam voluptates! Sapiente corrupti cupiditate similique eius nostrum? Mollitia voluptas error eligendi laboriosam corrupti fuga corporis vero adipisci aut assumenda deleniti recusandae repellat eum facilis, eius cumque omnis pariatur?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe sequi itaque minima voluptatem est dicta animi perferendis, commodi eligendi excepturi molestiae accusantium fugit nemo voluptatum veniam nam id quam qui dolorum? Fugit veniam porro unde architecto id voluptates nihil accusantium ea minima nobis, consectetur velit, nam iste. Inventore voluptatibus, ex non doloremque consectetur sed, laudantium culpa necessitatibus at id, suscipit nesciunt unde.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi rem molestias recusandae esse eaque laudantium unde.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit maxime voluptates repudiandae, architecto assumenda tempora earum animi omnis voluptatum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Cutomer Services:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit maxime voluptates repudiandae, architecto assumenda tempora earum animi omnis voluptatum.</p>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default About