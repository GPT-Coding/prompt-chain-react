// src/components/MerchandiseList/MerchandiseList.tsx

import { Suspense } from 'react';
import { useMerchandiseList } from '../hooks/useMerchandiseList';
import { List, Typography, Card } from 'antd';

const MerchandiseList = () => {
  const items = useMerchandiseList();

  if (items.length === 0) {
    return <Typography.Text>没有更多商品</Typography.Text>;
  }

  return (
    <List
      dataSource={items}
      renderItem={(item) => (
        <List.Item>
          <Card
            title={item.title}
            cover={<img alt={item.title} src={item.img} />}
          >
            <Card.Meta description={item.description} />
            <p>价格: {item.price}</p>
            <p>库存: {item.stock}</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default () => {
  return (
    <Suspense fallback={<h2>加载中……</h2>}>
      <MerchandiseList />
    </Suspense>
  );
};
