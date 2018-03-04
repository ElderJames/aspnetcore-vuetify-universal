export default {
  header: 'Scrolling directive',
  headerText: 'The `v-scroll` directive allows you to provide callbacks when the window or a specifically defined element are scrolled.',
  components: ['v-scroll'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'The default behavior is to bind to the window. If no additional configuration options are needed, you can simple pass your callback function.',
      uninverted: true
    },
    options: {
      header: 'Scroll with options',
      desc: 'For a more fine tuned approach, you can designate the target to bind the scroll event listener.',
      uninverted: true
    }
  }],
  options: {
    'arg:target': '`v-scroll:#target="callback"` The target watched for scroll changes. Defaults to window but can be changed to any valid id selector.',
    'value': '`v-scroll="callback"` The function to invoke on target scroll'
  }
}
