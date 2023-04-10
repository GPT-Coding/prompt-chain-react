- ### Implementation Strategy
	- **ViewComponent** should be implemented by RFC (React functional component), base render element prefer use [Antd](https://ant.design/components/overview) components.
	- **ViewComponent** depends ViewModel is React props or state from Hook. It should not import store directly, store should import by Hook only.
	- If hooks is depended by  React Component, and there is async state in hooks,  the React.Suspense should be wrap the real component, and pass the props into real component.
	- If has props, props interface should be defined.
	- If there is async state in hooks,  a Suspense should be wrap for the component.   `<Suspense fallback={<h2>加载中……</h2>}></Suspense>`
### Test Strategy
	- Stub props and hooks, to test render with DOM by using testing-library.
	- If there is function in props and hooks, and bind on event, spy on it to test it calls.
	- The module `testing-library/react'` is export by `tests/test-utils`,  import it instead.
### Implementaion Steps
	- 1. Stub data in ViewModel with AC describe, spy on function in ViewModel, the write test case code for each AC example for component render and user event.
	  2. Write implement code to pass the test case.
	  3. If there is async state in hooks, wrap component by     `<Suspense fallback={<h2>加载中……</h2>}></Suspense>`
- ### Sample Code
	- ```tsx
	  // src/components/Hello.tsx
	  
	  import { Suspense } from 'react';
	  import { useHello } from '../hooks/useHello';
	  
	  const Hello = () => {
	    const helloMsg = useHello();
	    return <h2>{helloMsg}</h2>;
	  };
	  
	  export default () => {
	    return (
	      <Suspense fallback={<h2>加载中……</h2>}>
	        <Hello />
	      </Suspense>
	    );
	  };
	  
	  ```
	- ```typescript
	  // src/components/__tests__/Hello.test.tsx
	  
	  import { render } from '../../../tests/test-utils';
	  import HelloWrapper from '../Hello';
	  import { useHello } from '../../hooks/useHello';
	  
	  // Mock the useHello hook
	  jest.mock('../../hooks/useHello');
	  
	  const mockedUseHello = useHello as jest.Mock;
	  
	  describe('HelloWrapper component', () => {
	    it('renders fallback content and displays the content from Hello component', async () => {
	      const mockHelloMsg = 'Hello, World!';
	  
	      mockedUseHello.mockImplementation(() => {
	        return mockHelloMsg;
	      });
	  
	      const { getByText } = render(<HelloWrapper />);
	  
	      expect(getByText(mockHelloMsg)).toBeInTheDocument();
	    });
	  });
	  
	  ```