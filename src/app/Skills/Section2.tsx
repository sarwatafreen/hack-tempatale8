import React from 'react'
import Link from "next/link"
import IMAGE from "next/image"
const Section2 = () => {
  return (
    <main>
       <div className=" flex">
       <div className="flex justify-end items-center mx-auto float-right{20px} mr-4 py-8">
                      <IMAGE src="/pic4.jpg" alt="about" width={700} height={700} className="image-style" /> 
                      </div>
    
      <div className=" bg- gray-100 p-6 flex flex-row items-center service-card">
<div className=" flex-1 mr-6 card-icon">
  <i className="fas fa-wrench"></i>
  <div className="flex-row">
</div>


<div className="flex-2 bg-gray-900 ">
<h3 className=" text-4xl  bg-yellow-500 font-bold mb-4 rounded-[12rem] borderr-[3,5px] border-4 border-indigo-200 border-t-indigo-500  border-indigo-500/100 card-title">TypeScript</h3>
<p className=" text-white text-sm  card-description">   

   
  TypeScript is a programming language that builds<br/> on JavaScript by adding static
   typing, which<br/> makes it easier to catch errors early in <br/>development.
  Developed by Microsoft,<br/> TypeScript is often used in large-scale<br/> applications,
   as its type-checking helps<br/> prevent bugs and improves code readability. <br/>
   It compiles down to plain JavaScript,<br/> so it can run in any environment
    where<br/> JavaScript is supported, like web browsers<br/> and Node.js.
  TypeScript also brings modern<br/> JavaScript features to older platforms,<br/>
  </p> 
  <Link href="/typescript-services">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded card-button">Read </button>
</Link>
    </div>
    </div>
    </div>
    </div>
    </main>
  )
}

export default Section2

