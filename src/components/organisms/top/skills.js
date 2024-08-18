import React from 'react';
import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSkiing, faTools, faRunning } from '@fortawesome/free-solid-svg-icons'; // faRunningをインポート

const CardFlame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  flex-basis: 33.3333%;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-basis: 50%;
  }
  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ButtonDetail = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  margin: 5px;
`;

const Skills = () => (
  <section id='skills'>
    <Container style={{ padding: '100px 4vw' }}>
      <h3>Skills & Favorites</h3>
      <CardFlame>
        <Card>
          <h4><FontAwesomeIcon icon={faCode} /> Programming</h4>
          <p>
            プログラミングが少しできます。最近は研究兼ビジネスコンテストに向けて画像認識について学習中です。
            ゲームプログラミングもしており、Unityで2Dゲームを作りました。競技の実力はまだ初心者でAtcoderは茶色です。         
          </p>
        </Card>
        <Card>
          <h4>
            <FontAwesomeIcon icon={faTools} style={{ marginRight: '8px' }} />
            Creating
          </h4>
          <p>
            ものづくりが好きです。このサイトをデザインも込みで作れる程度の能力はあります。
            また、電子工作などもしており、自作ゲームのハードウェアの作成などをしています。
            自作PCをしたり、除草機を作ったり創作活動が大好きです。
          </p>
        </Card>
        <Card>
          <h4><FontAwesomeIcon icon={faRunning} /> Running</h4>
          <p>
            ランニングも大好きです。定期的に走っており、マラソン大会にも参加することがあります。現在の10kmマラソンの自己ベストは45分51秒です
          </p>
        </Card>
      </CardFlame>
      <ButtonWrapper>
        <ButtonDetail href='/about#skills'>Skills</ButtonDetail>
        <ButtonDetail href=''>See my resume</ButtonDetail>
      </ButtonWrapper>
    </Container>
  </section>
);

export default Skills;
