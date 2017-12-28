export default {
  header: 'Bottom nav',
  headerText: 'The `v-bottom-nav` is an alternative to the sidebar. It is primarily used on mobile and comes in two variants, icons and text, and shift.',
  components: ['v-bottom-nav'],
  examples: [{
    iconsAndText: {
      header: 'Icons and text',
      desc: 'While the bottom nav is meant to be used with the `vue-router`, you can also programmatically control the active state of the buttons by using the `active.sync` prop. You can change a button\'s value by using its `value` attribute.'
    },
    colorAndShift: {
      header: 'Color & shift',
      desc: 'When using a colored background, it is recommended to use the `light` prop. The `shift` prop will hide the button text until active. Keep in mind, `v-btn` text is required to be wrapped in a `<span>` tag.'
    },
    toggle: {
      header: 'Toggle',
      desc: 'As with other Vuetify components, you can control the display state with `v-model`.'
    }
  }],
  props: {
    active: 'Holds the value of the currently active button. If the button has no value supplied, its index will be used instead. This prop supports the **.sync** modifier.'
  }
}
