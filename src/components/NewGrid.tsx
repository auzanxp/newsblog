import React from 'react';
import { Row, Col } from 'antd';
import styled from '@emotion/styled';
import helpers from '../helpers';
import { Container } from './ui/container';
import colors from '../theme/colors';

interface News {
  title: string;
  urlToImage: string;
  description: string;
  author?: string;
  publishedAt?: string;
}

interface NewsGridProps {
  newsList: News[];
}

const NewsCardStyles = styled(Container)`
  border: 1px solid #333;
  background-color: #111;
  color: #fff;
  margin-top: 10px;
  margin-left:auto;
  margin-right:auto;
  padding: 16px;
  text-align: left;
  transition: transform 0.3s;

  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
    border-radius: 8px;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .author {
    margin-top: 8px;
    font-size: 14px;
    color: ${colors.textSecondary};
  }

  .published-at {
    font-size: 12px;
    color: ${colors.disabled};
  }

  .description {
    margin-top: 8px;
    font-size: 14px;
    color: ${colors.textSecondary};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const NewsGrid: React.FC<NewsGridProps> = ({ newsList }) => {
  return (
    <Row gutter={[16, 16]}>
      {newsList.map((news, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <NewsCardStyles>
            <img src={news.urlToImage} alt={news.title} />
            <h3>{helpers.cutString(news.title, 50)}</h3>
            <div className="author">{news.author ? helpers.cutString(news.author, 10) : 'Author: None'}</div>
            <div className="published-at">{news.publishedAt}</div>
            <p className="description">{helpers.cutString(news.description, 100)}</p>
          </NewsCardStyles>
        </Col>
      ))}
    </Row>
  );
};

export default NewsGrid;
