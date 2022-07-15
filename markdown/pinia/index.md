# Pinia


## 介绍

**Pinia**最初是在2019年11月左右使用`Composition API`重新设计`Vue Store`的一个试验。从那时起，最初的原则仍然相同，但`Pinia`同时适用于`Vue 2`和`Vue 3`，并且不要求您使用`Composition API`。除了安装和`SSR`之外，两者的`API`都是相同的，这些文档针对`Vue 3`，并在必要时提供有关`Vue 2`的注释，以便`Vue 2`和`Vue 3`的用户都可以阅读！



## 安装

使用 `npm` 和 `yarn` 都可以进行安装, 可以选择一个你最熟悉的方式去安装.

```bash
$ yarn add pinia --save
```

或者使用 npm

```bash
$ npm install pinia --save
```

::: tip 提示

This is a tip

:::



```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## 引用`Pinia`
将`Pinia`进入到`vue3`项目中. 修改`main.js`文件. 组件工`API`的方式将其引入到项目中.

```js
import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createPinia());
app.mount("#app");

```

