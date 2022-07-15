# 介绍

`Store`就是保存状态和业务逻辑的实体, 它没有绑定到组件树. 简单的说, 它是承载全局状态. 它就像一个总是存在的组件, 每个组件都可以读取和写入. 它有三个核心概念, `state`, `getters`和`actions`.


## `Store`的应用场景
`Store`应该包含可以在整个应用程序中访问的数据。这包括在很多地方使用的数据，例如在导航栏中显示的用户信息，以及需要通过页面保存的数据，例如非常复杂的多步骤表单。 

另一方面，你应该避免在`store`中包含可能托管在组件中的本地数据，例如，页面本地元素的可见性。 

并不是所有的应用程序都需要访问全局状态，但是如果您需要，`Pinia`将使您的工作更轻松。

## 定义`Store`

首先, 需要在`src`目录下, 创建一个目录, 其名为`stores`, 用来存放`Store`文件, 并在这个目录下创建一个文件. 名为`user.js`, 用来存放用户信息的`Store`. `Store` 是使用 `defineStore()` 定义的，并且它需要一个唯一名称，作为第一个参数传递：

```js
import { defineStore } from "pinia";

// 最好使用 use + 功能名 + Store 来命名, 这样对于便于后续的开发和维护 
// useUserStore 
export const useUserStore = defineStore('user', {
	// 第一个参数是应用程序中 store 的唯一 id
	// other options...
});

```

::: tip 注意
第一个参数的 `id`，是必要的，`Pinia` 使用它来将 `store` 连接到 `devtools`。 将返回的函数命名为 `use...` 是跨可组合项的约定，以使其符合你的使用习惯。
:::

```js
  id: "user",
  state: () => ({
    name: '',
		lastName: '',
		age:
  }),
  getters: {
    fullName: (state) => state.name + state.lastName,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
	```