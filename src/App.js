import { useEffect, useState } from "react";
import "./App.css";

import NewsArticle from "./NewsArticle";

function App() {
	const [news, setNews] = useState([]);

  const favoriteHandler = (index) => {
    setNews((prevNews) => {
      const updatedNews = [...prevNews];
      updatedNews[index] = {
        ...updatedNews[index],
        favorite: !updatedNews[index].favorite,
      };
      return updatedNews;
    });
  }

	useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://65aa8376081bd82e1d9721e4.mockapi.io/api/news/news");
      const data = await response.json();
      setNews(data); 
    }

    fetchData();

  }, []);

	return (
		<div className="App" style={{display: 'flex', justifyContent: 'center'}}>
			<ul style={{listStyleType: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 400px)', gap: '50px 300px'}}>
        {
          news.map((article, index) => 
            {return <NewsArticle key={article.id} article={article} index={index} favoriteHandler={favoriteHandler} />}
          )
        }
      </ul>
		</div>
	);
}

export default App;
