export default {
  header: 'Alert',
  headerText: 'The `v-alert` component is used to convey important information to the user. It comes in 4 variations, **success**, **info**, **warning** and **error**. These have default icons assigned which can be changed and represent different actions',
  components: ['v-alert'],
  examples: [{
    contextual: {
      header: 'Contextual'
    },
    closable: {
      header: 'Closable',
      desc: 'Using `v-model` you can control the state of the Alert. If you don\'t want to assign a v-model and just display the alert, you can simply assign the prop `value`.'
    },
    icon: {
      header: 'Custom Icon / No Icon',
      desc: 'You can easily assign a custom icon or remove it all together.'
    },
    transition: {
      header: 'Display transition',
      desc: 'You can apply a custom transition to the show/hide of the alert.'
    },
    outline: {
      header: 'Outline',
      desc: 'Outline alerts inherit their borders from the current color applied.'
    }
  }],
  props: {
    dismissible: 'Specifies that the Alert can be closed',
    icon: 'Designates a specific icon',
    outline: 'Alert will have an outline',
    type: 'Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and a pre-defined icon.'
  }
}
