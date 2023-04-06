// src/components/MerchandiseList/__tests__/MerchandiseList.test.tsx

import {
  getByRole,
  getByText,
  render,
  screen,
} from '../../../tests/test-utils';
import MerchandiseList from '../MerchandiseList';
import { useMerchandiseList } from '../../hooks/useMerchandiseList';

// Mock the useMerchandiseList hook
jest.mock('../../hooks/useMerchandiseList');

const mockedUseMerchandiseList = useMerchandiseList as jest.Mock;

describe('MerchandiseList component', () => {
  it('renders a list with 3 items when ViewModel Hook returns 10 items', () => {
    const mockItems = [
      {
        title: '可口可乐',
        description: '最好喝的可乐',
        price: 10,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
      {
        title: '七喜',
        description: '最好喝的可乐',
        price: 20,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
      {
        title: '芬达',
        description: '最好喝的可乐',
        price: 15,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
      // Add other 2 items with their respective details
    ];

    mockedUseMerchandiseList.mockImplementation(() => {
      return mockItems;
    });

    render(<MerchandiseList />);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);

    mockItems.forEach((item, index) => {
      const renderedItem = items[index];
      expect(getByText(renderedItem, item.title)).toBeInTheDocument();
      expect(getByText(renderedItem, item.description)).toBeInTheDocument();
      expect(
        getByText(renderedItem, `价格: ${item.price}`)
      ).toBeInTheDocument();
      expect(
        getByText(renderedItem, `库存: ${item.stock}`)
      ).toBeInTheDocument();

      const img = getByRole(renderedItem, 'img', {
        name: item.title,
      });
      expect(img).toHaveAttribute('src', item.img);
    });
  });

  it('renders an empty placeholder when ViewModel Hook returns 0 items', () => {
    const mockItems: any[] = [];

    mockedUseMerchandiseList.mockImplementation(() => {
      return mockItems;
    });

    render(<MerchandiseList />);

    const emptyPlaceholder = screen.getByText('没有更多商品');
    expect(emptyPlaceholder).toBeInTheDocument();
  });
});
