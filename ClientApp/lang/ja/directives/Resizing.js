export default {
  header: 'Resize directive',
  headerText: 'The `v-resize` directive can be used for calling specific functions when the window resizes.',
  components: ['v-resize'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'Resize your window and observe the values change..',
      uninverted: true
    }
  }],
  options: {
    'modifiers.quiet': '`v-resize.quiet="callback"` Will **not** automatically invoke the provided callback on bind.'
  }
}
