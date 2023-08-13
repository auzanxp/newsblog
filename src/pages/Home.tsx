import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Global, css } from '@emotion/react';
import Banner from '../components/Banner';
import NewsGrid from '../components/NewGrid';


const globalStyles = css`
  body {
    background-color: #111;
    color: #fff;
  }
`;

const SECRET_KEY = import.meta.env.VITE_APP_SECRET_KEY;
const HomePage: React.FC = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: SECRET_KEY,
        country: 'us',
      },
    })
      .then(response => {
        setNewsList(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
      });
  }, []);

  console.log(newsList)

  return (
    <div>
      <Global styles={globalStyles} />
      <Banner data={newsList} />
      <NewsGrid newsList={newsList} />
    </div>
  );
};

export default HomePage;
