export default {
  header: '视差',
  headerText: '`v-parallax`组件创建一个3d效果使图像显示俾窗口滚动更慢。',
  components: ['v-parallax'],
  examples: [{
    default: {
      header: '默认',
      desc: '当用户滚动页面时，视差引起背景图像的滚动。'
    },
    content: {
      header: '内容伴随',
      desc: '你也可以在视差中放置任何内容，这使您可以使用视差作为英雄图像。'
    },
    customHeight: {
      header: '自定义高度',
      desc: '你可以在视差上指定自定义高度。请记住，如果您的图像尺寸不合适，这可能会打破视差。'
    },
    jumbotron: {
      header: '超大屏幕（jumbotron）',
      desc: '视差可以使其作用被禁用作为标准**超大屏幕**'
    }
  }]
}
