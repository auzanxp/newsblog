import { Row, Col, Typography, Tooltip, Empty } from 'antd';
import styled from '@emotion/styled';
import helpers from '../../helpers';
import colors from '../../theme/colors';
import { Container } from '../container';
import { News } from 'news';

const { Title, Text, Paragraph } = Typography;

interface NewsCardProps {
  newsList: News[];
}

const NewsCardStyles = styled.div`
  border: 1px solid #333;
  color: #fff;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  text-align: left;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
    border-radius: 8px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const EmptyContainer = styled(Empty)`
  width: 100%;
  height: 158px;
  object-fit: cover;
`

const StyledTitle = styled(Title)`
  color: #fff !important;
  font-size: 18px !important;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${colors.textSecondary} !important;
  font-size: 14px !important;
  margin-top: 8px !important;
`;

const AuthorText = styled(Text)`
  color: ${colors.textSecondary} !important;
  font-size: 12px !important;
  margin-top: 4px !important;
`;

const PublishedAtText = styled(Text)`
  color: ${colors.disabled} !important;
  font-size: 12px !important;
  margin-top: 4px !important;
`;

const NewsCard: React.FC<NewsCardProps> = ({ newsList }) => {
  return (
    <Container>
      <Row gutter={[16, 16]}>
        {newsList.map((news, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Tooltip title="Read More" color="blue" placement="topRight">
              <NewsCardStyles onClick={() => window.open(news.url, '_blank')}>
                {news.urlToImage ? (
                  <img src={news.urlToImage} alt={news.title} />
                ) : (
                  <EmptyContainer image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
                <StyledTitle level={3}>
                  {helpers.cutString(news.title, 50)}
                </StyledTitle>
                <Row gutter={[0, 4]}>
                  <Col span={24}>
                    <AuthorText strong>{news.author ? helpers.cutString(news.author, 10) : 'Author: None'}</AuthorText>
                  </Col>
                  <Col span={24}>
                    <PublishedAtText type="secondary">{news.publishedAt}</PublishedAtText>
                  </Col>
                </Row>
                <StyledParagraph>
                  {helpers.cutString(news.description, 70)}
                </StyledParagraph>
              </NewsCardStyles>
            </Tooltip>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsCard;
