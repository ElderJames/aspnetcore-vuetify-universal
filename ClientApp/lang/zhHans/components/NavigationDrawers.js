export default {
  header: '导航抽屉',
  headerText: '`v-navigation-drawer`组件是用户将用来浏览应用程序的内容，导航抽屉被预先配置为可以使用或不实用**vue-router**。',
  components: ['v-navigation-drawer'],
  examples: [{
    permanent: {
      header: '默认情况',
      desc: '导航抽屉主要用于容纳应用程序中的页面的链接。'
    },
    permanentClipped: {
      header: '彩色的抽屉',
      desc: '导航抽屉可以定制，以适应任何应用程序的设计。虽然让和组件都可以在抽屉中使用，但是您使用的主要组件是`v-list`、所有**列表**自组建和`v-divider`。'
    },
    permanentFloating: {
      header: '永久浮动抽屉',
      desc: '导航抽屉可以放置在卡片内并浮在内容背景上。'
    },
    persistent: {
      header: '头像',
      desc: '由于抽屉支持`v-list`组件，您可以轻松创建自定义的仪表板解决方案。'
    },
    mini: {
      header: '迷你',
      desc: '导航抽屉也有一个小型变体，可以使用`mini-variant.sync`来控制。'
    },
    temporary: {
      header: '临时的',
      desc: '临时抽屉位于其应用之上，并使用稀松布（叠加）来使背景变暗。这个抽屉的行为是模仿在移动设备时的持续抽屉。点击抽屉外部会导致关闭。'
    },
    dark: {
      header: '暗黑主题',
      desc: 'Vuetify也支持暗黑的应用程序主题，这不会覆盖具有默认主题的主键，因此在某些情况下，需要手动设置为暗黑主题。',
      uninverted: true
    }
  }],
  props: {
    absolute: 'Mixins.Positionable.props.absolute',
    clipped: '剪切的抽屉位于应用程序工具栏下方',
    disableResizeWatcher: '调整大小时将自动打开/关闭抽屉，具体取决于手机还是桌面',
    disableRouteWatcher: '当路由改变时禁止打开抽屉导航',
    fixed: 'Mixins.Positionable.props.fixed',
    floating: '浮动抽屉没有可见的容器（没有右边框）',
    hideOverlay: '隐藏叠加层的显示',
    miniVariantWidth: '指定`mini`属性开期时指定的宽度',
    miniVariant: '凝结导航抽屉宽度，也接受**.sync**修饰符。这样，抽屉在点击时会重新打开',
    permanent: '不管屏幕尺寸如何，抽屉都可以看到',
    right: '将抽屉放置在右侧',
    stateless: '删除所有自动状态功能（调整大小、移动、路由）并手动控制抽屉状态。',
    temporary: '临时抽屉位于其应用之上，并使用稀松布（叠加）来使背景变暗',
    touchless: '禁用移动触摸功能'
  }
}
