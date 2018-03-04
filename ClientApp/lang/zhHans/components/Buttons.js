export default {
  header: '按钮',
  headerText: '`v-btn`组件用一个material design主题和多个选项来替换标准的html按钮。任何色彩辅助类都可以用来改变背景或文字的颜色。',
  components: ['v-btn'],
  examples: [{
    usage: {
      header: '用例',
      desc: ''
    },
    flat: {
      header: '扁平',
      desc: '扁平按钮没有巷子箱子阴影，也没有背景。只有鼠标悬浮时才显示按钮的容器。'
    },
    raised: {
      header: '凸起',
      desc: '凸起的按钮有一个会在在点击时加重的框阴影，这是默认的样式。'
    },
    depressed: {
      header: '凹陷',
      desc: '凹陷的按钮依然保持其背景色，但没有框阴影。'
    },
    dropdown: {
      header: '按钮下拉菜单',
      desc: '按钮下拉菜单是带有额外的样式的常规选择框。',
      uninverted: true
    },
    toggle: {
      header: '按钮切换',
      desc: '根据所选的属性，切换按钮本质上是样式化的单选框或复选框。此组件与`v-toolbar`组件兼容。'
    },
    icon: {
      header: '图标',
      desc: '图标可作为按钮的主要内容。'
    },
    floating: {
      header: '浮动',
      desc: '浮动按钮是圆形的，通常包含一个图标。'
    },
    loaders: {
      header: '加载器',
      desc: '使用加载（loading）属性，你可以通知用户有正在进行的处理。默认行为是使用一个`v-progress-circular`组件，但可以对齐进行自定义。 '
    },
    sizing: {
      header: '大小',
      desc: '按钮可以被设置不同的尺寸选项以适应多种方案。'
    },
    outline: {
      header: '轮廓',
      desc: '轮廓按钮从当前色彩应用继承他们的边框颜色。'
    },
    round: {
      header: '圆角',
      desc: '圆角按钮的行为与常规按钮相同，但具有圆角边缘。'
    },
    block: {
      header: '块状',
      desc: '块状按钮可以扩展全部可用宽度'
    }
  }],
  props: {
    'v-btn': {
      block: '将按钮的扩展到可用空间的100%',
      depressed: '移除按钮的框阴影',
      fab: '使按钮变圆',
      flat: '移除按钮的背景色',
      icon: '将按钮指定为图标——原型和平面',
      inputValue: '控制按钮的激活状态',
      large: '大型按钮',
      loading: '添加一个加载中的图标动画',
      outline: '按钮将拥有一个轮廓',
      round: '按钮两边会边圆',
      small: '小型按钮',
      type: '设置按钮的类型标签'
    }
  }
}
