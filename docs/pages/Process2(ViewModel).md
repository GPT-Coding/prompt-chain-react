- ### Implementation Strategy
	- **Hook** should be implemented a React hook. And management state or other effect.
		- When state is local, can use hook `useState` for set state.
		- When state is from async data, default use Recoil `selector`, and get async data in `get`.
		- Don't fetch async data in `useEffect`.
		- When state is from async data, and need some params, default use Recoil `selectorFamily`, and pass the param to the get callback.
		- When state is declared globally, import this global state from Store.
		- If find some data have relationship, prefer use Recoil data flow  to instead of separated `useState`.
		- If need sync Service to response user react, wrap the Fetcher in a async callback function then return it.
	- Store should be only implemented by Recoil `atom`, if there is  `null` for default value except declare explicitly.
		- Each atom should be declare interface from data or describe.
### Test Strategy
	- Stub props and Fetcher, then test return value of hooks.
	- Act on the function to set the state, then test it.
	- If Hook is depends on global state Store, test them together. There is no need to test Store.
	- Import `renderHook` from  `testing-library/react`, don't import any anther 3rd module.
	- prefer use `waitFor` to instead `waitForNextUpdates`.
	- The module `testing-library/react'` is export by `tests/test-utils`,  import it instead.
### Implementaion Steps
	- 1. If there is global state declared, implement a Store first.
	  2. Stub props and Fetcher, write test case code from ACs.
	  3. Implement code for test case.
### Sample Code
	- ```typescript
	  //  src/hooks/useHello.tsx
	  
	  import { selector, selectorFamily, useRecoilValue } from 'recoil';
	  import { fetchHelloData } from '../fetcher/hello';
	  import { helloNameAtom } from '../store/hello';
	  
	  const helloMsgQuery = selectorFamily({
	    key: 'helloMsgQuery',
	    get: (name: string) => async () => {
	      return await fetchHelloData(name);
	    },
	  });
	  
	  const currentHelloMsgQuery = selector({
	    key: 'currentHelloMsgQuery',
	    get: ({ get }) => {
	      return get(helloMsgQuery(get(helloNameAtom)));
	    },
	  });
	  
	  export const useHello = () => {
	    const { msg, name, timestamp } = useRecoilValue(currentHelloMsgQuery);
	    return `Now is ${new Date(timestamp).toISOString()}, ${msg}, ${name}`;
	  };
	  ```
	- ```typescript
	  // src/store/hello.ts
	  
	  import { atom } from 'recoil';
	  
	  export const helloNameAtom = atom({
	    key: 'helloName',
	    default: 'yuqi',
	  });
	  
	  ```
	- ```tsx
	  // src/hooks/__tests__/useHello.test.tsx
	  
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
	  
	  ```