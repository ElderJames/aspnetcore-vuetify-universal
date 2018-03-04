export default {
  header: 'Grid list',
  headerText: 'Grid lists are an addon for the `v-container` component that add gutter control between items.',
  components: ['v-container', 'v-layout', 'v-flex', 'v-spacer'],
  examples: [{
    default: {
      header: 'Grid lists',
      desc: 'Grid lists augment the `v-container` component to allow for greater flexibility with gutters. It comes in 5 variants, from xs to xl and can be dynamically changed.'
    },
    subheader: {
      header: 'Grid lists',
      desc: 'Grid lists will work seamlessly with your current grid implementation and allow you to create amazing user interfaces.'
    }
  }],
  props: {
    tag: 'Mixins.Routable.props.tag'
  }
}
