import React from 'react';
import { Carousel, Col } from 'antd';
import styled from '@emotion/styled';
import colors from '../theme/colors';
import { Container } from './ui/container';
import helpers from '../helpers';
import { Typography } from 'antd';

const { Title, Text } = Typography;

interface News {
  title: string;
  urlToImage: string;
  description: string;
}

interface NewsCarouselProps {
  newsList: News[];
}

const BannerWrapperStyled = styled.div`
  width: 100%;
  height: 720px;
  position: relative;
`;

const BannerOverlayStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, ${colors.surface} 93.23%), linear-gradient(180deg, ${colors.surface} 0%, rgba(17, 17, 17, 0) 36.98%);
  z-index: 99;
  ),
  linear-gradient(180deg, ${colors.surface} 0%, rgba(17, 17, 17, 0) 36.98%);
  z-index: 99;
`;

const BannerContainerStyled = styled(Container)`
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  top: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BannerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  text-align: center;
  z-index: 1000;
  color: #fff;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 720px;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -1; /* Mengirim gambar ke belakang */
`;

const NewsCarousel: React.FC<NewsCarouselProps> = ({ newsList }) => {
  return (
    <BannerWrapperStyled>
      <Carousel autoplay>
        {newsList.map((news, index) => (
          <div key={index}>
            <ImageStyled src={news.urlToImage} alt={news.title} />
            <BannerOverlayStyled />
            <BannerContainerStyled>
              <BannerInfoStyled>
                <Title level={1} style={{ color: '#fff' }}>
                  {news.title}
                </Title>
                <Col span={12}>
                  <Text>
                    {helpers.cutString(news.description, 500)}
                  </Text>
                </Col>
              </BannerInfoStyled>
            </BannerContainerStyled>
          </div>
        ))}
      </Carousel>
    </BannerWrapperStyled>
  );
};

export default NewsCarousel;