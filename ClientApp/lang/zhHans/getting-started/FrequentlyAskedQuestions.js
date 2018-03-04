export default {
  header: '经常问的问题',
  headerText: '卡在一个特殊问题？在创建票证前请先检查一些常见的陷阱。如果您仍然无法找到要查找的内容，请在Github上提交一个 <a href="https://issues.vuetifyjs.com" target="_blank" rel="noopener">issue</a>或者在 <a href="https://chat.vuetifyjs.com" target="_blank" rel="noopener">discord</a>上向社区提问。',
  question: '提问:',
  answer: '回答',
  noResultsFound: '没找到结果',
  resetSearch: '重置搜索',
  gotchas: [
    {
      q: '我的代码无法工作——我应该怎么做?',
      a: '首先，确认您是否使用了了最新版本的Vue.js和Vuetify。尝试在codepen中使用这个[模版](https://template.vuetifyjs.com/)重现问题。如果您无法在环境之外重现问题，通常意味着问题在本地。如果您仍然无法解决您的问题，请提供您的codepen和issue到[社区](https://chat.vuetifyjs.com)的 **#need-help** 频道。'
    },
    {
      q: '请问有带router的codepen模版吗？',
      a: '有，[在这](https://codepen.io/zikeji/pen/ypeQNm).'
    },
    {
      q: '我的应用程序看起来不正确。',
      a: 'Vuetify必须使用`v-app`组件。它应该包装您的整个应用程序，并且是许多框架功能的中心点。如果由于某种原因您不能使用这个元素，您可以通过属性和类来模仿它，只需在可用的最上层元素（不包括body）以及**application application--{light|dark}** 类中将`data-app`属性设置为true。'
    },
    {
      q: '暗黑和亮白主题不能正常工作。',
      a: 'Vuetify需要一个安装点来执行诸如主题样式等任务。请确定有一个`v-app`封装这您的应用程序。如果这是不可能的，无聊处于何种原因，您可以通过将**data-app**和**class="application application--light (或者 dark)** 应用于到您的应用程序的最上层元素来模仿其行为。'
    },
    {
      q: '菜单/对话框/导航抽屉无法正确打开。',
      a: '确保你的组件是用`v-app`元素包装的。如果您使用了一个元素去激活未被放置在<kbd>激活器</kbd>插槽中的组件，请确保停止了单击事件的冒泡传播，这些组件利用`v-outside-click`指令并将会立即关闭。'
    },
    {
      q: '即使我的内容没有垂直移除，滚动条依然显示。',
      a: 'Vuetify默认开启了html滚动条。这是一个设计上已经过多次辩论的选择，各有利弊。截至目前，表决赞成保持原样。如果你想禁用这个功能，只需在你的样式文件中添加`html {overflow-y：auto}`。'
    },
    {
      q: '如何垂直居中？',
      a: '将**fill-height** 赋值到`v-container`。这个辅助类只会添加 **height: 100%**，但是对于容器，它还会查找子级v-layout `v-layout`，并将所需的类应用到内容的垂直居中。'
    },
    {
      q: '我不在 _/home_ 页面， _/_ 链接却会被激活。',
      a: '将**exact**添加到指向绝对路径 /。欲了解更多信息，你可以访问官方Vue路由[文档](https://router.vuejs.org/en/api/router-link.html).'
    },
    {
      q: '我的页面在手机上没有响应式',
      a: '将`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">`添加到index.html文件的`<head>`节点中。'
    },
    {
      q: '我怎么使用Font Awesome图片和Material Design图标(mdi)?',
      a: '您必须添加字体到您的index.html文件或者其他的方式导入到您的项目中<br>**MDI**: [Material Design Icons](https://materialdesignicons.com/getting-started)<br>**FA**: [Font Awesome](http://fontawesome.io/get-started/)'
    },
    {
      q: '点击按钮后，我的对话框立即关闭',
      a: '例如，当不使用**activator**插槽作为`v-menu`和`v-dialog`时您必须停止点击事件的_冒泡传播_。为此，只需简单地将_.stop_ 修饰符添加到点击事件， `@click.stop="myMethod"`.'
    },
    {
      q: '使用相对路径的图片在`v-card`中不起作用',
      a: 'Vue加载器会自动将相对路径转换未require函数。不幸的是，当涉及到自定义组件时，情况并非如此。您可以使用`require`来避开这个问题。<br><br>`<v-card :src="require(\'path/to/img/img.jpg\')"`'
    }
  ],
  questionHeader: '还有什么是你觉得应该出现在这里的?',
  questionButton: '请让我们知道'
}
