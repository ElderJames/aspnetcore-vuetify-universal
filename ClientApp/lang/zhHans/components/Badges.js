export default {
  header: '徽章',
  headerText: '`v-badge`组件可以包装任何类型的内容以突出显示用户的信息，或只提醒注意特定的元素。',
  components: ['v-badge'],
  examples: [{
    character: {
      header: '字符',
      desc: '任何元素都可以与徽章一起使用。'
    },
    overlap: {
      header: '重叠',
      desc: '当使用`overlap`属性时，徽章将重叠它的内容'
    },
    inline: {
      header: '内联',
      desc: '徽章也可以内联地放在文本内。'
    },
    icon: {
      header: '图标',
      desc: '徽章可以使用所有当前支持的图标集。'
    },
    visibility: {
      header: '可见性',
      desc: '徽章的可见性可以用`v-model`来控制。'
    }
  }],
  props: {
    bottom: 'Mixins.Positionable.props.bottom',
    left: 'Mixins.Positionable.props.left',
    transition: 'Mixins.Transitionable.props.transition'
  }
}
