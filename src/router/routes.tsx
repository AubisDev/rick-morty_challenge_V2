import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import {Navbar, Footer } from "../components";

const HomePage = lazy( () => import( /* webpackChunkName: "HomePage" */"../pages/Home.page" ));
const CharacterPage = lazy( () => import( /* webpackChunkName: "CharactersPage" */"../pages/Characters.page" ));

const PageRoutes = () => {
  return (
    <>
      <Suspense fallback={ <h1>Loading...</h1> } >
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/characters" element={<CharacterPage />} />
              <Route path="*" element={<Navigate to="/" replace  />} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default PageRoutes