// src/hooks/__tests__/useMerchandiseDetails.test.tsx
import { renderHook, waitFor } from '../../../tests/test-utils';
import { useMerchandiseDetails } from '../useMerchandiseDetails';
import { fetchMerchandiseDetails } from '../../fetcher/merchandiseDetailsFetcher';

// Mock fetchMerchandiseDetails
jest.mock('../../fetcher/merchandiseDetailsFetcher');
const mockedFetchMerchandiseDetails = fetchMerchandiseDetails as jest.Mock;

describe('useMerchandiseDetails hook', () => {
  const merchandiseId = '123';
  const merchandiseItem = {
    id: '1255553',
    title: '可口可乐',
    description: '最好喝的可乐',
    price: 10,
    stock: 3,
    imgs: ['https://example.com/coke.jpg'],
    comments: ['Great taste!', 'Love it!'],
  };

  afterEach(() => {
    mockedFetchMerchandiseDetails.mockReset();
  });

  it('returns the correct merchandise details with stubbed props and fetcher', async () => {
    mockedFetchMerchandiseDetails.mockResolvedValue(merchandiseItem);

    const { result } = renderHook(() => useMerchandiseDetails(merchandiseId));

    await waitFor(() => {
      expect(result.current.merchandiseDetail).toEqual(merchandiseItem);
      expect(mockedFetchMerchandiseDetails).toHaveBeenCalledWith(merchandiseId);
    });
  });

  it('returns an error message when the server returns an error', async () => {
    const errorMessage = 'Server error';
    mockedFetchMerchandiseDetails.mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useMerchandiseDetails('invalid'));

    await waitFor(() => expect(result.current.error).toEqual(errorMessage));
  });
});
