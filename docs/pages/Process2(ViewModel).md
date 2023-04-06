- ### Implementation Strategy
### Test Strategy
### Implementaion Steps
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