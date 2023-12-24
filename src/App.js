import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {createRoot} from 'react-dom/client'
import logo from './logo.svg';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Body from './Components/Body';
import Login from './Components/Login'
import Main from './Components/Main'
import Register from './Components/Register'
import Landing from './Components/Landing'
import View_Posts from './Components/View_Posts'
import Create_Post from './Components/Create_Posts';
import Intro from './Components/Intro';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/create' element={<Create_Post />}></Route>
        <Route path='/view_posts' element={<View_Posts />}></Route>
        <Route path='/prekvapenie' element={<Intro />}></Route>
      </Routes>
    </>
  );
}

export default App;
