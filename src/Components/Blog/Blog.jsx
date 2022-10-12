import React from 'react'
import './Blog.css'

function Blog() {
  return (
    <div className='bg-white '>
       <div className=' bg-white blog-span'>
       <h4>1. what is purpose of react router ?</h4> 
         React Router is a standard library for routing in React. It enables the <br></br>navigation among views of various components in a React Application, allows <br></br>changing the browser URL, and keeps the UI in sync with the URL. 
       </div>
        <div className=' bg-white blog-span mt-9'>
          <h4>2. how does context api work ?</h4>
          The React Context API is a way for a React app to effectively produce global<br></br> variables that can be passed around. This is the alternative to<br></br> "prop drilling" or moving props from grandparent to child to parent, and so on.<br></br> Context is also touted as an easier, lighter approach to state management using Redux.<br></br>
        </div>
        <div className=' bg-white blog-span mt-9'>
          <h4>3. what is use wrap hooks ?</h4>
          We want to wrap the swipe detection functionality of the underlying library in<br></br>a reusable React hook. Let's call one useSwipe as it is important<br></br> to follow the hooks naming convention. This is how the hook will be used in a consumer component:<br></br>
        </div>

      
    </div>
  )
}

export default Blog