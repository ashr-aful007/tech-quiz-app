import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Showquizzs from '../Showquizzs/Showquizzs';

function Home() {
  const allQuiz = useLoaderData()
  const quizdata = allQuiz.data;
  
  return (

    <div>
       <div className='h-80 w-[95%] m-auto'>
      <h1 className='flex flex-col h-full justify-center items-center text-5xl text-white font-bold fro'>build your availability</h1>
    </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-1'>
      {
      quizdata.map(quizess => <Showquizzs
      key={quizess.id}
      quizess={quizess}
      ></Showquizzs>)
     }
      </div>
      </div>
    

  )
}

export default Home