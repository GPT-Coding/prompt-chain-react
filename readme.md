# React project with GPT chain
1. Setup project onBoarding, about [`techStack`](https://github.com/GPT-Coding/prompt-chain-react/blob/main/docs/pages/TechStacks.md)、[`architecture`、`codesGuideline`](https://github.com/GPT-Coding/prompt-chain-react/blob/main/docs/pages/Architecture.md)、[`commonStrategy`](https://github.com/GPT-Coding/prompt-chain-react/blob/main/docs/pages/overview.md#commonstrategy)、`process`detail ( [process1](https://github.com/GPT-Coding/prompt-chain-react/blob/main/docs/pages/Process1(View).md) [process2](https://github.com/GPT-Coding/prompt-chain-react/blob/main/docs/pages/Process2(ViewModel).md) [process3](https://github.com/GPT-Coding/prompt-chain-react/blob/main/docs/pages/Process3(Service).md) ) and so on...
2. Split story into `process`(can with GPT, but need to add example data for ACs).
3. **Prompt** GPT onBoarding doc, and give a sample story to **check** is GPT onboarding now?
4. **Prompt** GPT `process` detail and example AC, to implement test case code.
5. **Prompt** GPT to implement code for test case, and follow `process`.


# Example
- ## Story
	- 作为一个用户，我希望在页面上能看到商品的列表。
		- AC1:
			- Given  用户进入商品列表页面
			- When 拥有多个商品
			- Then 我可以以列表的形式查看所有商品。每个商品条目包括了标题，描述，价格，库存以及缩略图
		- AC2:
			- Given 用户进入商品列表页面
			- When 没有商品
			- Then 我可以看到提示：‘没有更多商品’
- ### Story Processes
	- **Process1 [[Process1(View)]]**  Implement a ViewComponent called `MerchandiseList.tsx`, to render merchandise list in page.
      - **AC1:** Stub ViewModel Hook return 3 items `[{title: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`, then render a list has 3 items. Each item should render a `title`, `description`, label 价格with price, label 库存 with `stock`, and render Image with src is `img`
      - **AC2**: Stub ViewModel Hook return 0 items `[]`, then should render a empty placeholder in list: '没有更多商品'
      
  - **Process2 [[Process2(ViewModel)]]** Implement a Hook called `useMerchandiseList.tsx`, to fetch data from Fetcher, then return state to ViewComponent
    - **AC1:** Stub Fetcher return async data: `[{name: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`.   Then hooks should return state:   `[{title: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]` 
        
  - **Process3 [[Process3(Service)]]** Implement a Fetcher called `merchandise.ts` , to fetch data from API server.
    - **API:** `GET: /merchandises`
    - **AC1:** Fake Server to response JSON data when request to the url:` [{name: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`.  Then send request to the API and return response.

## OnBoarding

I try to tell you a web application project architecture. The all info is below the title #OverView. All implement codes must follow #TechStacks、#Architecture and #CommonStrategy. If you understand , please answer the question below #Response

### OverView

The project is a web application for e-mall. User can find and buy things they like on it.

#### TechStacks

- **Language**: TypeScript
- **Framework**: React、Recoil、Antd
- **TestSuits**: Jest、Testing-library、@swr/jest
- **Build**: Vite
- **Lint**: Eslint
- **GitHooks**: husky
- **MockServer**: msw

#### Architecture

The project is inherit from MVVM architecture and has 4 layers:

- View
    - **ViewComponent**: This component is use for render and response for user interaction. It is implemented by RFC(React functional component) and depends on ViewModel to get the model data or method for this job. Its test and implementation strategy can find in [[Process1(View)]] .
- ViewModel
    - **Hook**: This component is use to provide React state、React props data for ViewComponent to render and provide callback method to change state or props data when get user interaction event. It depends on Fetcher if should get some data from server and it depends on Store when need to share some global state explicitly. Its test and implementation strategy can find in [[Process2(ViewModel)]].
    - **Store**: This component is use to provide global state in whole application when component Hook need explicitly. Its test and implementation strategy can find in [[Process2(ViewModel)]].
- Service
    - **Fetcher**: This component is use to provide data from server API by HTTP request. It de pends on FetchRequest to send real API request. its test and implementation strategy can find in [[Process3(Service)]]
- Infra
    - **FetchRequest**: This component is encapsulate `fetch` from WEB API. Its instance provide methods `get` and `post` to send GET or POST HTTP request, and provide method `abort` to abort a request. This component is consider a part of scaffold, so consider it is implemented already for new feature.

#### CommonStrategy

1. From Mock up to define ViewModels and Mock it to Implement View.
2. Implement ViewModel, its return is used by View.
3. Implement Fetcher for ViewModel if it need to fetch data from server.

#### Codes guideline:

- The components in layer `View` called `View Logic`, and it should only has codes for view without data logic.
- The components in other layers is called `Non-View Logic` the codes init should without view logic likes render user-event...

### Response

If I want to implement a story to show the merchandises list in the web page. the data is get from server API please tell me implement strategy for this story. 

I prefer test first for each components, please tell me test strategy in each step, and please tell me which 'Process' I can find for implementation detail in each step.


## Process1 Prompt
**Implement Step1 refer Process1:**

> Implement a ViewComponent called `MerchandiseList.tsx`, to render merchandise list in page.
> 
> - **AC1:** Stub ViewModel Hook return 3 items `[{title: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`, then render a list has 3 items. Each item should render a `title`, `description`, label 价格with price, label 库存 with `stock`, and render Image with src is `img`
> - **AC2**: Stub ViewModel Hook return 0 items `[]`, then should render a empty placeholder in list: '没有更多商品'

**Here is Process1 detail describe:**

> Process1:
> 
> 
> **Implementation Strategy**
> 
> - **ViewComponent** should be implemented by RFC (React functional component), base render element prefer use [Antd](https://ant.design/components/overview) components.
> - **ViewComponent** depends ViewModel is React props or state from Hook. It should not import store directly, store should be imported by Hook only.
> - If hooks is depended by React Component, and there is async state in hooks, the React.Suspense should be wrap the real component, and pass the props into real component.
> - If has props, props interface should be defined.
> - If there is async state in hooks, a Suspense should be wrap for the component. `<Suspense fallback={<h2>加载中……</h2>}></Suspense>`
> 
> **Test Strategy**
> 
> - Stub props and hooks, to test render with DOM by using testing-library.
> - If there is function in props and hooks, and bind on event, spy on it to test it calls.
> - The module `testing-library/react'` is export by `tests/test-utils`, import it instead.
> 
> **Implementation Steps**
> 
> 1. Stub data in ViewModel with AC describe, spy on function in ViewModel, the write test case code for each AC example for component render and user event.
> 2. Write implement code to pass the test case.
> 3. If there is async state in hooks, wrap component by `<Suspense fallback={<h2>加载中……</h2>}></Suspense>`
> 
> **Sample Code**
> 
> - `// src/components/Hello.tsx import { Suspense } from 'react'; import { useHello } from '../hooks/useHello'; const Hello = () => { const helloMsg = useHello(); return {helloMsg}; }; export default () => { return ( 加载中……}> ); };`
> - `// src/components/__tests__/Hello.test.tsx import { render } from '../../../tests/test-utils'; import HelloWrapper from '../Hello'; import { useHello } from '../../hooks/useHello'; // Mock the useHello hook jest.mock('../../hooks/useHello'); const mockedUseHello = useHello as jest.Mock; describe('HelloWrapper component', () => { it('renders fallback content and displays the content from Hello component', async () => { const mockHelloMsg = 'Hello, World!'; mockedUseHello.mockImplementation(() => { return mockHelloMsg; }); const { getByText } = render(); expect(getByText(mockHelloMsg)).toBeInTheDocument(); }); });`

If you understand of this step, please tell me implement strategy of it.

Please complete test codes and codes 

## Process2 Prompt
**Implement Step2 refer Process2 ,here is description:**

> Implement a Hook called useMerchandiseList.tsx, to fetch data from Fetcher, then return state to ViewComponent
> 
> - **AC1:** Stub Fetcher return async data:
>     
>     `[{name: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`
>     
>     Then hooks should return state: `[{title: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`
>     

**Here is Process2 detail describe:**

> Process2:
> 
> - **Implementation Strategy**
>     - **Hook** should be implemented a React hook. And management state or other effect.
>         - When state is local, can use hook `useState` for set state.
>         - When state is from async data, default use Recoil `selector`, and get async data in `get`.
>         - When state is from async data, and need some params, default use Recoil `selectorFamily`, and pass the param to the get callback.
>         - Don't fetch async data in `useEffect`.
>         - When state is declared globally, import this global state from Store.
>         - If find some data have relationship, prefer use Recoil data flow to instead of separated `useState`.
>         - If need sync Service to response user react, wrap the Fetcher in a async callback function to return it.
>     - If there is **globally state** in description, Store should be only implemented by Recoil `atom`, if there is `null` for default value except declare explicitly.
>         - Each atom should be declare interface from data or describe.
> - **Test Strategy**
>     - Stub props and Fetcher, then test return value of hooks.
>     - Act on the function to set the state, then test it.
>     - If Hook is depends on global state Store, test them together. There is no need to test Store.
>     - Import `renderHook` from `testing-library/react`, don't import any anther 3rd module.
>     - prefer use `waitFor` to instead `waitForNextUpdates`.
>     - The module `testing-library/react'` is export by `tests/test-utils`, import it instead.
> - **Implementation Steps**
>     1. If there is global state declared, implement a Store first.
>     2. Stub props and Fetcher, write test case code from ACs.
>     3. Implement code for test case.
> - **Sample Code**
>     - `// src/hooks/useHello.tsx import { selector, selectorFamily, useRecoilValue } from 'recoil'; import { fetchHelloData } from '../fetcher/hello'; import { helloNameAtom } from '../store/hello'; const helloMsgQuery = selectorFamily({ key: 'helloMsgQuery', get: (name: string) => async () => { return await fetchHelloData(name); }, }); const currentHelloMsgQuery = selector({ key: 'currentHelloMsgQuery', get: ({ get }) => { return get(helloMsgQuery(get(helloNameAtom))); }, }); export const useHello = () => { const { msg, name, timestamp } = useRecoilValue(currentHelloMsgQuery); return `Now is ${new Date(timestamp).toISOString()}, ${msg}, ${name}`; };`
>     - `// src/store/hello.ts import { atom } from 'recoil'; export const helloNameAtom = atom({ key: 'helloName', default: 'yuqi', });`
>     - `// src/hooks/__tests__/useHello.test.tsx import { renderHook, waitFor } from '../../../tests/test-utils'; import { useHello } from '../useHello'; import { fetchHelloData } from '../../fetcher/hello'; // Mock fetchHelloData jest.mock('../../fetcher/hello'); const mockedFetchHelloData = fetchHelloData as jest.Mock; // Mock timer beforeEach(() => { jest.useFakeTimers(); }); afterEach(() => { jest.useRealTimers(); }); describe('useHello hook', () => { it('returns the correct message with mocked timer and helloNameAtom', async () => { const mockTimestamp = 1677649423000; jest.setSystemTime(mockTimestamp); const mockName = 'John'; const mockMsg = 'Hello, John!'; // Mock the fetchHelloData response mockedFetchHelloData.mockResolvedValue({ msg: mockMsg, timestamp: mockTimestamp, name: mockName, }); const { result, rerender } = renderHook(() => { return useHello(); }); rerender(); await waitFor(() => expect(result.current).toEqual( `Now is ${new Date( mockTimestamp ).toISOString()}, ${mockMsg}, ${mockName}` ) ); }); });`

If you understand of this step, please tell me implement strategy of it.

Please complete test codes and codes 

## Process3 Prompt
**Implement Step3 refer Process3:**

> Implement a Fetcher called `merchandise.ts` , to fetch data from API server.
> 
> - **API:** `GET: /merchandises`
> - **AC1:** Fake Server to response JSON data when request to the url:
>     
>     `[{name: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`	  Then send request to the API and return response.
>     

**Here is Process3 detail describe:**

> **Implementation Strategy**
> 
> - Fetcher is a async function, use for send a request to API server.
> - Fetcher is depends on infra FetcherRequest. each request should create a new instance.
> - The instance of FetchRequest has 3 methods:
>     - get(url: RequestInfo | URL): Promise to use for GET HTTP request.
>     - post(url: RequestInfo | URL, data: JSON): Promise to use for POST HTTP request.
>     - abort():void to use for abort request before in same instance.
> - The FetchRequest set baseUrl is '/portal/api'. So msw handlers should add it too.
> 
> **Test Strategy**
> 
> - Test Fetcher and FetchRequest together.
> - There is no need to stub FetchRequest, instead should use msw handlers to mock service worker.
> - I implement msw already, so just need to add handler.
> - Test response data for GET request default.
> - Test response status for POST request default.
> 
> **Implementation Steps**
> 
> 1. Use msw, write handlers to mock service worker by AC.
> 2. Write test case code for fetcher return by AC.
> 3. Implement code for test case.
> 
> **Sample Code**
> 
> - `// src/fetcher/hello.ts import FetchRequest from '../infra/fetchRequest'; interface HelloResponse { msg: string; timestamp: number; name: string; } export const fetchHelloData = async (name: string): Promise => { const fetchRequest = new FetchRequest(); return await fetchRequest.get(`/hello/${name || 'empty'}`); };`
> - `// src/fetcher/__tests__/hello.test.ts import { fetchHelloData } from '../hello'; describe('fetchHelloData', () => { const mockTimestamp = Date.now(); beforeEach(() => { jest.useFakeTimers(); jest.setSystemTime(mockTimestamp); }); afterEach(() => { jest.useRealTimers(); }); it('should return the correct HelloResponse object', async () => { const name = 'John'; const response = await fetchHelloData(name); expect(response).toHaveProperty('msg', 'Hello!'); expect(response).toHaveProperty('timestamp', mockTimestamp); expect(response).toHaveProperty('name', name); }); it('should return the HelloResponse object with name as empty if not provided', async () => { const response = await fetchHelloData(''); expect(response).toHaveProperty('msg', 'Hello!'); expect(response).toHaveProperty('timestamp', mockTimestamp); expect(response).toHaveProperty('name', 'empty'); }); });`

If you understand of this step, please tell me implement strategy of it.

Please complete test codes and codes 
