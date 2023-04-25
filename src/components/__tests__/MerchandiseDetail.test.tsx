// src/components/__tests__/MerchandiseDetails.test.tsx

import { render, screen } from '../../../tests/test-utils';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import MerchandiseDetails from '../MerchandiseDetail';
import { useMerchandiseDetails } from '../../hooks/useMerchandiseDetails';

// Mock the useMerchandiseDetails hook
jest.mock('../../hooks/useMerchandiseDetails');

const mockedUseMerchandiseDetails = useMerchandiseDetails as jest.Mock;

describe('MerchandiseDetails component', () => {
  const mockMerchandiseItem = {
    id: '123',
    title: '可口可乐',
    description: '最好喝的可乐',
    price: 10,
    stock: 3,
    imgs: ['https://example.com/coke.jpg'],
    comments: ['Great taste!', 'Love it!'],
  };

  beforeEach(() => {
    mockedUseMerchandiseDetails.mockReset();
  });

  it('renders merchandise details view with title, description, picture, price, stock, and comments', () => {
    mockedUseMerchandiseDetails.mockImplementation(() => ({
      merchandiseDetail: mockMerchandiseItem,
      error: null,
    }));

    render(<MerchandiseDetails />);

    expect(screen.getByText(mockMerchandiseItem.title)).toBeInTheDocument();
    expect(
      screen.getByText(mockMerchandiseItem.description)
    ).toBeInTheDocument();
    expect(screen.getByAltText('Merchandise Image')).toHaveAttribute(
      'src',
      mockMerchandiseItem.imgs[0]
    );
    expect(
      screen.getByText(`Price: ${mockMerchandiseItem.price}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Stock: ${mockMerchandiseItem.stock}`)
    ).toBeInTheDocument();
    mockMerchandiseItem.comments.forEach((comment) => {
      expect(screen.getByText(comment)).toBeInTheDocument();
    });
  });

  it('renders error toast message indicating ViewModel return error message', () => {
    const errorMessage = 'Server Error';

    mockedUseMerchandiseDetails.mockImplementation(() => ({
      merchandiseDetail: null,
      error: errorMessage,
    }));

    render(<MerchandiseDetails />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
