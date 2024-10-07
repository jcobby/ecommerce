import React from 'react'

function page() {
  return (
    <div className='h-96 flex flex-col justify-center items-center'>
      <div className='text-6xl font-bold flex justify-center items-center'>404 Not Found</div>
      <div className='py-10'>Your visited page not found. You may go home page.</div>
      <button className='bg-blue-600 p-6  rounded-lg text-white'>Back to homepage</button>
    </div>
  )
}

export default page
