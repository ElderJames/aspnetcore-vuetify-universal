export default {
  header: '动效',
  headerText: '流畅的动画有助于给用户界面带来很棒的感觉。使用Vue的过渡系统和可复用的功能组件，您可以轻松地控制应用程序的动画效果。大多数组件可以通过`transition`属性来改变他们的过渡。',
  components: [
    'v-fade-transition',
    'v-slide-x-transition',
    'v-slide-x-reverse-transition',
    'v-slide-y-transition',
    'v-slide-y-reverse-transition',
    'v-scale-transition'
  ],
  examples: [{
    slideXTransitions: {
      header: 'X轴滑动过渡',
      desc: '滑动x过渡可沿水平方向移动。'
    },
    slideYTransitions: {
      header: 'Y轴滑动过渡',
      desc: '过渡地使用应用程序<code>$primary-transition</code>.'
    },
    scaleTransition: {
      header: '缩放过渡',
      desc: '许多Vuetify组件都包含一个`transition`属性允许你指定你自己的效果'
    },
    fadeTransition: {
      header: '淡入淡出过渡',
      desc: '另一个淡入淡出过渡的示例可以在圆盘传送带组件上找到。'
    },
    customOrigin: {
      header: '自定义原点',
      desc: '通过使用一个简单的属性来可编程地控制过渡原点。'
    }
  }],
  createYourOwnHeader: '创建您自己的',
  createYourOwnText1: '您可以用Vuetify的过渡辅助器函数来创建您自己的自定义的过渡效果，这个函数会返回一个可以导入到Vue的对象。使用Vue的<a href="https://vuejs.org/v2/guide/render-function.html#Functional-Components" target="_blank" rel="noopener">函数式组件</a>配置将确保您的过渡效果尽可能高效。只需要导入函数：',
  createYourOwnText2: '其中`createSimpleTransition`函数接受1个参数，即名称。这将是您可以与您的样式挂钩的名称。这是一个展示`v-fade-transition`的示例：',
  toc: [
    {
      text: '动效',
      href: 'introduction'
    },
    {
      text: '示例',
      href: 'examples'
    },
    {
      text: '创建你自己的',
      href: 'create-your-own'
    }
  ]
}
