import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Showquizzs from '../Showquizzs/Showquizzs';

function Home() {
  const allQuiz = useLoaderData()
  const quizdata = allQuiz.data;
  
  return (
    <div>
     {
      quizdata.map(quizess => <Showquizzs
      key={quizess.id}
      quizess={quizess}
      ></Showquizzs>)
     }
      </div>
  )
}

export default Home