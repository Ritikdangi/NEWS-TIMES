import React, { useEffect } from 'react'
import { useState ,useContext } from 'react';
import Articledetail from '../Components/Articledetail';
import Articleslist from '../Components/Articleslist';
import { AppContext } from '../Context/AppContext';
import { baseurl, API_KEY } from '../pages/baseurl'
const Home = () => {
  const {articles,country,category, setCountry, setCategory, fetchArticlePosts } = useContext(AppContext);

 

  return (
    <div >
       <Articleslist articles = { articles} />
    </div>
  )
}

export default Home
