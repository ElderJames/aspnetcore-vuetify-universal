export default {
  header: '提示框',
  headerText: '`v-alert`组件被用来向用户传达重要信息，它有4个变种，**成功（success）**，**信息（info）**，**警告（warning）**和**错误（error）**。它们被分配了可以修改的表示不同操作的默认图标',
  components: ['v-alert'],
  examples: [{
    contextual: {
      header: '上下文'
    },
    closable: {
      header: '可关闭',
      desc: '使用`v-model`可以控制提示框的状态。如果您不想分配一个v-model，只显示警报，也可以简单地分配属性值。'
    },
    icon: {
      header: '自定义图标 / 无图标',
      desc: '您可以轻松分配一个自定义图标或把他们全部伤处。'
    },
    transition: {
      header: '过渡显示',
      desc: '您可以把自定义过渡应用于提示框的显示/隐藏'
    },
    outline: {
      header: '轮廓',
      desc: '轮廓提示框从当前应用的颜色继承他们的边界。'
    }
  }],
  props: {
    dismissible: '指定提示框可以关闭',
    icon: '制定一个特定的图标',
    outline: '提示框将有一个轮廓',
    type: '指定**成功（success）**，**信息（info）**，**警告（warning*）*或者**错误（error）**提示框，使用上下文颜色和预定义的图标。'
  }
}
