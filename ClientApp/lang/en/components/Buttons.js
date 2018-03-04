export default {
  header: 'Button',
  headerText: 'The `v-btn` component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.',
  components: ['v-btn'],
  examples: [{
    usage: {
      header: 'Usage',
      desc: ''
    },
    flat: {
      header: 'Flat',
      desc: 'Flat buttons have no box shadow and no background. Only on hover is the container for the button shown.'
    },
    raised: {
      header: 'Raised',
      desc: 'Raised buttons have a box shadow that increases when clicked. This is the default style.'
    },
    depressed: {
      header: 'Depressed',
      desc: 'Depressed buttons still maintain their background color, but have no box shadow.'
    },
    dropdown: {
      header: 'Button Dropdown Variants',
      desc: 'Button dropdowns are regular selects with additional styling.',
      uninverted: true
    },
    toggle: {
      header: 'Button Toggle',
      desc: 'Toggle buttons are essentially styled radio or checkboxes, depending on the properties selected. This component is compatible with the `v-toolbar` component.'
    },
    icon: {
      header: 'Icon',
      desc: 'Icons can be used for the primary content of a button.'
    },
    floating: {
      header: 'Floating',
      desc: 'Floating buttons are round and usually contain an icon.'
    },
    loaders: {
      header: 'Loaders',
      desc: 'Using the loading prop, you can notify a user that there is processing taking place. The default behavior is to use a `v-progress-circular` component but this can be customized.'
    },
    sizing: {
      header: 'Sizing',
      desc: 'Buttons can be given different sizing options to fit a multitude of scenarios.'
    },
    outline: {
      header: 'Outline',
      desc: 'Outline buttons inherit their borders from the current color applied.'
    },
    round: {
      header: 'Round',
      desc: 'Rounded buttons behave the same as regular buttons but have rounded edges.'
    },
    block: {
      header: 'Block',
      desc: 'Block buttons extend the full available width.'
    }
  }],
  props: {
    'v-btn': {
      block: 'Expands the button to 100% of available space',
      depressed: 'Removes the button box shadow',
      fab: 'Makes button round',
      flat: 'Removes the button background color',
      icon: 'Designates the button as icon - round and flat',
      inputValue: 'Controls the button active state',
      large: 'Large size button',
      loading: 'Adds a loading icon animation',
      outline: 'Button will have an outline',
      round: 'Button will be round on the sides',
      small: 'Small size button',
      type: 'Set the button\'s type attribute'
    }
  }
}
