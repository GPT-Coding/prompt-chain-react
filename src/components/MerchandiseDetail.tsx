// src/components/MerchandiseDetails.tsx

import { useParams } from 'react-router';
import { Typography, Card, Image, List } from 'antd';
import { Suspense } from 'react';
import { useMerchandiseDetails } from '../hooks/useMerchandiseDetails';

interface MerchandiseDetailsProps {
  id: string;
}

const MerchandiseDetails: React.FC<MerchandiseDetailsProps> = ({ id }) => {
  const { merchandiseDetail, error } = useMerchandiseDetails(id);

  if (error || !merchandiseDetail) {
    return <Typography.Text type="danger">{error}</Typography.Text>;
  }

  const { title, description, imgs, price, stock, comments } =
    merchandiseDetail;

  return (
    <Card>
      <Typography.Title>{title}</Typography.Title>
      <Typography.Text>{description}</Typography.Text>
      <Image src={imgs[0]} alt="Merchandise Image" />
      <Typography.Text>Price: {price}</Typography.Text>
      <Typography.Text>Stock: {stock}</Typography.Text>
      <List
        header={<Typography.Title level={4}>Comments</Typography.Title>}
        dataSource={comments}
        renderItem={(comment: string) => <List.Item>{comment}</List.Item>}
      />
    </Card>
  );
};

export default () => {
  const { id = '' } = useParams<{ id: string }>();

  return (
    <Suspense fallback={<Typography.Text>加载中……</Typography.Text>}>
      <MerchandiseDetails id={id} />
    </Suspense>
  );
};
