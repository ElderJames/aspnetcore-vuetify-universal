export default {
  header: '进度条',
  headerText: '`v-progress-circular`和`v-progress-linear`组件用于将数据直观地传达给用户。他们也可以代表一个不确定的数量，如加载或处理。这些组件包含一个位于组件容器中心的插槽。',
  components: ['v-progress-circular', 'v-progress-linear'],
  examples: [{
    circularDefault: {
      header: '默认圆环',
      desc: '默认情况下，进度圆环使用应用程序辅助色彩。'
    },
    circularColored: {
      header: '圆环色彩',
      desc: '可以使用其他颜色。'
    },
    circularIndeterminate: {
      header: '不定圆环',
      desc: '一个不确定的进度圆环永远循环动画。'
    },
    circularSizeAndWidth: {
      header: '圆环大小和宽度',
      desc: '进度圆环组件可以改变宽度和大小。'
    },
    circularRotate: {
      header: '圆环环绕',
      desc: '进度圆环原生可以环绕。'
    },
    linearDeterminate: {
      header: '定值线条',
      desc: '进度线条组件可以有一个由v-model修改的确定性状态。'
    },
    linearIndeterminate: {
      header: '不定线条',
      desc: '正如进度圆环组件一样，进度线条有一个不确定的状态。'
    },
    linearBuffer: {
      header: '缓冲',
      desc: '缓冲区状态同事表示两个值，主值由模型控制，而缓冲区由`buffer-value`属性控制。'
    },
    linearQueryIndeterminateAndDeterminate: {
      header: '查询不确定和确定',
      desc: 'To query state is controlled by the truthiness of indeterminate with the query prop set to true.'
    },
    linearCustomHeightAndContextualColors: {
      header: '自定义高度和上下文色彩',
      desc: '自定义高度或上下文颜色可以应用于进度条。边栏的原色是您的应用程序的主要颜色。'
    },
    linearCustomColors: {
      header: '自定义色彩',
      desc: '您还可以使用属性`color`和`background-color`设置颜色。'
    }
  }]
}
