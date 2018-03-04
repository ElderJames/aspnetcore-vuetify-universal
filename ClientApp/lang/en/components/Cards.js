export default {
  header: 'Card',
  headerText: 'The `v-card` component is a versatile component that can be used for anything from a panel to a static image. The **card** component has numerous helper components to make markup as easy as possible. Components that have no listed options use **Vue\'s** functional component option for faster rendering and serve as markup sugar to make building easier.',
  components: [
    'v-card',
    'v-card-media',
    'v-card-title',
    'v-card-actions'
  ],
  examples: [{
    components: {
      header: 'Components',
      desc: 'A card has 4 basic components, `v-card-media`, `v-card-title`, `v-card-text` and `v-card-actions`.'
    },
    mediaWithText: {
      header: 'Media with text',
      desc: 'Using the layout system, we can add custom text anywhere within the background.'
    },
    horizontal: {
      header: 'Horizontal cards',
      desc: 'Using `v-flex`, you can create customized horizontal cards. Use the `contain` property to shrink the `v-card-media` to fit inside the container, instead of covering.'
    },
    grids: {
      header: 'Grids',
      desc: 'Using grid lists, you can create beautiful layouts.'
    },
    customActions: {
      header: 'Custom actions',
      desc: 'With a simple conditional, you can easily add supplementary text that is hidden until opened.'
    }
  }],
  props: {
    contain: 'Change the background-size to contain.',
    flat: 'Removes card box shadow',
    height: 'Manually define the height of the card',
    hover: 'Apply a higher elevation on hover',
    img: 'Specifies an image background',
    primaryTitle: 'Applies primary title specific padding.',
    raised: 'Specifies a higher default elevation',
    src: 'The image to display as a background.',
    tile: 'Turn the card into a tile by removing the border radius'
  }
}
