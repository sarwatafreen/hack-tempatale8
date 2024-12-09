import React from 'react'
import Link from "next/link"
 import IMAGE from "next/image"

const Section3 = () => {
  return (
    <div className='flex justify-start mx-20 ml-20 smt-15 '>
       <div className="  p-6 flex flex-row items-center service-card">
                    <div className="flex-1 mr-6 card-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                                         
                    <div className="flex  justify-start ml-40 mx-auto mr-9  ">
            <IMAGE src="/pic5.jpg" alt="about" width={900} height={900} className="image-style" />
            </div>
                    <div className=" flex-2 bg-gray-900 ">
                    <h3 className=" text-4xl bg-yellow-500   font-bold mb-4 rounded-[12rem] borderr-[3,5px] border-4 border-indigo-200 border-t-indigo-500  border-indigo-500/100 card-title">Next.js</h3>
                    <p className="flex text-white text-sm card-description">
               
                      Next.js is a powerful React framework that simplifies<br/> building fast, 
                      scalable<br/> web applications by providing <br/>features like server-side<br/> rendering (SSR), 
                      static site generation (SSG),<br/> and API routes out of the box. Developed by Vercel,
                       Next.js<br/> allows developers to create dynamic<br/> and SEO-friendly pages with minimal setup,
                        enhancing performance and user experience.<br/> Its routing system, automatic<br/> code splitting, 
                        and optimized image handling <br/>make it ideal for both small projects and large-scale applications.
                      With Next.js, ocesses and deployment efficiency.<br/>
                    </p>
              
                       
                    <Link href="/nextjs-services">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundedcard-button">Read</button>
                    </Link>
                    </div>
                  </div>
    </div>
  )
}

export default Section3
