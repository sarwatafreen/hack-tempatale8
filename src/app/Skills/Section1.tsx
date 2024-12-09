import React from 'react'
import IMAGE from "next/image"
import Link from "next/link"
const Section1 = () => {
  return (
    <main>
    <div  className='flex '>
              <div className="flex justify-start mx-20 ml-20 smt-15  ">
            <IMAGE src="/pic3.jpg" alt="about" width={400} height={400}className="image-style" />
            </div>
                   <div className=" flex-1 mr-6 card-icon">
                      <i className="fas fa-wrench"></i>
                      <div className="flex-row">
                    
                    
                    <div className="flex-2 bg-gray-900 ">
                    <h3 className=" text-5xl  bg-yellow-500 font-bold mb-4 rounded-[12rem] borderr-[3,5px] border-4 border-indigo-200 border-t-indigo-500  border-indigo-500/100 card-title">HTML</h3>
    
    <div className='flex-2 bg-gray-900'>
    <p className=" text-white text-sm  card-description">      
    We all use HTML daily, even if we don’t realize it. It’s the backbone of every website, providing structure and 
    meaning to content on the web. Whenever you read an article, watch a video, or shop online, HTML is there behind the scenes,
    organizing text, images, and links to create a seamless experience. Simple yet powerful, HTML is a 
    universal language that connects us to information, entertainment, and each other on the internet            
                     </p>
                     <Link href="/nextjs-services">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundedcard-button">Read</button>
                    </Link>
                    </div>
    </div> 
    </div>
      </div>
    </div>
    </main>
 
  )
}

export default Section1
