- ### 脚手架
	- #### prompt
		- The system is web application for a e-mall,  its tech stacks likes below: {{embed ((8da55b94-4d88-4798-8757-b3732c3c11f7)) }}
		- I want to import kcd-scripts for my jest config
		- I want init mock service worker using msw for test
		- please use vite cli to init project by npx
		- Please help me generate a scaffolding step by step.
	- #### 注意点
		- 引入 vite-plugin-style-import 用于 antd 时有问题，修正如下：
		  ```js
		  import { defineConfig } from 'vite';
		  import reactRefresh from '@vitejs/plugin-react-refresh';
		  import {
		    createStyleImportPlugin,
		    AntdResolve,
		  } from 'vite-plugin-style-import';
		  
		  export default defineConfig({
		    css: {
		      preprocessorOptions: {
		        less: {
		          javascriptEnabled: true,
		        },
		      },
		    },
		    plugins: [
		      reactRefresh(),
		      createStyleImportPlugin({
		        resolves: [
		          AntdResolve(),
		        ],
		        libs: [
		          {
		            libraryName: 'antd',
		            esModule: true,
		            resolveStyle: (name) => {
		              return `antd/es/${name}/style/index`;
		            },
		          },
		        ],
		      }),
		    ],
		  });
		  ```