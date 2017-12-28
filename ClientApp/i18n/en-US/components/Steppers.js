export default {
  header: 'Stepper',
  headerText: 'The <code>v-stepper</code> component displays progress through numbered steps.',
  components: [
    'v-stepper-step',
    'v-stepper-content',
    'v-stepper-header'
  ],
  examples: [{
    example: {
      header: "Example",
      desc: 'A stepper can be used for a multitude of scenarios, including shopping carts, record creation and more.'
    },
    editable: {
      header: "Editable steps",
      desc: 'An editable step can be selected by a user at any point and will navigate them to that step.'
    },
    nonEditable: {
      header: "Non-editable steps",
      desc: 'Non-editable steps force a user to process linearly through your process.'
    },
    optional: {
      header: "Optional steps",
      desc: 'An optional step can be called out with sub-text.'
    },
    horizontal: {
      header: "Horizontal steps",
      desc: 'Horizontal steppers move users along the x-axis through the defined steps.'
    },
    vertical: {
      header: "Vertical steppers",
      desc: 'Vertical steppers move users along the y-axis and otherwise work exactly the same as their horizontal counterpart.'
    },
    linear: {
      header: "Linear steppers",
      desc: 'Linear steppers will always move a user through your defined path.'
    },
    nonLinear: {
      header: "Non-linear steppers",
      desc: 'Non-linear steppers allow the user to move through your process in whatever way they choose.'
    },
    alternateLabels: {
      header: "Alternate labels",
      desc: 'Steppers also have an alternative label style which places the title under the step itself.'
    },
    error: {
      header: "Multi-line error state",
      desc: 'An error state can be displayed to notify the user of some action that must be taken.'
    },
    alternateError: {
      header: "Alternative label multi-line error state",
      desc: 'The error state can also be applied to the alternative label style.'
    },
    verticalError: {
      header: "Vertical multi-line error state",
      desc: 'The same state also applies to Vertical steppers.'
    },
    dynamic: {
      header: "Dynamic steps",
      desc: 'Steppers can have their steps dynamically added or removed. If a currently active step is removed, be sure to account for this by changing the applied model.'
    }
  }],
  props: {
    altLabels: 'Places the labels beneath the step',
    complete: 'Marks step as complete',
    completeIcon: 'Icon to display when step is marked as completed',
    editable: 'Marks step as editable',
    editIcon: 'Icon to display when step is editable',
    errorIcon: 'Icon to display when step has an error',
    nonLinear: 'Allow user to jump to any step',
    vertical: 'Display steps vertically'
  },
  special: {
    props: {
      'v-stepper-step': {
        step: 'Content to display inside step circle'
      },
      'v-stepper-content': {
        step: 'Sets step to associate the content to'
      }
    }
  }
}
