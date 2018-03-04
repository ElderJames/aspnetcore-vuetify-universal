export default {
  header: '副标题',
  headerText: '`v-subheader`组件由于分隔列表的各部分。',
  components: ['v-subheader'],
  examples: [{
    list: {
      header: '列表副标题',
      desc: '副标题用于描述以下信息的列表时很好用。'
    },
    grid: {
      header: '栅格副标题',
      desc: '一个副标题可以添加上下文到用户正在看的东西。'
    },
    menu: {
      header: '菜单副标题',
      desc: '使用副标题可以帮助分离不同类型的操作。'
    }
  }],
  props: {
    inset: '添加标识（72px）'
  }
}
