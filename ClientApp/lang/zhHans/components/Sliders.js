export default {
  header: '滑块',
  headerText: '`v-slider`组件是数字输入的更好的可视化，它用于收集数字用户数据。',
  components: ['v-slider'],
  examples: [{
    continuous: {
      header: '连续的',
      desc: '当精度不是问题时，应使用连续的滑块。'
    },
    discrete: {
      header: '离散的',
      desc: '离散滑块提供了一个拇指标签（倒水滴状），显示当前的确切数量。使用`step`属性可以禁止在步骤之外选择值。'
    },
    icons: {
      header: '图标',
      desc: '您可以使用`append-icon`和`prepend-icon`属性将图标添加到滑块。'
    },
    editableNumericValue: {
      header: '带有可编辑的数值',
      desc: '滑块可以与其他组件相结合，以获得更好的显示效果。'
    },
    dark: {
      header: '暗黑主题',
      desc: '滑块也支持主题。',
      uninverted: true
    },
    customColors: {
      header: '自定义色彩',
      desc: '您可以使用`color`、`track-color`和`thumb-color`属性来设置滑块的颜色。'
    }
  }],
  props: {
    step: '如果大于0，则为滑块上的点设置步骤间隔',
    thumbColor: '设置拇指和拇指标签颜色',
    thumbLabel: '显示拇指标签',
    ticks: '',
    trackColor: '设置曲目填充色彩'
  }
}
