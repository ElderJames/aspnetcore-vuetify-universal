export default {
  header: '选择控件',
  headerText: '选择控制组件允许用户使用选择项，这些组件必须和 `v-model` 属性一起使用，因为他们无法保持自己的状态。',
  components: ['v-radio-group', 'v-radio', 'v-checkbox', 'v-switch'],
  examples: [{
    example: {
      header: '默认示例',
      desc: ''
    },
    checkboxesBoolean: {
      header: '复选框 - 布尔值',
      desc: ''
    },
    checkboxesArray: {
      header: '复选框 - 数组',
      desc: ''
    },
    checkboxesStates: {
      header: '复选框 - 状态',
      desc: ''
    },
    checkboxesColors: {
      header: '复选框 - 色彩',
      desc: '复选框可以设置颜色通过使用 `color` 属性，颜色可以是任何内置的颜色或者其上下文名称。'
    },
    checkboxesInlineTexfield: {
      header: '复选框 - 和文本框内联',
      desc: ''
    },
    radiosDefault: {
      header: '单选框 - 默认',
      desc: 'Radio-groups are by default mandatory. This can be changed with the `mandatory` prop.'
    },
    radiosDirection: {
      header: '单选框 - 方向',
      desc: '单选框组可以作为一行或者一列的形式，通过使用 column 或者 row 属性设置，默认是使用列的方式。'
    },
    radiosColors: {
      header: '单选框 - 颜色',
      desc: '单选框也是可以通过 `color` 属性使用内置的颜色来设置色彩。'
    },
    switchesBoolean: {
      header: '开关 - 布尔值',
      desc: ''
    },
    switchesArray: {
      header: '开关 - 数组',
      desc: ''
    },
    switchesStates: {
      header: '开关 - 状态',
      desc: ''
    },
    switchesColors: {
      header: '开关 - 颜色',
      desc: '开关也可以通过 `color` 属性使用内置的颜色来设置色彩。'
    }
  }],
  props: {
    column: '单选框列显示',
    disabled: 'Mixins.Input.props.disabled',
    label: 'Mixins.Input.props.label',
    mandatory: '强制选择复选框组的一个子复选框 `v-radio` ',
    name: '设置组件的 name 属性',
    row: '单选框行显示',
    indeterminate: '为复选框设置不确定状态',
    inputValue: '**v-model** 的绑定值',
    value: '设置选择控件组件的值'
  }
}
