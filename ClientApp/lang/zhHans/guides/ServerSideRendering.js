export default {
  header: '概述',
  headerText: '本概览旨在帮助您流利使用**Vuetify的**Vue SSR模版。如果您尚未安装`webpack-ssr`模版，请在[在快速入门中](/vuetify/quick-start)安装。',
  structureHeader: '构造',
  structureText1: '这个Vue CLI模版是为性能和SEO优化而设计的。这个模版配置好了一个开箱即用的css, sass and stylus预处理器。',
  structureText2: '**Build**文件夹包含您的项目的所有webpack特定的构建配置。**Src**是所有开发项目文件所在的地方。请注意，Webpack-SSR模版被配置成开箱即用地使用[Vue Router](https://router.vuejs.org/en/)、[Vuex](https://vuex.vuejs.org/en/intro.html)和[Vue Server Renderer](https://vuejs.org/v2/guide/ssr.html)。这将允许您开发简单或复杂的应用程序。',
  structureSubHeader: '文件夹结构',
  applicationHeader: '应用程序',
  applicationText1: '导航到**src**文件夹并打开`App.vue`.Vuetify是一个以语义为中心的框架，您写的代码应该很容易记住，而且易于管理。为此，Vuetify的主要组件之一是`v-app`，这个组件允许您定义您的应用程序布局，这与`v-toolbar`、`v-navigation-drawer`和`v-footer`结合使用。',
  applicationText2: '下面的标记告诉应用程序您有一个`toolbar`和`footer`。一旦定义，内容区域将被调整到适应的大小。有关布局的更多信息，请导航到[布局](/layouts/pre-defined)部分。',
  applicationText3: '举个例子，将所有静态提供的资源放在`static`目录，这样可以通过引用`/static/picture.png`。',
  applicationText4: '组件文件夹是您的自定义组件应放置的位置，编辑`components/_index.js`文件以使这些文件自动为您启动。',
  applicationSubHeader1: '静态资源',
  applicationSubHeader2: '组件',
  routingHeader: '路由',
  routingText1: 'Webpack-SSR模版使用了官方Vue路由器来控制应用程序流程。位于`/src/router/index.js`中，所有的应用程序路由和路由逻辑将在这里定义。在里面您也会看到一个允许您设置动态加载页面的功能，这不是必须的，但是，这将有助于分解您的应用程序，只加载所需的视图，清理最终输出的仓储空间。',
  routingText2: '这些路由可以通过创建一个指向特定路径的链接或者使用Vue Router的`<router-link>`组件而被访问。更多相关信息，请查看官方的Vue Router[文档](https://router.vuejs.org/zh-cn/)。默认功能假设您将视图放置在文件末尾包含**View**的<kbd>/pages</kbd>文件夹中，例如`HomeView.vue`。',
  stateControlHeader: '状态控制',
  stateControlText1: '状态控制由官方Vuex库来管理，这个Vue插件遵循Facebooks的Reflux设计模式。导航到`/store/index.js`。默认情况下，Vuex会在您的页面初始化渲染之前预先获取存储中的数据。要挂钩此功能，请在视图组件上创建一个`preFetch`方法。',
  stateControlText2: '这对引导您的应用程序非常有用，以便在初始化渲染之前提供任何必要的数据。',
  stateControlText3: '关于状态控制和Vuex的更多信息，请浏览官方[文档](https://vuex.vuejs.org/zh-cn/intro.html)。',
  stateControlText4: 'Vuetify集成到Vuex中，便于调试和访问已存储的属性。您也可以使用watcher挂钩到存储状态并在更改时作出反应。更多信息可以在[这里](https://vuejs.org/v2/guide/reactivity.html)找到。',
  metaDataHeader: '元数据',
  metaDataText: '为了确保在抓取您的页面时可以查看页面特定的元数据，您可以在`router/meta.json`中定义应用程序页面特定的信息，允许您为每个路由设置页面标题、描述和关键字，它会自动应用于您在页面加载和更改。',
  redirectsHeader: '重定向',
  redirectsText: '随着应用程序的发展，路由也会改变。如果您想保持您的页面已经从索引机器人获得的权重，最好是分配一个301重定向到新的位置。位于`router/301.json`中，您可以为页面定义301重定向，在页面加载时会自动处理。',
  webAppSupportHeader: 'Web App支持',
  webAppSupportText: 'Vuetify SSR已经支持智能手机上的原生Web应用程序，也称为渐进式网络应用程序，您的网站可以保存在设备的主屏幕上，使其可以脱机使用并接收推送通知。有关Web App清单的更多信息，请导航到[Mozilla开发者网络](https://developer.mozilla.org/en-US/docs/Web/Manifest)。要查看实例，请移动到设备的主屏幕上添加Vuetify文档。',
  toc: [
    {
      text: '概述',
      href: 'introduction'
    },
    {
      text: '结构',
      href: 'structure'
    },
    {
      text: '应用',
      href: 'application'
    },
    {
      text: '路由',
      href: 'routing'
    },
    {
      text: '状态控制',
      href: 'state-control'
    },
    {
      text: '元数据',
      href: 'meta-data'
    },
    {
      text: '重定向',
      href: 'redirects'
    },
    {
      text: 'Web App支持',
      href: 'web-app-support'
    }
  ]
}
