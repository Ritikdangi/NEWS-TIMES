import React from 'react'
 import { useNavigate ,useParams,useLocation,useRoutes} from 'react-router'
 import { useState } from 'react'
 import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { useContext } from 'react'
import { baseurl, API_KEY } from '../pages/baseurl'
import Headline from '../pages/Headline'
const navbar = () => {
  const {country,category, setCountry, setCategory, fetchArticlePosts } = useContext(AppContext);
   const navigate = useNavigate();
  function handleCountryChange(e){
    setCountry(e.target.value);
   // fetchArticlePosts('top-headlines');
   // navigate("/top-headlines");
  }
  function handleCategoryChange(e){
    setCategory(e.target.value);
  // fetchArticlePosts('top-headlines');
 //  navigate("/top-headlines");
  }

  return (
    <div className="bg-blue-500 p-4">
       <nav>
       <div className='text-center'> NEWS'S TIME</div>
       <div className="container mx-auto flex justify-between"  >
        <NavLink to="/" className="text-white mx-2">HOME</NavLink>
        <NavLink to="/top-headlines" className="text-white mx-2">TOP HEADLINE</NavLink>
      </div>

      <div>
        <select onChange={handleCountryChange} className="p-2 text-black">
        <option value="in">India </option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="gb">United Kingdom</option>
        </select>
        <select onChange={handleCategoryChange} className="p-2 text-black ml-2">
          <option value="">Select Category</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
       </nav>
      
    </div>
  )
}

export default navbar
