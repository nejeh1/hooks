import React, { useState } from 'react'
import Movie from './Movie'
import Navbarr from './Navbarr'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Desc from './Desc'

function App() {
    const [list, setList] = useState([
    { name: "Harry Potter", rate: "4", imagelink: "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg", description: "He has a magic stick", video:"https://www.youtube.com/embed/hRBKvrsI_IY?si=fsrYN09pwpkOx58i"},
    { name: "Vikings", rate: "5", imagelink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQOtj4pUXP9fzyUz5gVYkZt3_1Z1gCNsGEPmT5snx_Xxhp0UNo", description: "They kill people everywhere they go" },
    { name: "Moon Knight", rate: "5", imagelink: "https://www.francetvinfo.fr/pictures/uGKKmvQfk93jmlwrBiff7JkQcno/fit-in/720x/2022/03/15/php8A3zAY.jpg", description: "He is not a hero; he lives in a mental institution" }
  ]);
  return (
    <div>
      <Navbarr></Navbarr>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='movies' element={<Movie list={list} setList={setList}></Movie>}></Route>
        <Route path='About' element={<About ></About>}></Route>
        <Route path='movies/:id' element={<Desc list={list}></Desc>} ></Route>
      </Routes>
    </div>
  )
}

export default App
