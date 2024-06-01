import React from 'react'
import { useState ,useContext ,useEffect} from 'react';
import Articledetail from '../Components/Articledetail';
import Articleslist from '../Components/Articleslist';
import { AppContext } from '../Context/AppContext';

const Headline = () => {
  const {articles,country,category, setCountry, setCategory, fetchArticlePosts } = useContext(AppContext);
 

  return (
    <div>
       <Articleslist articles = { articles} />
    </div>
  )
}

export default Headline
