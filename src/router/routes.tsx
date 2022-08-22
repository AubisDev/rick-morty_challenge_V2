import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import PageNotFound from '../pages/PageNotFound.page';
import {Navbar, Footer } from "../components";
// import Loader from "../components/Loader/Loader";

const HomePage = lazy( () => import( /* webpackChunkName: "HomePage" */"../pages/Home.page" ));
const CharacterPage = lazy( () => import( /* webpackChunkName: "CharactersPage" */"../pages/Characters.page" ));

const PageRoutes = () => {
 const [page, setPage] = useState<number>(1);  
  return (
    <>
      <Suspense fallback={ <h1>Loading...</h1> } >
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/characters" element={<CharacterPage  />} />
              <Route path="/page-not-found" element={<PageNotFound/>} />
              <Route path="*" element={<Navigate to="/page-not-found" replace  />} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default PageRoutes