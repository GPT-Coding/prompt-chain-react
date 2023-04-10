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
			-
- ### Story Processes
	- **Process1 [[Process1(View)]]**  Implement a ViewComponent called `MerchandiseList.tsx`, to render merchandise list in page.
      - **AC1:** Stub ViewModel Hook return 3 items `[{title: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`, then render a list has 3 items. Each item should render a `title`, `description`, label 价格with price, label 库存 with `stock`, and render Image with src is `img`
      - **AC2**: Stub ViewModel Hook return 0 items `[]`, then should render a empty placeholder in list: '没有更多商品'
      
  - **Process2 [[Process2(ViewModel)]]** Implement a Hook called `useMerchandiseList.tsx`, to fetch data from Fetcher, then return state to ViewComponent
    - **AC1:** Stub Fetcher return async data: `[{name: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`.   Then hooks should return state:   `[{title: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{title: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]` 
        
  - **Process3 [[Process3(Service)]]** Implement a Fetcher called `merchandise.ts` , to fetch data from API server.
    - **API:** `GET: /merchandises`
    - **AC1:** Fake Server to response JSON data when request to the url:` [{name: '可口可乐', description:'最好喝的可乐',price:10, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '七喜', description:'最好喝的可乐',price:15, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'},{name: '芬达', description:'最好喝的可乐',price:20, stock: 3, img:'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg'}]`.  Then send request to the API and return response.
