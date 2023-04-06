- ### Implementation Strategy
- ### Test Strategy
- ### Implementaion Steps
- ### Sample Code
	- ```typescript
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