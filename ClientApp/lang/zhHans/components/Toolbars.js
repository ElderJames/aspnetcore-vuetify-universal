export default {
  header: '工具栏',
  headerText: '`v-toolbar`组件对于任何GUI都很重要，因为它通常是网站导航的主要来源。工具栏组件可以与导航抽屉一起很好地工作，用于隐藏链接并呈现激活器以在移动设备上打开侧边栏。',
  components: [
    'v-toolbar',
    'v-toolbar-title',
    'v-toolbar-items',
    'v-toolbar-side-icon',
    'v-system-bar'
  ],
  examples: [{
    default: {
      header: '默认情况',
      desc: '工具栏是一个灵活的容器，可以通过多种方式使用。默认情况下，桌面上的工具栏高为64px，移动人像的高为56px，移动风景的高为48px，这些可以用`dense`和`prominent`属性来重写。'
    },
    appBar: {
      header: '应用程序栏',
      desc: '应用程序栏是应用程序主要的主要工具栏，它可以包含图标、菜单等等。'
    },
    appBarExtension: {
      header: '带扩展的应用程序栏',
      desc: '扩展可以用来创建更突出的栏，如果标题放置在扩展内，它将自动移到右侧，与主栏中的正常位置相匹配。'
    },
    columnWidthWithHierarchy: {
      header: '具有层次结构的列宽',
      desc: '工具栏有两个变种，明亮和暗黑。明亮工具栏有深色的按钮和黑暗的文字，而暗黑工具栏有白色的按钮和白色的文字。'
    },
    flexibleAndCard: {
      header: '灵活的工具栏和卡片工具栏',
      desc: '通过一些自定义样式，您可以轻松创建令人惊叹的用户界面。'
    },
    floatingWithSearch: {
      header: '搜索时浮动',
      desc: '可以将浮动工具栏放置在其引用的内容上。'
    },
    variations: {
      header: '变体',
      desc: '一个应用程序栏有多个可以应用主题和辅助类的变种，范围从明亮和暗黑的主题、色彩和透明度。',
      uninverted: true
    },
    prominent: {
      header: '突出的工具栏',
      desc: '突出的工具栏添加了一个插槽，你可以在扩展区域放置元素，内容和扩展区域将被锁定到64x的高度。'
    },
    dense: {
      header: '密集的工具栏',
      desc: '密集工具栏降低其高度未48px,这也是移动设备横向定位的默认行为。'
    },
    denseProminent: {
      header: '密集突出的工具栏',
      desc: '您可以结合突出和密集来扩展工具栏的较小变体。'
    },
    scrolling: {
      header: '滚动屏幕',
      desc: '滚动时，工具栏可以过渡到屏幕之外，这里我们演示如何指定滚动目标（默认是窗口）。请记住，在这个例子中，有一些特殊的标记在您的应用程序中不需要。'
    },
    appBarMenu: {
      header: '应用程序栏与菜单',
      desc: '您可以将菜单组件添加到工具栏。'
    },
    systemBarsStatusWindow: {
      header: '系统栏——状态/窗口',
      desc: '系统栏对于移动设备和桌面上的通知图标很有用，对于现场示例，请前往预定义的布局。'
    }
  }],
  props: {
    card: '在`v-card`中使用时继承边框半径',
    clippedLeft: '指定`v-navigation-drawer`应用程序在工具栏的左侧被剪切',
    clippedRight: '指定`v-navigation-drawer`应用程序在工具栏的右侧被剪切',
    dense: '减小工具栏内容和扩展的高度',
    extended: '强制工具栏生成扩展名而不使用插槽',
    flat: '移除工具栏的盒子阴影',
    floating: '使工具栏内联浮动',
    height: '为工具栏指定一个特定的高度',
    lightsOut: '降低系统栏不透明度',
    manualScroll: '手动应用**滚动屏幕**功能',
    prominent: '增加工具栏内容和扩展的高度',
    scrollOffScreen: '当向下滚动时工具栏会过渡到屏幕外。',
    scrollTarget: '为滚动屏幕指定滚动目标',
    scrollThreshold: '工具栏使用滚动屏幕之前滚动的距离',
    status: '降低系统栏高度',
    window: '增加系统栏高度'
  }
}
