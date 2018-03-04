export default {
  header: '底部表单',
  headerText: '底部表单是一个修改后的`v-dialog`，可以从屏幕底部滑动，类似于一个`v-bottom-nav`。底部导航组件用于按钮和特定应用程序级别操作，而底部表单可以包含任何内容。',
  components: ['v-bottom-sheet'],
  examples: [{
    standard: {
      header: '标准显示',
      desc: '这里我们显示一个可能出现在应用程序中的操作例子列表。'
    },
    inset: {
      header: '嵌入底部表单',
      desc: '底部表单可以被嵌入，将桌面上的最大宽度减少到70%，这可以进一步减少手动使用`width`属性，我们还可以使用Vuetify断点对象展示动态类绑定。'
    }
  }],
  props: {
    disabled: '禁用打开对话框的功能',
    inset: '将对话框内容最大宽度减少到70％',
    lazy: 'Mixins.Bootable.props.lazy',
    maxWidth: '指定表容器的最大宽度'
  }
}
