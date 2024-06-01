import React from 'react'
import Articledetail from './Articledetail'
const Articleslist = ({articles}) => {
  return (
    <div>
       <div className=' container mx-auto px-4'>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {articles.map((post, index) => ( 
<Articledetail   post={post} key={index} />  
    ))}
     </div>
    </div>
    </div>
  )
}

export default Articleslist
