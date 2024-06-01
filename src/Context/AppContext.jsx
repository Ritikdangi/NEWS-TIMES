import { createContext, useEffect, useState } from "react";
import { baseurl } from "../pages/baseurl";
import { useLocation, useNavigate } from "react-router-dom";
import { API_KEY } from "../pages/baseurl";
// create context api
export const AppContext = createContext();
//provider
export default function AppContextProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState('ALL');
  const [country, setCountry] = useState('in');
  const [category, setCategory] = useState('');
  const location = useLocation();
  // Fetch Blog Data
  const fetchArticlePosts = async (type) => {
    setLoading(true);
    let url = `${baseurl}${type}?apiKey=${API_KEY}`;
    if (country) {
      location.pathname.includes("top-headlines") ?
      url += `&country=${country}` : url+= "";
    }
    if (category) {
      location.pathname.includes("top-headlines") ? 
      url += `&category=${category}` : url+="";
    }
    if (query) url += `&q=${query}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data.articles || data.articles.length === 0)
        throw new Error("Something Went Wrong");
      console.log("Api Response", data);
      setPage(data.page);
      setArticles(data.articles);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPage(1);
      setArticles([]);
      setTotalPages(null);
    }
    setLoading(false);
  };

  // Handle When Next and Previous button are clicked
  useEffect( ()=>{
    fetchArticlePosts('top-headlines')
   },[country,category]) ;  

  const value = {
    articles,
    setArticles,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchArticlePosts,
    setQuery, 
    setCountry, 
    setCategory
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
 
}