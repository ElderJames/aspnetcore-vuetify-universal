export default {
  header: '快速入门',
  headerText: '使用一个Vuetify Vue CLI安装包 _(基于官方示例)_ 立即开始您的项目。 Vuetify 支持**SSR**（服务端渲染）,**SPA**（单页应用程序）,**PWA**（渐进式Web应用程序）和标准**HTML**页面。',
  alert1: '为了让您的应用程序正常工作，您**必须**将其包装在一个`v-app`组件中。这个组件是用来管理您的动态内容，以及用来安装许多组件的地方。',
  browserHeader: '受支持的浏览器',
  browserText: 'Vuetify是一个渐进式的框架，试图推动前端开发发展到一个新的水平。为了最好地完成这个任务，必须作出不支持一些老版本IE浏览器的牺牲。这不是兼容浏览器的详尽清单，而是主要受支持的目标浏览器。',
  cdnHeader: '从CDN安装',
  cdnText: '如果不希望从Vue CLI安装Vuetify.js模板，可以将以下代码复制到您的`index.html`中。这将加载最新版本的Vue和Vuetify，让你能够开始使用组件。你也可以在codepen上使用[Vuetify starter](https://template.vuetifyjs.com)。',
  newHeader: '对于全新应用',
  newText: 'Vuetify拥有8个制作好的Vue CLI模版, 其中有3个是复刻自 [Vue.js官网模版](https://github.com/vuejs-templates)。他们只包含小量修改，让您能够更快地开始使用Vuetify。这些安装包需要先安装`vue-cli`。关于vue-cli的更多信息，请访问官方[Github](https://github.com/vuejs/vue-cli)仓库。这些模板旨在让您尽快开始下一个项目。',
  existingHeader: '对于已有应用',
  existingText1: '如果想将Vuetify引入到已有项目中，您必须把它拉入您的项目的node_modules目录。你可以使用`npm`或`yarn`来完成这个任务。这些都是包管理器，让您能够控制应用程序可用的资源。',
  existingText2: '有关如何在您的环境中运行npm的详细说明，请查看[官方文档](https://docs.npmjs.com/getting-started/what-is-npm)。另外，如果你想使用纱线，你可以在这里找到[官方文档](https://yarnpkg.com/lang/en/docs/)。安装完成后，您便可以从命令提示符运行任一命令。',
  existingText3: '一旦Vuetify已经安装，导航到您的应用程序主入口点。大多数情况下会在`index.js`或者`main.js`。您要在这个文件中引入（import）Vuetify并且告诉Vue使用它。',
  existingText4: '您还需要引入Vuetify的css文件。简单地，可以在您的`index.html`引入Vuetify css，或者导入实际的stylus文件甚至是压缩过的css文件.',
  existingText5: '包含Material Design图标的最简单方法是在您的`index.html`文件中添加一个`link`标签（在国内，建议使用`https://fonts.cat.net/`替换）。',
  alert2: '警告: 虽然Vuetify已经尽可能避免导致css冲突，但是也不能保证您自定义的样式不会改变您将此框架集成到现有项目中时的体验。',
  ie11Header: '支持IE11和Safari 9',
  ie11Text: '在您的项目目录中，安装`babel-polyfill`并将其导入到main entry中：',
  ie11Text2: '由于IE浏览器对`<template>`标签的支持有限，您必须将完全编译好的dom元素发送到浏览器。这可以通过预先构建你的Vue代码或者通过创建帮助组件来替换dom元素来完成。例如，如果直接发送到IE，这将失败：',
  toc: [
    {
      text: '介绍',
      href: 'introduction'
    },
    {
      text: '受支持的浏览器',
      href: 'supported-browsers'
    },
    {
      text: '从CDN安装',
      href: 'cdn-install'
    },
    {
      text: '对于全新应用',
      href: 'new-applications'
    },
    {
      text: '对于已有应用',
      href: 'existing-applications'
    },
    {
      text: '支持IE11',
      href: 'ie11-support'
    }
  ]
}
