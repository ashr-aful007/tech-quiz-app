import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowQoption from '../ShowQoption/ShowQoption';

function Topic() {
  const quizTopic = useLoaderData()
  const quizdata = quizTopic.data.questions;
  const {name} = quizTopic.data;

  return (
    <div>
      <h4 className='text-white text-3xl mt-5'>Quiz topic of {name}</h4>
     {
      quizdata.map(quiz => <ShowQoption
        quiz={quiz}
        key={quiz.id}
        quizTopic={quizTopic}
      ></ShowQoption>)
     }

    </div>
  )
}

export default Topic