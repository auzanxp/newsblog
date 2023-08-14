import React from 'react';
import { Button, Col } from 'antd';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import colors from '../../theme/colors';
import helpers from '../../helpers';
import { Container } from '../container';
import { News } from 'news';

const { Title, Text } = Typography;

interface BannerProps {
  data: News[];
}

const BannerWrapperStyled = styled.div`
  width: 100%;
  height: 620px;
  overflow: hidden;
  position: relative;
`;

const BannerContainerStyled = styled(Container)`
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: auto;
  padding: 0;
  top: 52px;
`;

const BannerOverlayStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(17, 17, 17, 0) 0%,
      ${colors.surface} 93.23%
    ),
    linear-gradient(180deg, ${colors.surface} 0%, rgba(17, 17, 17, 0) 36.98%);
  z-index: 99;
`;

const StyledTitle = styled(Title)`
  color: #fff !important;
`;

const StyledText = styled(Text)`
  color: #fff !important;
`;

const BannerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 50px;
  margin
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  align-items: center;
`;

const NewsInfo: React.FC<{ news: News }> = ({ news }) => (
  <BannerInfoStyled>
    <Col xs={24} md={12}>
      <StyledTitle level={2}>{news.title}</StyledTitle>
      <StyledText>{helpers.cutString(news.description, 500)}</StyledText>
    </Col>
    <ButtonGroup>
      <Button
        type="primary"
        href={news.url}
        target="_blank"
        rel="noopener noreferrer">
        Read More
        <ArrowRightOutlined />
      </Button>
    </ButtonGroup>
  </BannerInfoStyled>
);

const Banner: React.FC<BannerProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const news = data[0];

  return (
    <BannerWrapperStyled>
      <BannerOverlayStyled />
      <BannerContainerStyled>
        <>
          <StyledTitle level={3}>Top Headlines</StyledTitle>
          <NewsInfo news={news} />
        </>
      </BannerContainerStyled>
      <img
        src={news.urlToImage} alt={news.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </BannerWrapperStyled>
  );
};

export default Banner;
