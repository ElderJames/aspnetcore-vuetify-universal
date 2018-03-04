export default {
  header: 'Buttons: Floating Action Button',
  headerText: 'The `v-btn` component can be used as a Floating action button. This provides an application a main point of action. Combined with the `v-speed-dial` component, you can create a diverse set of functions available for your users.',
  components: ['v-speed-dial', 'v-btn'],
  examples: [{
    promotedAction: {
      header: 'Promoted action',
      desc: 'Floating action buttons can be attached to material to signify a promoted action in your application. The default size will be used in most cases, whereas the `small` variant can be used to maintain continuity with similar sized elements.'
    },
    small: {
      header: 'Small variant',
      desc: 'For better visual appeal, we use a small button to match our list avatars.'
    },
    displayAnimation: {
      header: 'Display animation',
      desc: 'When displaying for the first time, a floating action button should animate onto the screen. Here we use the `v-fab-transition` with v-show. You can also use any custom transition provided by Vuetify or your own.'
    },
    lateralScreens: {
      header: 'Lateral screens',
      desc: 'When changing the default action of your button, it is recommended that you display a transition to signify a change. We do this by binding the `key` prop to a piece of data that can properly signal a change in action to the Vue transition system. While you can use a custom transition for this, ensure that you set the `mode` prop to **out-in**.'
    },
    speedDial: {
      header: 'FAB with speed-dial',
      desc: 'The speed-dial component has an very robust api for customizing your FAB experience exactly how you want.'
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
    },
    'v-speed-dial': {
      direction: 'Direction in which speed-dial content will show. Possible values are `top`, `bottom`, `left`, `right`.',
      openOnHover: 'Opens speed-dial on hover'
    }
  }
}
