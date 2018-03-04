export default {
  header: 'Avatar',
  headerText: 'The `v-avatar` component is used to control the size and border radius of responsive images, typically used to show profile pictures.',
  components: ['v-avatar'],
  examples: [{
    standard: {
      header: 'Standard display',
      desc: 'The avatar has a dynamic size that can be scaled for any situation. A **tile** variation is available for displaying an avatar without border radius.'
    },
    advanced: {
      header: 'Advanced usage',
      desc: 'Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.'
    },
    iconAndText: {
      header: 'Icon and text',
      desc: 'An avatar also accepts the `v-icon` component or text. Mix and match functionality to create something unique.'
    }
  }]
}
