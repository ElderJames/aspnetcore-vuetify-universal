export default {
  header: '菜单',
  headerText: '`v-menu`组件展示一个菜单在用于激活它的元素的位置上。',
  components: ['v-menu'],
  examples: [{
    activator: {
      header: '激活器',
      desc: '请记住将激活菜单的元素放置在`activator`插槽中。',
      uninverted: true
    },
    absolute: {
      header: '绝对定位',
      desc: '菜单也可以使用`absolute`属性绝对定位在激活元素的顶部。尝试点击图片上的任何地方。',
      uninverted: true
    },
    absoluteWithoutActivator: {
      header: '没有激活时的绝对定位',
      desc: '菜单也可以通过`absolute`属性跟`position-x`和`position-y`属性一起使用。尝试右键点击图像上的仍和位置。',
      uninverted: true
    },
    hover: {
      header: '悬停',
      desc: '菜单可以使用悬停进行访问，而不是用`open-on-hover`属性进行点击。',
      uninverted: true
    },
    menus: {
      header: '菜单',
      desc: '菜单可以放在几乎任何组件中',
      uninverted: true
    },
    customTransition: {
      header: '自定义过渡',
      desc: 'Vuetify带有3个标准过渡，**scale**、**slide-x**和**slide-y**。您也可以创建自己的并将其作为过渡参数传递。有关如何构建内置过渡的示例，请访问[此处](https://github.com/vuetifyjs/vuetify/blob/master/src/util/helpers.js#L13)。',
      uninverted: true
    },
    popover: {
      header: '弹出菜单',
      desc: '可以将菜单配置为在打开时为静态，使其可以用作弹出窗口。当菜单内容有多个交互项时，这可能很有用。',
      uninverted: true
    }
  }],
  props: {
    closeOnClick: '指定菜应该在外部激活器被点击时关闭。',
    closeOnContentClick: '指定点击内容时菜单是否应该关闭。',
    disabled: '禁用菜单',
    offsetX: '在x轴上偏移菜单，与左/右方向一起工作',
    offsetY: '在y轴上偏移菜单，与上/下方向一起工作',
    openOnClick: '指定是否在激活器点击时打开菜单',
    openOnHover: '指定是否在激活器悬停时打开菜单',
    origin: 'Mixins.Transitionable.props.origin',
    transition: 'Mixins.Transitionable.props.transition'
  }
}
