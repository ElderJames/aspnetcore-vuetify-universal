export default {
  header: '卡片',
  headerText: '`v-card`组件是一个多功能组件，可用于从面板到静态图像的任何事物。**card**组件有许多班助组件，使标记尽可能简单。没有列出选项的组件使用**Vue的**功能组件选项来加快渲染速度，并作为标记糖来使构建更容易。',
  components: [
    'v-card',
    'v-card-media',
    'v-card-title',
    'v-card-actions'
  ],
  examples: [{
    components: {
      header: '组件',
      desc: '一个卡片有四个基本组件，`v-card-media`、`v-card-title`、`v-card-text`和`v-card-actions`。'
    },
    mediaWithText: {
      header: '媒体与文字',
      desc: '使用布局系统，我们可以在背景中的任何地方添加自定义文本。'
    },
    horizontal: {
      header: '水平的卡片',
      desc: '使用`v-flex`，您可以创建自定义的水平卡片。使用`contain`属性来缩小`v-card-media`以适应容器内部，而不是覆盖。'
    },
    grids: {
      header: '栅格',
      desc: '使用栅格列表，您可以创建漂亮的布局。'
    },
    customActions: {
      header: '自定义操作',
      desc: '使用简单的条件，您可以轻松添加隐藏的补充文本，直到被打开。'
    }
  }],
  props: {
    contain: '修改包含的背景大小来',
    flat: '移除卡片的盒子阴影',
    height: '手动定义卡片的高度',
    hover: '在悬停上应用跟高的海拔',
    img: '指定一个图像背景',
    primaryTitle: '应用主标题特定的填充',
    raised: '指定更高的默认海拔',
    src: '被左为背景显示的图片',
    tile: '通过去除边界弧度将卡片卡如贴片。'
  }
}
