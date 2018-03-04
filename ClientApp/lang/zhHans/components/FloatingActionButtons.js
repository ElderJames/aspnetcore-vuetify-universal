export default {
  header: '按钮: 悬浮响应按钮',
  headerText: '`v-btn`组件可以用作悬浮响应按钮；它可以为应用提供最主要的操作。通过与`v-speed-dial` 组件的组合使用, 你可以为你的用户创建一系列的功能集。',
  components: ['v-speed-dial', 'v-btn'],
  examples: [{
    promotedAction: {
      header: '突显操作',
      desc: '悬浮响应按钮可以附着于材料之上，用于突显你应用中的重要操作，在大多数实例中通常使用其默认大小，而小型按钮一般用于保持其与相似大小元素之间的连续性。'
    },
    small: {
      header: '小型按钮',
      desc: '为了达到更好的视觉效果，我们可以使用小型按钮以适配列表的头像。'
    },
    displayAnimation: {
      header: '显示时的动画',
      desc: '首次显示时，悬浮响应按钮应当使用一个动画效果加载到屏幕上，这里我们使用`v-fab-transition`和v-show来演示动画效果，你也可以使用任何Vuetify内置的效果或者你自定义的。'
    },
    lateralScreens: {
      header: '横向屏幕切换',
      desc: '当你的按钮需要改变默认的操作时，这里推荐使用一个过渡效果来彰显它的变化（如下进行标签页切换时，给悬浮响应按钮一个过渡动画）。我们是通过绑定`key`属性到数据块来正确地发送响应变化信号至Vue过渡系统。当你使用自定义过渡效果时，请确保已经设置`mode`属性为**out-in**。'
    },
    speedDial: {
      header: '悬浮响应按钮用于v-Speed-dial组件',
      desc: '`v-speed-dial`组件为悬浮响应按钮提供了强大的api，你可以尽情定制你想要的效果。'
    }
  }],
  props: {
    'v-btn': {
      block: '将按钮展开到可用空间的100%',
      depressed: '移除按钮的阴影效果',
      fab: '使用圆形按钮',
      flat: '移除按钮的背景色（即扁平按钮）',
      icon: '指定按钮为图标 - 通常用于圆形浮动按钮以及扁平按钮',
      inputValue: '控制按钮的激活状态',
      large: '使用大型按钮',
      loading: '添加一个加载中的图标动画',
      outline: '按钮将会有一个外边框',
      round: '设置按钮圆角',
      small: '使用小型按钮',
      type: '设置按钮的 type 属性'
    },
    'v-speed-dial': {
      direction: 'Speed-dial显示的方向. 可设置的值有 `top`, `bottom`, `left`, `right`.',
      openOnHover: '悬浮时开启Speed-dial'
    }
  }
}
