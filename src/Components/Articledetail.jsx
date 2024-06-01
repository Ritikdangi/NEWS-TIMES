import React from 'react';

const Articledetail = ({ post }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4  ">
      <div className="px-6 py-4">
        <a href={post.url} target="_blank" rel="noopener noreferrer" className="font-bold text-xl mb-2 text-blue-500 hover:underline">
          {post.title}
        </a>
      </div>
      <div className="px-6 py-4 gap-10">
        <div className="text-gray-700 text-base"> By : {post.author}</div>
        <div className="text-gray-700 text-base font-bold">{post.name}</div>
      </div>
      <div className="px-6 py-4">
        <img className="w-9/11" src={post.urlToImage} alt="Article" />
      </div>
      <div className="px-6 py-4 flex flex-col  "  >
        <div className='flex flex-row'>   
        <span>Published on : </span>
         <div className='text-blue font-extrabold ml-0 '> {post.publishedAt}</div>
        </div>
        <p className="text-gray-700 text-base">{post.description}</p>
      </div>
    </div>
  );
};

export default Articledetail;
