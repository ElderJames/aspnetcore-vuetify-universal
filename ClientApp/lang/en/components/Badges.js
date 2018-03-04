export default {
  header: 'Badge',
  headerText: 'The `v-badge` component can wrap any type of content to highlight information to a user or to just draw attention to a specific element.',
  components: ['v-badge'],
  examples: [{
    character: {
      header: 'Character',
      desc: 'Any element can be used with a badge.'
    },
    overlap: {
      header: 'Overlap',
      desc: 'The badge will overlap its content when using the `overlap` prop'
    },
    inline: {
      header: 'Inline',
      desc: 'Badges can also be placed inline with text.'
    },
    icon: {
      header: 'Icon',
      desc: 'The badge can use all of the currently supported icon sets.'
    },
    visibility: {
      header: 'Visibility',
      desc: 'The visibility of badges can be controlled using `v-model`.'
    }
  }],
  props: {
    bottom: 'Mixins.Positionable.props.bottom',
    left: 'Mixins.Positionable.props.left',
    transition: 'Mixins.Transitionable.props.transition'
  }
}
