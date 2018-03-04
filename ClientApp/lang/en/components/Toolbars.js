export default {
  header: 'Toolbar',
  headerText: 'The `v-toolbar` component is pivotal to any gui, as it generally is the primary source of site navigation. The toolbar component works great in conjunction with a navigation drawer for hiding links and presenting an activator to open the sidebar on mobile.',
  components: [
    'v-toolbar',
    'v-system-bar'
  ],
  examples: [{
    usage: {
      header: 'Usage',
      desc: 'A toolbar is a flexible container that can be utilized in a number of ways. By default, the toolbar is 64px high on desktop, 56px high on mobile portrait and 48px high on mobile landscape. There are a number of helper components available to use with the toolbar. These are `v-toolbar-side-icon`, `v-toolbar-title` and `v-toolbar-items`.'
    },
    appBar: {
      header: 'App bar',
      desc: 'An App bar is the primary toolbar of your application. It can contain icons, menus and more.'
    },
    appBarItems: {
      header: 'App bar with items',
      desc: 'Utilizing the `v-toolbar-items` component you can use regular `v-btn` components to create app bar items. Don\'t forget to apply the `flat` prop to each button.'
    },
    appBarExtension: {
      header: 'App bar with extension',
      desc: 'An extension can be used that creates a much more prominent bar. If a title is placed within the extension, it will automatically be shifted to the right to match the normal location it would be at in the main bar.'
    },
    columnWidthWithHierarchy: {
      header: 'Column width with hierarchy',
      desc: 'Toolbars come in 2 variants, light and dark. Light toolbars have dark tinted buttons and dark text whereas Dark toolbars have white tinted buttons and white text.'
    },
    flexibleAndCard: {
      header: 'Flexible toolbar and card toolbar',
      desc: 'With a few custom styles, you can easily create your amazing user interfaces.'
    },
    floatingWithSearch: {
      header: 'Floating with search',
      desc: 'A floating toolbar can be placed over the content that it references.'
    },
    variations: {
      header: 'Variations',
      desc: 'An app-bar has multiple variations that can be applied with themes and helper classes. These range from light and dark themes, colored and transparent.',
      uninverted: true
    },
    prominent: {
      header: 'Prominent toolbars',
      desc: 'Prominent toolbars add a slot where you can placed elements in the extended area. The content and extension areas will be locked to 64px in height.'
    },
    dense: {
      header: 'Dense toolbars',
      desc: 'Dense toolbars reduce their height to 48px. This is also the default behavior for mobile landscape orientation.'
    },
    denseProminent: {
      header: 'Dense prominent toolbars',
      desc: 'You can combine both the prominent and dense to extend a smaller variant of the toolbar.'
    },
    scrolling: {
      header: 'Scrolling techniques',
      desc: 'A toolbar can transition off screen when scrolling. Here we demonstrate how you can specify the scroll target (default is window). Keep in mind, for this example there is special markup that will not be required in your application.'
    },
    appBarMenu: {
      header: 'App bar with menu',
      desc: 'You can add menu components to a toolbar.'
    },
    systemBarsStatusWindow: {
      header: 'System bars - status/window',
      desc: 'System bars are useful for notification icons on mobile and desktop. For live examples of, head to the pre-defined layouts.'
    }
  }],
  props: {
    card: 'Inherits border radius when used within `v-card`',
    clippedLeft: 'Designates that the applications `v-navigation-drawer` is clipped on the left side of the toolbar',
    clippedRight: 'Designates that the applications `v-navigation-drawer` is clipped on the right side of the toolbar',
    dense: 'Reduces the height of the toolbar content and extension',
    extended: 'Force the toolbar to generate the extension without using the slot',
    flat: 'Removes the toolbar box-shadow',
    floating: 'Makes the toolbar float inline',
    height: 'Designates a specific height for the toolbar',
    lightsOut: 'Reduces the system bar opacity',
    manualScroll: 'Manually apply the **scroll-off-screen** functionality',
    prominent: 'Increases the height of the toolbar content and extension',
    scrollOffScreen: 'Will transition the toolbar off screen when scrolling down',
    scrollTarget: 'Assign the scroll target for scroll-off-screen',
    scrollThreshold: 'The amount of scroll distance down before the toolbar uses scroll-off-screen',
    status: 'Reduces the system bar height',
    window: 'Increases the system bar height'
  }
}
