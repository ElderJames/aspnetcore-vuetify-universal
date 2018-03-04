export default {
  header: '底部导航',
  headerText: '`v-bottom-nav`组件是一个侧边栏的替代方案。它主要用于移动端，并有两个变种，图标+文本和转变。',
  components: ['v-bottom-nav'],
  examples: [{
    iconsAndText: {
      header: '图标和文本',
      desc: '虽然底部的导航意味着要使用`vue-router`，您也可以通过使用`active.sync`属性来以编程方式控制按钮的激活状态。您可以通过使用`value`标签来更改一个按钮的值。'
    },
    colorAndShift: {
      header: '色彩和转变',
      desc: '使用彩色背景时，建议使用`light`属性。`shift`属性将隐藏按钮文本直到被激活。请记住，`v-btn`文本必须包装在`<span>`标记中。'
    },
    toggle: {
      header: '开关',
      desc: '与其它Vuetify组件一样，您可以使用`v-model`来控制显示状态。'
    }
  }],
  props: {
    active: '保持当前激活按钮的值，如果该按钮没有提供任何值，则将使用其索引。此属性支持**.sync**修饰符。',
    absolute: 'Mixins.Positionable.props.absolute',
    fixed: 'Mixins.Positionable.props.fixed'
  }
}
