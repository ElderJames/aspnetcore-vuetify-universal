export default {
  header: 'Time picker',
  headerText: 'The `v-time-picker` is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting the time.',
  components: ['v-time-picker'],
  examples: [{
    timeLight: {
      header: 'Time pickers',
      desc: 'Time pickers have the light theme enabled by default.'
    },
    timeColorable: {
      header: 'Time pickers - Colors',
      desc: 'Time picker colors can be set using the `color` and `header-color` props. If `header-color` prop is not provided  header will use the `color` prop value.'
    },
    timeDialogAndMenu: {
      header: 'Time pickers - In dialog and menu',
      desc: 'Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.'
    },
    time24hFormat: {
      header: 'Time pickers - 24h format',
      desc: 'A time picker can be switched to 24hr format.'
    },
    timeAllowedTimes: {
      header: 'Time pickers - Allowed times',
      desc: 'You can specify allowed times using arrays, objects, and functions.'
    },
    timeWidth: {
      header: 'Time pickers - Setting picker width',
      desc: 'You can specify allowed the picker\'s width or make it full width.'
    }
  }],
  props: {
    'v-time-picker': {
      format: 'Available options are `ampm` and `24hr`',
      allowedHours: 'Restricts which hours can be selected',
      allowedMinutes: 'Restricts which minutes can be selected',
      scrollable: 'Allows changing hour/minute with mouse scroll',
      min: 'Minimum allowed time',
      max: 'Maximum allowed time'
    }
  }
}
