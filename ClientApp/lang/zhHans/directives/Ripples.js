export default {
  header: '波纹指令',
  headerText: '`v-ripple`指令被用于显示用户的操作。它可以应用于任何块级元素。许多组件都带有内置的博文指令，比如`v-btn`、`v-tabs-item`等等。',
  components: ['v-ripple'],
  examples: [{
    buttons: {
      header: 'Default',
      desc: '按钮默认启用了波纹，但是也可以通过设置属性`:ripple="false`来移除。',
      uninverted: true
    },
    customColor: {
      header: '自定义色彩',
      desc: '您可以使用辅助器类改变波纹的颜色。',
      uninverted: true
    },
    tabs: {
      header: '选项卡',
      desc: '选项卡默认禁用了波纹，您可以通过设置属性**ripple**来启用它。',
      uninverted: true
    },
    navigationDrawers: {
      header: '导航抽屉',
      desc: '列表项默认禁用了波纹，您可以通过设置属性**ripple**来启用它。',
      uninverted: true
    },
    toolbars: {
      header: '工具栏',
      desc: '工具栏子项默认禁用了波纹，您可以通过设置属性**ripple**来启用它。',
      uninverted: true
    },
    expansionPanels: {
      header: '扩展面板',
      desc: '扩展面板默认禁用了波纹. 您可以通过设置属性**ripple**来启用它。',
      uninverted: true
    },
    htmlElement: {
      header: '标准HTML元素',
      desc: '如果想为标准的HTML元素添加波纹效果，可以通过HTML属性`v-ripple`来启用。',
      uninverted: true
    }
  }],
  props: [{
    'v-ripple': [
      {
        name: 'class',
        type: 'String',
        default: 'undefined',
        desc: '将自定义类应用于波纹，用来修改颜色'
      },
      {
        name: 'center',
        type: 'Boolean',
        default: 'False',
        desc: '强制波纹起源与目标的中心'
      }
    ]
  }]
}
