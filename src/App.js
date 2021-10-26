import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import News from "./components/form-news/form-news";
import AddNews from "./components/news/add-news"
// import { UserTable, LoadButton } from './components';
// import './app.css';
import { trackPromise } from 'react-promise-tracker';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    trackPromise(
      fetch('https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2021-10-26&' +
      'sortBy=popularity&' +
      'apiKey=f7ec2ef392d9417cb9f3210f25d3bda5')
      .then(response => response.json())
      .then(data => {
        if(data.status === 'ok') {
          setNews(data.articles)
        }
      })
    )

  }, [])


  // useEffect(() => {
  //   console.log(`men newsga qaramman`);
  // }, [news])

  return (
    <>
    <AddNews news={news} setNews={setNews} />
  <ul>
    {news.map((newws) => <News {...newws} news={news} setNews={setNews} />)}
  </ul>
    </>
  );
}

export default App;
