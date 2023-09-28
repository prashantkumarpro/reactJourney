import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Github, { githubInfoLoder } from './components/Github/Github'
import { User } from './components/User/User'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: '/About',
//         element: <About />
//       },
//       {
//         path: '/ContactUs',
//         element: <ContactUs />
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='ContactUs' element={<ContactUs />} />
      <Route path='user/:myParams' element={<User />} />
      <Route
        loader={githubInfoLoder}
        path='Github'
        element={<Github />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
