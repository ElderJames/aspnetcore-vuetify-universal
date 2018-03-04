export default {
  props: {
    customFilter: '自定义搜索过滤器',
    customSort: '自定义排序过滤器',
    disableInitialSort: '在初始渲染时禁用默认排序',
    expand: '将表格指定为包含可展开的行',
    filter: '用于过滤条目的功能',
    hideActions: '隐藏表格操作',
    itemKey: '条目对象中指定唯一键的字段',
    items: '表格每行的数组（将item翻译为条目）',
    mustSort: '强制至少一列总是被排序的，而不是在`升序（sorted ascending）`/`降序（sorted descending）`/`不排序（unsorted）`的状态之间切换',
    noResultsText: '没有筛选结果时显示的文本',
    pagination: '用于控制数据表外部的分页和排序，也可以用来设置默认的排序列。',
    rowsPerPageItems: '设置“每页行数”的下拉框的默认值',
    rowsPerPageText: '设置“每页行数”的下拉框的默认文本',
    search: '用于筛选结果的搜索模型',
    selectAll: '添加标题行选择所有复选框，可以是指定将那种颜色应用于按钮的字符串，也可以是布尔值（使用默认颜色）。',
    totalItems: '手动设置项目的总数，就可以禁用内置排序和分页，与分页属性一起使用，以启用服务端排序和分页。',
    value: '已选的行'
  },
  slots: {
    footer: '指定一个额外页脚的插槽'
  },
  scopedSlots: {
    items: '指定如何渲染条目的插槽'
  }
}
