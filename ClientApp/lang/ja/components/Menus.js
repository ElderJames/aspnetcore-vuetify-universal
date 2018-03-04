export default {
  header: 'Menu',
  headerText: 'The `v-menu` component shows a menu at the position of the element used to activate it.',
  components: ['v-menu'],
  examples: [{
    activator: {
      header: 'Activator',
      desc: 'Remember to put the element that activates the menu in the `activator` slot.',
      uninverted: true
    },
    absolute: {
      header: 'Absolute position',
      desc: 'Menus can also be placed absolutely on top of the activator element using the `absolute` prop. Try clicking anywhere on the image.',
      uninverted: true
    },
    absoluteWithoutActivator: {
      header: 'Absolute position without activator',
      desc: 'Menus can also be used without an activator by using `absolute` together with the props `position-x` and `position-y`. Try right-clicking anywhere on the image.',
      uninverted: true
    },
    hover: {
      header: 'Hover',
      desc: 'Menus can be accessed using hover instead of clicking with the `open-on-hover` prop.',
      uninverted: true
    },
    menus: {
      header: 'Menus',
      desc: 'Menus can be placed within almost any component.',
      uninverted: true
    },
    customTransition: {
      header: 'Custom transitions',
      desc: 'Vuetify comes with 3 standard transitions, **scale**, **slide-x** and **slide-y**. You can also create your own and pass it as the transition argument. For an example of how the stock transitions are constructed, visit <a href="https://github.com/vuetifyjs/vuetify/blob/master/src/util/helpers.js#L13" target="_blank" rel="noopener">here</a>.',
      uninverted: true
    },
    popover: {
      header: 'Popover menu',
      desc: 'A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.',
      uninverted: true
    }
  }],
  props: {
    closeOnClick: 'Designates if menu should close on outside-activator click',
    closeOnContentClick: 'Designates if menu should close when its content is clicked',
    disabled: 'Disables the menu',
    offsetX: 'Offset the menu on the x-axis. Works in conjunction with direction left/right',
    offsetY: 'Offset the menu on the y-axis. Works in conjunction with direction top/bottom',
    openOnClick: 'Designates whether menu should open on activator click',
    openOnHover: 'Designates whether menu should open on activator hover',
    origin: 'Mixins.Transitionable.props.origin',
    transition: 'Mixins.Transitionable.props.transition'
  }
}
