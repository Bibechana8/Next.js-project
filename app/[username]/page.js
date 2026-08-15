import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className='cover w-full bg-red-50 relative'>
      <img className='w-full h-[350] object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=1Kbnq1kmdaOuXBdeATyNc6HRB1AM8eoyjiAg29yBoF4%3D&token-time=1788480000" alt="Event" />
      <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full">
        <img className="rounded-full" width={150} height={150} src="https://media.4-paws.org/9/c/9/7/9c97c38666efa11b79d94619cc1db56e8c43d430/Molly_006-2829x1886-2726x1886-1920x1328.jpg" alt='' />
      </div>
    </div>
    <div className="info flex justify-center items-center my-24 flex-col gap-2 ">
      <div className="font-bold text-lg text-white">

      @{params.username}Bibechana Poudel
      </div>
      <div className=" text-lg text-slate-400">
      Creating Animated art for VTT's

    </div>
    <div className=" text-lg text-slate-400">
26,626 .members113 .Posts$16 .680/release
    </div>
    <div className="payment flex gap-3 w-[80%] mt-11 ">
    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
    <h2 className='text-2xl font-bold my-5'>Supporters</h2>
      <ul className='mx-5 text-lg-3xl'>
        <li className="my-4 flex gap-2 items-center">
          <img width={33} height={33} className="rounded-full" src="/avatar.gif" alt="avatar" />
          <span>
           Shubam donated <span className="font-bold">$10 </span>with a message "I support you girl. lot's of ❤️"
          </span>
          
          </li>
           <li className="my-4 flex gap-2 items-center">
          <img width={33} height={33} className="rounded-full" src="/avatar.gif" alt="avatar" />
          <span>
           Shubam donated <span className="font-bold">$10</span>with a message"I support you girl. lot's of ❤️"
          </span>
          
          </li>
           <li className="my-4 flex gap-2 items-center">
          <img width={33} height={33} className="rounded-full" src="/avatar.gif" alt="avatar" />
          <span>
           Shubam donated <span className="font-bold">$10 </span>with a message "I support you girl. lot's of ❤️"
          </span>
          
          </li>
           <li className="my-4 flex gap-2 items-center">
          <img width={33} height={33} className="rounded-full" src="/avatar.gif" alt="avatar" />
          <span>
           Shubam donated <span className="font-bold">$10 </span>with a message "I support you girl. lot's of ❤️"
          </span>
          
          </li>
        
      </ul>
    </div>
     <div className="Make payments w-1/2  bg-slate-900 rounded-lg text-white p-10">
      <h2 className='text-2xl font-bold my-5'>Make Payments</h2>
      <div className='flex gap-2 flex-col'>
        <div>
       <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter your Name' />  
        </div> 
      <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter your Message' />
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter your Amount' />
        <button type="button" className=" text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>
      </div>
     {/* or choose from these amounts */}
     <div className="flex gap-2 mt-5">
      <button className='bg-slate-800 p-3 rounded-lg'>pay $10</button>
      <button className='bg-slate-800 p-3 rounded-lg'>pay $20</button>
      <button className='bg-slate-800 p-3 rounded-lg'>pay $50</button>
      <button className='bg-slate-800 p-3 rounded-lg'>pay $100</button>

     </div>
    </div>
    </div>
    </div>
    </>
  )
}

 export default Username
