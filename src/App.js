import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Errorpage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import Statistics from './Components/statistics/Statistics';
import Topic from './Components/Topic/Topic';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
        {path:'/', element:<Layout></Layout>,
        errorElement: <Errorpage></Errorpage>,
         children:[
          {
            path: '/',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),          
            element: <Home></Home>,           
          },
          {
            path: '/topic/:topicId',
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
            element: <Topic></Topic>
          },
          {
            path:'/topic',
            element: <Topic></Topic>
          },
          {
            path: '/statistics',
            loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Statistics></Statistics>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          }
         ]
        },
        
  ])
  

  return (
    <div className="App">  
        <div className=' relative bg-gradient-to-br from-indigo-700 to-purple-500'>
        <RouterProvider router={router}>

        </RouterProvider>
        </div>
    </div>
  );
}

export default App;
