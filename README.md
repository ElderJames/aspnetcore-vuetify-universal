# ASP.NET Core + Vuetify

Hosting vuetify docs project with aspnetcore，support server-side-prerendering(ssr).

Demo: [Vuetify docs](https://vuetifyjs.com/)

本项目Fork自[Vuetify文档项目](https://github.com/vuetifyjs/docs)，并运用ASP.NET Core [JavaScriptService](https://github.com/aspnet/JavaScriptServices) 执行服务端预渲染，达到首页直出目的。

## 特性：

1. 使用Vue全家桶，包含Vue-SSR。
2. 使用Asp.Net Core托管，由JavaScriptService组件实现执行预渲染脚本。
3. 大量 Material Design 组件，界面优美。

## 运行环境

 - node: 7.0 +
 - .NET Core SDK 2.0 +

## 运行命令

- `npm install`
- `dotnet restore`
- `dornet run`