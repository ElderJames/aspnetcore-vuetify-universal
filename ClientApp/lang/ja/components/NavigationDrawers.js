export default {
  header: 'Navigation drawer',
  headerText: 'The `v-navigation-drawer` component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without **vue-router** right out the box.',
  components: ['v-navigation-drawer'],
  examples: [{
    permanent: {
      header: 'Default',
      desc: 'The navigation drawer is primarily used to house links to the pages in your application'
    },
    permanentClipped: {
      header: 'Colored drawer',
      desc: 'Navigation drawers can be customized to fit any application\'s design. While any component can be used within a drawer, the primary ones you will use are `v-list`, all of the **list** children components and `v-divider`'
    },
    permanentFloating: {
      header: 'Permanent floating drawer',
      desc: 'A navigation drawer can be placed inside of a card and float over the content background.'
    },
    persistent: {
      header: 'Avatars',
      desc: 'Since drawers support the `v-list` component, you can easily create customized dashboard solutions.'
    },
    mini: {
      header: 'Mini',
      desc: 'The navigation drawer also has a mini-variant which can be controlled using the prop `mini-variant.sync`.'
    },
    temporary: {
      header: 'Temporary',
      desc: 'A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. This drawer behavior is mimicked on the persistent drawer when on mobile. Clicking outside of the drawer will cause it to close.'
    },
    dark: {
      header: 'Dark theme',
      desc: 'Vuetify also supports the dark application theme. This will not override components that have default themes so in some cases it will be necessary to manually set the dark theme accents.',
      uninverted: true
    }
  }],
  props: {
    absolute: 'Mixins.Positionable.props.absolute',
    clipped: 'A clipped drawer rests under the application toolbar',
    disableResizeWatcher: 'Will automatically open/close drawer when resized depending if mobile or desktop.',
    disableRouteWatcher: 'Disables opening of navigation drawer when route changes',
    fixed: 'Mixins.Positionable.props.fixed',
    floating: 'A floating drawer has no visible container (no border-right)',
    hideOverlay: 'Hide the display of the overlay',
    miniVariantWidth: 'Designates the width assigned when the `mini` prop is turned on',
    miniVariant: 'Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it',
    permanent: 'The drawer remains visible regardless of screen size',
    right: 'Places the navigation drawer on the right',
    stateless: 'Remove all automated state functionality (resize, mobile, route) and manually control the drawer state',
    temporary: 'A temporary drawer sits above its application and uses a scrim (overlay) to darken the background',
    touchless: 'Disable mobile touch functionality'
  }
}
