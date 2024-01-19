import React from 'react'
import fullStar from "./full-star.png";
import emptyStar from "./empty-star.png";

const NewsArticle = ({article, index, favoriteHandler}) => {

  return (
    <li key={article.id} style={{marginBottom: '50px', border: '1px solid black', borderRadius: '5%', width: '400px', padding: '10px'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
            <h2 style={{margin: '5px'}}>{article.title}</h2>
            <button style={{backgroundColor: 'white', border: 'none'}} onClick={() => favoriteHandler(index)}><img src={article.favorite ? fullStar: emptyStar} width={20} height={20} alt={article.title} /></button>
        </div>
        <small style={{marginLeft: '5px', opacity: '0.8'}}>{article.createdAt}</small>
        <p style={{opacity: '0.8', margin: '10px', textAlign: 'left'}}>{article.description}</p>
        <img src={article.image} alt={article.title} width={200} height={150} style={{margin: 'auto'}} />
      </div>
    </li>
  )
}

export default NewsArticle