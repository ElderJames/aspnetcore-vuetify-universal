export default {
  header: 'Grid system',
  headerText: `Vuetify has a 12 point grid system. Built using <kbd>flex-box</kbd>, the grid is used to layout an application\'s content.  It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations. The props for grid components are actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props, while still providing the classes to be used anywhere.`,
  components: ['v-container', 'v-layout', 'v-flex', 'v-spacer'],
  examples: [{
    grid: {
      header: 'Usage',
      desc: 'The <code>v-container</code> can be used for a center focused page, or given the <code>fluid</code> prop to extend its full width. <code>v-layout</code> is used for separating sections and contains the <code>v-flex</code>. The structure of your layout will be as follows, **v-container** &raquo; **v-layout** &raquo; **v-flex**. Each part of the grid chain is a flex-box element. The final, <code>v-flex</code>, automatically sets its children to have <kbd>flex: 1 1 auto</kbd>.',
      uninverted: true
    },
    offset: {
      header: 'Offset',
      desc: `Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely to your needs.`,
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
      desc: 'Dynamically change your layout based upon resolution. **(resize your screen and watch the layout change to a <code>row</code> on small breakpoints)**',
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
    tags: {
      header: 'Html tags',
      desc: 'Sometimes you will want to specify a layout item as a specific tag, such as a <code>section</code> or <code>li</code> element.'
    }
  }],
  props: {},
  breakpointHeader: 'Breakpoint object',
  breakpointText1: 'Vuetify converts the available breakpoints into an accessible object from within your application. This will allow you to assign/apply specific properties and attributes based upon viewport size. The object can be accessed from:',
  breakpointText2: `This object contains the same semantic properties that you are already used to using from the grid system. Let's try a real world example. You have a <code>v-dialog</code> component that you want to convert to a **full-screen** dialog on mobile devices. Normally you would need to bind watchers for the viewport size, and/or check whenever the page loads.`,
  breakpointText3: `That's a lot of boilerplate to write. Even if you opt to use the built in <a href="/directives/resizing">v-resize</a> directive, you are still going to have to define a resize method. With the **breakpoint** object you can completely skip this logic and get back to building your application.`
}
