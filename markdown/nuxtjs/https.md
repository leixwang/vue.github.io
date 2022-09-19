
## NuxtJs2 使用 Https

#### 生成所需要要的证书

使用下面的命令就能生成本地证书. 具体生成证书请参考[官方文档](https://letsencrypt.org/zh-cn/docs/certificates-for-localhost/)

```sh
$ openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

####  Nuxtjs 配置

生成完本地证书, 需要在 `nuxt.config.js` 文件中加入下面的代码. 需要在 `server` 配置本地证书 `key` 和 `cert` 两文件的存放目录.


```js
import path from 'path'
import fs from 'fs'

export default {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
    },
  }
}
```

将文件 `localhost.key` 和  `localhost.crt` 文件存储在项目的根目录下.


## 配置 firebase 的 Auth

需要在 facebook 的开的网站的创建应用.

1. 创建 `facebook` 一个应用
2. 获取应用程序的 `ID` 和 `key`
3. 将 `facebook` 应用程序的 `ID` 和 `key` 填写写在 `firebase auth` 中.

![Firebase auth](/images/nuxtjs/firebaseauth.png)


将得到的 URL 填写到 facebook 的应用中去.





## nuxtjs 使用 firebase

在 Nuxtjs 中安装, 需要使用 `Nuxt Firebase` 第三方的包.

```sh
$ npm install firebase @nuxtjs/firebase  --save
```


[参考 Nuxt Firebase 官方文档](https://firebase.nuxtjs.org/guide/getting-started)





