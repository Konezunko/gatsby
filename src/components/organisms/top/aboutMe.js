import React from 'react';
import { Container } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <Container style={{ padding: '100px 4vw' }}>
        <h3>About Me</h3>
        <p>室蘭工業大学に通っているただの人間です。土木工学科に所属していますがあまり土木してません。</p>
        <p>ゲーム開発、Webサイト製作、電子工作などいろいろやっています。</p>
        <p>最近は、ビジネスコンテストに向けて実証実験をしたりプレゼンテーションについて勉強していますが、やりたいことが多すぎて方向性が散乱しがちです。</p>
        <p>詳しくはAboutページへ</p>
        <br />
        <a href='/about' style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>About</a>
      </Container>
    </section>
  );
};

export default AboutMe;
