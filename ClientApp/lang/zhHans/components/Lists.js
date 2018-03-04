export default {
  header: '列表',
  headerText: '`v-list` 组件用于显示信息，它可以包含一个头像、内容、操作、列表组标题等等。列表也可以包含子元素并在侧边栏（sidebar）使用。',
  components: [
    'v-list',
    'v-list-tile',
    'v-list-tile-title',
    'v-list-tile-sub-title',
    'v-list-tile-content',
    'v-list-tile-action',
    'v-list-tile-avatar',
    'v-list-tile-group',
    'v-list-tile-action-text'
  ],
  examples: [{
    avatarTwoLines: {
      header: '头像和两行内容的组合',
      desc: '列表可以包含一个items数组。如果给定一个数组，列表组件将依据给出的内容找到相关的类，你也可以在items数组定义列表组标题（headers）或分隔线（divider）。'
    },
    avatarTitleAndAction: {
      header: '头像和列表项标题以及操作的组合',
      desc: '列表组件还提供了用于更明确做法的插槽，如果你选择这种方法，切记必须提供附加属性来确保正确的间距。在这个例子中，有一个带有头像的图块，所以我们必须提供 `avatar` 属性。'
    },
    iconTwoLinesAndAction: {
      header: '图标加两行内容以及操作的组合',
      desc: '列表组件可以包含列表组标题，分割线，以及1行或者更多行，如果副标题文本溢出则会以省略号的形式截断文本'
    },
    avatarThreeLines: {
      header: '头像和三行的组合',
      desc: '对于3行的列表，列表项副标题内容占两行的时候如果超出范围则以省略号形式截断文字，如果你需要超过3行，建议使用 <router-link to="/components/cards">card</router-link>组件。'
    },
    avatarSubheaderTitleAndAction: {
      header: '头像和标题以及操作的组合',
      desc: '当使用一个 lists 插槽时，你必须手动定义它是否包含列表组标题（headers）或者列表项是否包含 avatar，这样做是为了确保正确的间距。'
    },
    subheadingsAndDividers: {
      header: '列表组标题和分割线',
      desc: 'Lists 组件可以包含多个列表组标题和分割线。'
    },
    cardList: {
      header: '图像卡片和工具栏以及列表的组合',
      desc: '一个列表可以和卡片组合。'
    },
    titleSubtitleActionsAndActionText: {
      header: '列表项的标题和子标题, 操作与操作文本说明',
      desc: '列表组件可以包含一个操作栈。波纹效果和路由属性也可以应用到 v-list 甚至 v-list-tile中，或者作为列表项数组的一个属性。'
    },
    actionTitleAndSubtitle: {
      header: '操作和标题以及副标题的组合',
      desc: '一个列表项最多包含3行。'
    },
    expansionLists: {
      header: '可展开的列表',
      desc: '一个列表项可以包含一组在点击时展开的项，可展开的列表也可以在 `navigation drawer` 组件中使用。'
    }
  }],
  props: {
    avatar: '用来设置单行列表项的最小高度（即使用该属性后将有一个头像大小的最小高度）',
    dense: '减小列表块的最大宽度',
    expand: '将只有在明确关闭后才会折叠起来',
    subheader: '会移除上边距（top padding），当前面只有一个列表组标题的时候使用',
    threeLine: '增加列表块的高度到3行',
    twoLine: '增加列表块的高度到2行',
    inactive: '如果设置了该属性，即使有to/href或者@click，列表块也不会响应链接。'
  }
}
