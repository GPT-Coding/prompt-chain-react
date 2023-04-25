//src/hooks/__tests__/useHello.test.tsx

import { renderHook, waitFor } from '../../../tests/test-utils';
import { useHello } from '../useHello';
import { fetchHelloData } from '../../fetcher/hello';

// Mock fetchHelloData
jest.mock('../../fetcher/hello');
const mockedFetchHelloData = fetchHelloData as jest.Mock;

// Mock timer
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('useHello hook', () => {
  it('returns the correct message with mocked timer and helloNameAtom', async () => {
    const mockTimestamp = 1677649423000;
    jest.setSystemTime(mockTimestamp);

    const mockName = 'John';
    const mockMsg = 'Hello, John!';

    // Mock the fetchHelloData response
    mockedFetchHelloData.mockResolvedValue({
      msg: mockMsg,
      timestamp: mockTimestamp,
      name: mockName,
    });

    const { result, rerender } = renderHook(() => {
      return useHello();
    });
    rerender();
    await waitFor(() =>
      expect(result.current).toEqual(
        `Now is ${new Date(
          mockTimestamp
        ).toISOString()}, ${mockMsg}, ${mockName}`
      )
    );
  });
});
