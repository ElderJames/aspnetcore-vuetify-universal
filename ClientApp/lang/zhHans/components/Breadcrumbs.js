export default {
  header: '面包屑',
  headerText: '`v-breadcrumbs`组件是一个页面导航辅助器。它可以接受一个**Material Icons**图标或字符作为分隔符。一个包含字段_href_，_text_和_disabled_的对象数组可以被传递给组件的**items**属性。此外，还有一个常规插槽用于更多地控制面包屑，可以使用`v-breadcrumbs-item`或者其它自定义标记。',
  components: ['v-breadcrumbs', 'v-breadcrumbs-items'],
  examples: [{
    textDividers: {
      header: '文本分隔符',
      desc: '默认情况下，面包屑使用文本分隔符。这可以是任何字符串。'
    },
    iconDividers: {
      header: '图标分隔符',
      desc: '对于图标变体，面包屑可以使 aterial Design Icons中的任何图标。'
    }
  }],
  props: {
    divider: '指定分隔符',
    icons: '指定图标分隔符',
    justifyCenter: '对齐面包屑中心',
    justifyEnd: '尾部对齐面包屑',
    large: '增加面包屑项目文本的字体大小。'
  }
}
