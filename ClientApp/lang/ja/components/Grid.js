export default {
  header: 'Grid system',
  headerText: 'Vuetify has a 12 point grid system. Built using <kbd>flex-box</kbd>, the grid is used to layout an application\'s content.  It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations. The props for grid components are actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props, while still providing the classes to be used anywhere.',
  components: ['v-container', 'v-layout', 'v-flex', 'v-spacer'],
  examples: [{
    grid: {
      header: 'Usage',
      desc: 'The `v-container` can be used for a center focused page, or given the `fluid` prop to extend its full width. `v-layout` is used for separating sections and contains the `v-flex`. The structure of your layout will be as follows, **v-container** &raquo; **v-layout** &raquo; **v-flex**. Each part of the grid chain is a flex-box element. The final, `v-flex`, automatically sets its children to have <kbd>flex: 1 1 auto</kbd>.',
      uninverted: true
    },
    offset: {
      header: 'Offset',
      desc: 'Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely to your needs.',
      uninverted: true
    },
    order: {
      header: 'Order',
      desc: 'You can control the ordering of grid items. As with offsets, you can set different orders for different sizes. Design specialized screen layouts that accommodate to any application.',
      uninverted: true
    },
    directionAndAlign: {
      header: 'Direction and Align',
      desc: 'Designate the direction and alignment in a variety of ways. All of the available <kbd>flex-box</kbd> api is available through intuitive helper props.',
      uninverted: true
    },
    rowColumnBreakpoint: {
      header: 'Row and column breakpoints',
      desc: 'Dynamically change your layout based upon resolution. **(resize your screen and watch the layout change to a `row` on small breakpoints)**',
      uninverted: true
    },
    nestedGrid: {
      header: 'Nested grid',
      desc: 'Grids can be nested, similar to other frameworks, in order to achieve very custom layouts.',
      uninverted: true
    },
    uniqueLayouts: {
      header: 'Unique layouts',
      desc: 'The power and flexibility of the Vuetify grid system allows you to create amazing user interfaces.',
      uninverted: true
    },
    spacer: {
      header: 'v-spacer',
      desc: 'The `v-spacer` component is useful when you want to fill available space or make space between two components.'
    },
    tags: {
      header: 'Html tags',
      desc: 'Sometimes you will want to specify a layout item as a specific tag, such as a `section` or `li` element.'
    }
  }],
  props: {
    tag: 'Mixins.Routable.props.tag',
    alignBaseline: 'Align items to the baseline.',
    alignCenter: 'Align items to the center.',
    alignContentCenter: 'Align content to the center.',
    alignContentEnd: 'Align content to the end.',
    alignContentSpaceAround: 'Align content to the space around.',
    alignContentSpaceBetween: 'Align content to the space between.',
    alignContentStart: 'Align content to the start.',
    alignEnd: 'Align items to the end.',
    alignStart: 'Align items to the start.',
    'd-{type}': 'Specify to display an element as flex/inline-flex/block etc. Syntax is `d-{type}`. For example `d-flex`.',
    fillHeight: 'Make sure that col element height is filled with parent and child. Important for Safari/Firefox if children is column element.',
    justifyCenter: 'Justify content to the center.',
    justifyEnd: 'Justify content to the end.',
    justifySpaceAround: 'Justify content to the space around.',
    justifySpaceBetween: 'Justify content to the space between.',
    justifyStart: 'Justify content to the start.',
    reverse: 'Reverses the currently selected direction (column, row).',
    wrap: 'Allows children to wrap within the container if the elements use more than 100%.',
    'v-container': {
      'grid-list-{xs through xl}': 'Sets the gutter between grid list items ranging from 2px to 24px',
      fluid: 'Removes viewport size breakpoints'
    },
    'v-flex': {
      'offset-(size)(1-12)': 'offset-xs: extra small, offset-sm: small, offset-md: medium, offset-lg: large, offset-xl: extra large. Example: offset-xs3',
      'order-(size)(1-12)': 'order-xs: extra small, order-sm: small, order-md: medium, order-lg: large, order-xl: extra large. Example: order-xs3',
      '(size)(1-12)': 'xs: extra small, sm: small, md: medium, lg: large, xl: extra large - 1 through 12'
    },
    'v-layout': {
      row: 'Sets flex direction to row',
      column: 'Sets flex direction to column'
    }
  },
  breakpointHeader: 'Breakpoint object',
  breakpointText1: 'Vuetify converts the available breakpoints into an accessible object from within your application. This will allow you to assign/apply specific properties and attributes based upon viewport size. The object can be accessed from:',
  breakpointText2: 'This object contains the same semantic properties that you are already used to using from the grid system. Let\'s try a real world example. You have a `v-dialog` component that you want to convert to a **full-screen** dialog on mobile devices. Normally you would need to bind watchers for the viewport size, and/or check whenever the page loads.',
  breakpointText3: 'That\'s a lot of boilerplate to write. Even if you opt to use the built in <a href="/directives/resizing">v-resize</a> directive, you are still going to have to define a resize method. With the **breakpoint** object you can completely skip this logic and get back to building your application.'
}
