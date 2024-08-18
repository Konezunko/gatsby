import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';  // GatsbyからLinkをインポート

function BlogItem({ title, date, src, link }) {  // 修正: date をパラメータとして受け取る
  return (
    <div>
      <Card className="mt-4">
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {date}  {/* 修正: date を表示 */}
          </Card.Text>
          <Link to={link}>see more</Link>  {/* 修正: 正しいテンプレートリテラルの使用 */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogItem;
