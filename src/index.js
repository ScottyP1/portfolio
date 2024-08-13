import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, } from "react-router-dom";
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path='projects' element={<Projects />}></Route>
      <Route path='resume' element={<Resume />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Route>

  ))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);

