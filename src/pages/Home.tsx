import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Global } from '@emotion/react';

import NewsCard from '../components/newsCard/NewsCard';
import { globalStyles } from '../style';
import { News } from 'news';
import Banner from '../components/banner/banner';


const HomePage: React.FC = () => {
  const [newsList, setNewsList] = useState<News[]>([]);

  const fetchNewsData = async () => {
    const SECRET_KEY = import.meta.env.VITE_APP_SECRET_KEY;

    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          apiKey: SECRET_KEY,
          country: 'us',
        },
      });
      setNewsList(response.data.articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div>
      <Global styles={globalStyles} />
      <Banner data={newsList} />
      <NewsCard newsList={newsList} />
    </div>
  );
};

export default HomePage;
