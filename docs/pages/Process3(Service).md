- ### Implementation Strategy
	- Fetcher is a async function, use for send a request to API server.
	- Fetcher is depends on infra FetcherRequest. each request should create a  new instance.
	- The instance of FetchRequest has 3 methods:
		- get(url: RequestInfo | URL): Promise<JSON> to use for  GET HTTP request.
		- post(url: RequestInfo | URL, data: JSON): Promise<JSON> to use for POST HTTP request.
		- abort():void to use for abort request before in same instance.
- ### Test Strategy
	- Test Fetcher and FetchRequest together.
	- There is no need to stub FetchRequest, instead should use msw handlers to mock service worker.
	- Test response data for GET request default.
	- Test response status for POST request default.
- ### Implementaion Steps
	- 1. Use msw, write handlers to mock service worker by AC.
	  2. Write test case code for fetcher return by AC.
	  3. Implement code for test case.
- ### Sample Code
	- ```typescript
	  // src/fetcher/hello.ts
	  
	  import FetchRequest from '../infra/fetchRequest';
	  
	  interface HelloResponse {
	    msg: string;
	    timestamp: number;
	    name: string;
	  }
	  
	  export const fetchHelloData = async (name: string): Promise<HelloResponse> => {
	    const fetchRequest = new FetchRequest();
	    return await fetchRequest.get(`/hello/${name || 'empty'}`);
	  };
	  
	  ```
	- ```typescript
	  // src/fetcher/__tests__/hello.test.ts
	  
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
	  
	  ```