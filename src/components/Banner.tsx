import React from 'react';
import { Button, Col } from 'antd';
import styled from '@emotion/styled';
import colors from '../theme/colors';
import { Container } from './ui/container';
import helpers from '../helpers';
import { Typography } from 'antd';
import {
  ArrowRightOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface News {
  title: string;
  urlToImage: string;
  description: string;
}

type BannerProps = {
  data: News[]
  onBookmarkClick?: (anime: News[]) => void
  isMobile?: boolean
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
      left:0;
      right:0;
      margin-left:auto;
      margin-right:auto;
      width:100%;
      overflow:auto;
      padding:0;
      top:52px;
      `;

const BannerOverlayStyled = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, ${colors.surface} 93.23%), linear-gradient(180deg, ${colors.surface} 0%, rgba(17, 17, 17, 0) 36.98%);
      z-index: 99;
      `


const BannerInfoStyled = styled.div`
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      padding-top: 50px;
      `;

const ButtonGroup = styled.div`
      display: flex;
      flex-direction: row;
      column-gap: 24px;
      align-items: center;
      `;

const Banner: React.FC<BannerProps> = (props) => {
  const { data } = props

  // Handling case when data is not available
  if (!data || data.length === 0) {
    return null;
  }

  const news = data[0];
  return (
    <BannerWrapperStyled>
      <BannerOverlayStyled />
      <BannerContainerStyled>
        <React.Fragment>
          <Title level={3} style={{ color: '#fff' }}>
            Top Headlines
          </Title>
          <BannerInfoStyled >
            <Col span={12}>
              <Title level={2} style={{ color: '#fff' }}>
                {news?.title}
              </Title>
              <Text style={{ color: '#fff' }}>
                {helpers.cutString(news?.description, 500)}
              </Text>
            </Col>

            <ButtonGroup>
              <Button type="primary" >
                Read More
                <ArrowRightOutlined />
              </Button>
            </ButtonGroup>
            
          </BannerInfoStyled>
        </React.Fragment>


      </BannerContainerStyled>
      <img
        src={news?.urlToImage} alt={news?.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

    </BannerWrapperStyled>
  )
};

export default Banner