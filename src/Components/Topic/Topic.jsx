import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowQoption from '../ShowQoption/ShowQoption';

function Topic() {
  const quizTopic = useLoaderData()
  const quizdata = quizTopic.data.questions

  return (
    <div>
     {
      quizdata.map(quiz => <ShowQoption
        quiz={quiz}
        key={quiz.id}
      ></ShowQoption>)
     }

    </div>
  )
}

export default Topic