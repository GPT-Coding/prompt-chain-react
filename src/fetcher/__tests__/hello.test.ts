//src/fetcher/__tests__/hello.test.ts

import { fetchHelloData } from '../hello';

describe('fetchHelloData', () => {
  const mockTimestamp = Date.now();
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(mockTimestamp);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return the correct HelloResponse object', async () => {
    const name = 'John';
    const response = await fetchHelloData(name);

    expect(response).toHaveProperty('msg', 'Hello!');
    expect(response).toHaveProperty('timestamp', mockTimestamp);
    expect(response).toHaveProperty('name', name);
  });

  it('should return the HelloResponse object with name as empty if not provided', async () => {
    const response = await fetchHelloData('');

    expect(response).toHaveProperty('msg', 'Hello!');
    expect(response).toHaveProperty('timestamp', mockTimestamp);
    expect(response).toHaveProperty('name', 'empty');
  });
});
