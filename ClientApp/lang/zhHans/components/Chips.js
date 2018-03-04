export default {
  header: '厚切薯条🍟',
  headerText: '`v-chip`组件用于传递小块信息。使用`close`属性，厚切薯条变得互动，允许用户交互。',
  components: ['v-chip'],
  examples: [{
    default: {
      header: '默认情况',
      desc: '厚切薯条有4个主要的变种，Regular, 带图标、带头像和可关闭。',
      uninverted: true
    },
    colored: {
      header: '色彩',
      desc: ' Material Design调色板中的任何色彩均可用于更改厚切薯条的颜色。'
    },
    icon: {
      header: '图标',
      desc: '厚切薯条可以使用Material图标字体库中的文本或任何图标。'
    },
    outline: {
      header: '轮廓',
      desc: '轮廓厚切薯条从当前的文字颜色继承它们的边框颜色。'
    },
    label: {
      header: '标签',
      desc: '标签厚切薯条使用`v-card`的边框半径'
    },
    closable: {
      header: '可关闭',
      desc: '可关闭厚切薯条可以用一个v-model来控制。如果您想知道厚切薯条何时关闭，请监听`input`事件。',
      uninverted: true
    },
    inSelects: {
      header: '选中',
      desc: '选择框可以用厚切薯条来显示选定的数据。',
      uninverted: true
    }
  }],
  props: {
    close: '添加删除按钮',
    disabled: '禁用厚切薯条，使其不可选择',
    label: '移除圆形边缘',
    outline: '删除背景并应用边框和文本颜色',
    selected: '将选择框颜色应用于厚切薯条，主要用于在`v-select`中显示高亮上下文',
    small: '减少后期薯条的尺寸'
  }
}
